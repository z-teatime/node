// 添加部门/分组
const AddDuty = (props) => {
  const intl = useIntl();
  return (
    <EasyModal
      title={intl.formatMessage({ id: "pages.systemSettings.addDuty" })}
      modal={{
        onFinish: (values) => {
          console.log("values", values);
        },
        items: [
          {
            name: "name",
            label: "部门名称",
          },
          {
            name: "name",
            label: "部门名称",
            type: "Select",
          },
        ],
      }}
    >
      1
      {/* <Button className="jn-btn-primary" type="primary">
        {intl.formatMessage({ id: 'pages.systemSettings.addEmployee' })}
      </Button> */}
      这是中文
      <PlusCircleOutlined />
    </EasyModal>
  );
};
