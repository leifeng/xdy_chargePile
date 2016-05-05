import React from "react";
// import Table from "antd/lib/table";
// import Icon from 'antd/lib/icon';

import { Form, Input, Row, Col, Button,Table,Icon,DatePicker,Select,Cascader ,Popconfirm,Pagination ,Modal,Upload, Checkbox, Radio,Tooltip} from 'antd';
const FormItem = Form.Item;
const RangePicker = DatePicker.RangePicker;
const Option = Select.Option;
const RadioGroup = Radio.Group;

const data = [{
  key: '1',
  name: '胡彦斌',
  age: 32,
  address: '西湖区湖底公园1号',
  description:'xdfasdfs'
}, {
  key: '2',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号',
  description:'xdfasdfs'
}, {
  key: '3',
  name: '李大嘴',
  age: 32,
  address: '西湖区湖底公园1号',
  description:'xdfasdfs'
}];
const options = [{
  value: 'zhejiang',
  label: '浙江',
  children: [{
    value: 'hangzhou',
    label: '杭州',
    children: [{
      value: 'xihu',
      label: '西湖',
    }],
  }],
}, {
  value: 'jiangsu',
  label: '江苏',
  children: [{
    value: 'nanjing',
    label: '南京',
    children: [{
      value: 'zhonghuamen',
      label: '中华门',
    }],
  }],
}];
// const rowSelection = {
//   onChange(selectedRowKeys, selectedRows) {
//     console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
//   },
//   onSelect(record, selected, selectedRows) {
//     console.log(record, selected, selectedRows);
//   },
//   onSelectAll(selected, selectedRows, changeRows) {
//     console.log(selected, selectedRows, changeRows);
//   },
// };
function handleSelectChange(value) {
  console.log(`selected ${value}`);
}

function onChange(value) {
  console.log('From: ', value[0], ', to: ', value[1]);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}
let children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function onShowSizeChange(current, pageSize) {
  console.log(current, pageSize);
}
export default class UserGroup extends React.Component{
  constructor(){
    super()
    this.state={   
      selectedRowKeys: [],  
      loading: false,
      visible: false 
    }
    this.start=this.start.bind(this);
    this.onSelectChange=this.onSelectChange.bind(this);
    this.showModal=this.showModal.bind(this);
    this.handleOk=this.handleOk.bind(this);
    this.renderAction=this.renderAction.bind(this);
    this.handleCancel=this.handleCancel.bind(this);
  }
  showModal() {
    console.log('show')
    this.setState({
      visible: true
    });
  }
  handleOk() {
    console.log('点击了确定');
    this.setState({
      visible: false
    });
  }
  handleCancel(e) {
    console.log(e);
    this.setState({
      visible: false
    });
  }
  start() {
    this.setState({
      loading: true
    });
    // 模拟 ajax 请求，完成后清空
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  }

