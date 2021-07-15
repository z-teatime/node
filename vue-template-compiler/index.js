// import * as compliler from 'vue-template-compiler'
const compliler = require('vue-template-compiler')

console.log('compliler', compliler)

const ret = compliler.parseComponent(`<template>
<ul class="drag-items" ref="drags">
    <li
      class="drag-item"
      :tag="item.tag"
      v-for="(item, index) in items"
      :key="index"
      formData="{}"
    >
        <a>
            <i :class="item.icon?item.icon:'el-icon-setting'"></i><span>{{item.title}}</span>
        </a>
    </li>
</ul>
</template>

<script>
import { DragItemsConfig, Sortable } from "../../index";

export default {
  props: {
    items: Array
  },
  mounted() {
    new Sortable(this.$refs.drags, DragItemsConfig);
  }
};
</script>

<style lang="less">
.body {
  color: red;
}
</style>
`)
const ret1 = compliler.compile('<div v-test><span>123</span></div>', {
  directives: {
    test (node, directiveMeta) {
      console.log('node', node)
      // transform node based on directiveMeta
    }
  }
})
console.log('ret', ret, ret1)

// const ret2 = compliler.compile(ret)
