<template>
  <WClassicView ref="wrap" :load="load" :table-attrs="tableAttrs" :table-listeners="tableListeners" :watermark="$user.watermarkStr">
    <template slot="tools">
      <el-button class="fl" type="primary" size="medium" :disabled="testDisabled" @click="handleTest">立即测试</el-button>
    </template>

    <template slot="table">
      <el-table-column prop="id" label="ID" />
      <el-table-column prop="phone" label="设备号" />
      <el-table-column prop="appPackages" label="马甲包" :formatter="handleAppPackages" />
      <el-table-column prop="status" label="状态" :formatter="handleTriaPuStatus" />
      <WTableColOperate label="操作" min-width="80">
        <template v-slot="scope">
          <el-button type="danger" size="mini" @click="handleRowDel(scope)">删除</el-button>
        </template>
      </WTableColOperate>
    </template>

    <div>
      <WToolsBar
        :class="{
          upload: fileList.length
        }"
      >
        <!-- <el-button type="primary">导入推送内容</el-button> -->
        <el-upload
          ref="upload"
          action=""
          :http-request="handleRequest"
          :before-remove="beforeRemove"
          accept="xlsx"
        >
          <el-button size="small" type="primary" @click="handleUpload">点击上传</el-button>
        </el-upload>
      </WToolsBar>
      <WTable
        :data="tableData2"
      >
        <!-- <el-table-column prop="id" label="ID  " width="50" show-overflow-tooltip /> -->
        <el-table-column prop="title" label="标题" show-overflow-tooltip />
        <el-table-column prop="content" label="内容" show-overflow-tooltip />
        <!-- <el-table-column prop="appPackages" label="马甲包" show-overflow-tooltip /> -->
      </WTable>
    </div>

  </WClassicView>
</template>

<script>
import WClassicView from 'widget/views/WClassicView'
import { pushFormatter } from '@/mixins/tableColFormatter'
// import { cloneDeep } from 'lodash'
// import { validPhoneNumber } from '@/utils/validate'
import XLSX from 'xlsx'

const initAddForm = {
  phone: '',
  firm: '1'
}

const excelMap = {
  '内容': 'content',
  '标题': 'title',
  '马甲包': 'appPackages',
}

export default {
  name: 'TrialPuIndex',
  components: {
    WClassicView,
  },
  // 混入 update 方法.
  mixins: [WClassicView.Update, WClassicView.Table, pushFormatter],
  data() {
    return {
      tableData2: [],
      tableListeners: {
        // 'row-click': this.handleRowClick
      },
      tableAttrs: {
        // displayname: 'trialPu-table-1'
      },
      fileList: [],
      phoneIds: [],
      testDisabled: false,
    }
  },
  methods: {
    /**
     * @param { Number } page 当前页面
     * @param { Number } pageSize 页码条目
     * @return { Promise }
     */
    load(page, pageSize) {
      return this.$api.getPhoneList({
        page, pageSize
      }).then((data) => {
        this.phoneIds = data.list.map(o => o.id)
        this.tableDataTemp = data.list
        return { tableData: this.tableDataTemp, total: data.total }
      })
    },
    /**
     * 添加编辑弹窗关闭回调
     */
    handleBeforeClose(next) {
      this.$refs.form && this.$refs.form.resetFields()
      Object.assign(this.addForm, initAddForm)
      next()
    },
    /**
     * 添加设备ID
     */
    handleEditSubmit() {
      this.$refs.form.validate().then(_ => {
        this.$api.addPhoneItem(this.addForm).then(_ => {
          this.update()
          this.addVisible = false
        }).catch(_ => {
          console.error(`<<< 添加设备ID错误.`)
          this.addVisible = false
        })
      })
    },
    handleRowDel({ row, $index }) {
      this.$confirm('此操作将删除该手机号, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 前端删除
        this.tableDataTemp.splice($index, 1)

        // this.$api.delPhoneItem({ id: row.id }).then(() => {
        //   this.update()
        // })
      })
    },
    /**
     * 导入excel数据
     */
    handleRequest({ file }) {
      this.fileList.push(file)
      return new Promise((resolve, reject) => {
        try {
          const reader = new FileReader()
          reader.readAsBinaryString(file)
          reader.onload = (e) => {
            const data = e.target.result
            const workbook = XLSX.read(data, { type: 'binary' })
            const sheetNames = workbook.SheetNames
            const worksheet = workbook.Sheets[sheetNames[0]]
            const dataArray = XLSX.utils.sheet_to_row_object_array(worksheet)
            this.tableData2 = dataArray.map(o => {
              const ret = {}
              Object.keys(o).forEach(q => {
                q = q.trim()
                ret[excelMap[q]] = o[q]
              })
              return ret
            })
            resolve(this.tableData2)
          }
        } catch (error) {
          console.error(`<<< 解析excel失败!`, error)
          reject(error)
        }
      })
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    handleUpload() {
      this.$refs.upload && this.$refs.upload.clearFiles()
      this.fileList = []
    },
    /**
     * 立即测试
     */
    handleTest() {
      this.testDisabled = true
      return this.$api.saveContent({
        phoneIds: this.phoneIds,
        contentList: this.tableData2,
      }).then((res) => {
        this.$message.success('保存成功.')

        this.$api.saveContentTryPush().then(res => {
          this.$message.success('已推送，请到试推查询查看结果.')
          this.testDisabled = false
        }).catch(_ => {
          this.testDisabled = false
        })
      }).catch((error) => {
        console.error(`<<< 保存失败!`, error)
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.widget-tools-bar {
  text-align: left !important;
}
.widget-tools-bar.upload {
  height: auto !important;
  margin-bottom: -5px;
}
::v-deep .el-table {
  .cell {
    height: auto;
  }

  .widget-tc-operate .cell {
    padding-left: 10px !important;
  }
}
</style>