  onSelectChange(selectedRowKeys) {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({
      selectedRowKeys
    });
  }
  renderAction(){
    return (      <span>
        <a href="#" onClick={this.showModal}>编辑</a>
        <span className="ant-divider"></span>
        <Popconfirm placement="top" title="确定要删除这个吗？">
          <a href="#">删除</a>
        </Popconfirm>
      </span>)
  }
	render(){
    const {loading,selectedRowKeys} = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    const pagination = {
      total: 100,
      showSizeChanger: true,
      onShowSizeChange(current, pageSize) {
        console.log('Current: ', current, '; PageSize: ', pageSize);
      },
      onChange(current) {
        console.log('Current: ', current);
      }
    };
const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
  render(text) {
    return <a href="#">{text}</a>;
  }
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '住址',
  dataIndex: 'address',
  key: 'address',
}, {
  title: '操作',
  key: 'operation',
  render:this.renderAction
}];
		return (
      <div>
      <Form horizontal className="advanced-search-form">
        <Row>
          <Col span="8">
            <FormItem
              label="普通搜索："
              labelCol={{ span: 10 }}
              wrapperCol={{ span: 14 }}>
              <Input placeholder="请输入搜索名称" />
            </FormItem>
            <FormItem
              label="下拉多选："
              labelCol={{ span: 10 }}
              wrapperCol={{ span: 14 }}>
                <Select multiple             
                  defaultValue={['a10', 'c12']} onChange={handleChange}>
                  {children}
                </Select>
            </FormItem>
          </Col>    
          <Col span="8">
            <FormItem
              label="下拉选择："
              labelCol={{ span: 10 }}
              wrapperCol={{ span: 14 }}>
                  <Select defaultValue="lucy" onChange={handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>Disabled</Option>
                    <Option value="yiminghe">yiminghe</Option>
                  </Select>
            </FormItem>
            <FormItem
              label="联动选择："
              labelCol={{ span: 10 }}
              wrapperCol={{ span: 14 }}>
             <Cascader options={options} onChange={onChange} style={{width:'100%'}} />
            </FormItem>
          </Col>  
          <Col span="8">
            <FormItem
              label="时间选择："
              labelCol={{ span: 10 }}
              wrapperCol={{ span: 14 }}>
              <RangePicker  onChange={onChange} />
            </FormItem>      

          </Col> 
        </Row>
        <Row>
          <Col span="8" offset="16" style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit">搜索</Button>
            <Button>清除条件</Button>
          </Col>
        </Row>
      </Form>

      <div style={{ marginBottom: 16 }}>

         <Button type="primary" onClick={this.showModal}>
            <Icon type="plus" />
            &nbsp;添加记录
        </Button>
        &nbsp;
        <Upload className="upload">
            <Button type="ghost">
              <Icon type="upload" /> 导入数据
            </Button>
        </Upload>
        &nbsp;
      <Button type="ghost" onClick={this.start}
           disabled={!hasSelected} loading={loading}>
           <Icon type="delete" />
            &nbsp;批量删除
        </Button>
        &nbsp;
      </div>

      <Table 
      expandedRowRender={record => <p>{record.description}</p>}
      rowSelection={rowSelection} 
      columns={columns} 
      dataSource={data} 
       pagination={pagination}  
       bordered/>
        <Modal title="添加/编辑" visible={this.state.visible}
          onOk={this.handleOk} onCancel={this.handleCancel}>
            <Form horizontal>

            <FormItem
              id="control-input"
              label="输入框："
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 14 }}>
              <Input id="control-input" placeholder="Please enter..." />
            </FormItem>

            <FormItem
              id="control-textarea"
              label="文本域："
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 14 }}>
              <Input type="textarea" id="control-textarea" rows="3" />
            </FormItem>

            <FormItem
              id="select"
              label="Select 选择器："
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 14 }}>
              <Select id="select" size="large" defaultValue="lucy" style={{ width: 200 }} onChange={handleSelectChange}>
                <Option value="jack">jack</Option>
                <Option value="lucy">lucy</Option>
                <Option value="disabled" disabled>disabled</Option>
                < Option value="yiminghe">yiminghe</Option>
              </Select>
            </FormItem>

            <FormItem
              label="Checkbox 多选框："
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 18 }} >
              <label className="ant-checkbox-vertical">
                <Checkbox />选项一
              </label>
              <label className="ant-checkbox-vertical">
                <Checkbox />选项二
              </label>
              <label className="ant-checkbox-vertical">
                <Checkbox disabled />选项三（不可选）
              </label>
            </FormItem>

            <FormItem
              label="Checkbox 多选框："
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 18 }} >
              <label className="ant-checkbox-inline">
                <Checkbox />选项一
              </label>
              <label className="ant-checkbox-inline">
                <Checkbox />选项二
              </label>
              <label className="ant-checkbox-inline">
                <Checkbox />选项三
              </label>
            </FormItem>

            <FormItem
              label="Radio 单选框："
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 18 }} >
              <RadioGroup>
                <Radio value="a">A</Radio>
                <Radio value="b">B</Radio>
                <Radio value="c">C</Radio>
                <Radio value="d">D</Radio>
              </RadioGroup>
            </FormItem>
          </Form>
        </Modal>
      </div>
		
			)
	}
}