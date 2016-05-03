import React,{Component} from 'react';
import Link from 'react-router/lib/Link';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
const SubMenu = Menu.SubMenu;

export default class Sidebar extends Component{
	constructor(){
		super();
		this.handleClick=this.handleClick.bind(this);		
	}

	handleClick(e) {
	    console.log('click ', e);
	    this.setState({
	      current: e.key
	    });
	}

	render(){
		return (
		<div>
			<div className="sidebar">
		        <Menu theme="dark"
		          onClick={this.handleClick}
		          style={{ width: 240 }}
		          defaultOpenKeys={['sub1']}		          
		          mode="inline">
			          	<SubMenu key="sub1" title={<span><Icon type="mail" /><span>用户管理</span></span>}>			          		
				       	    <Menu.Item key="1"><Link to="/index">分组管理</Link></Menu.Item>
				           	<Menu.Item key="2">用户管理</Menu.Item>     
			          	</SubMenu>
			          	<SubMenu key="sub2" title={<span><Icon type="appstore" /><span>充电站/桩状态</span></span>}>
				            <Menu.Item key="3">实时查询</Menu.Item>
				            <Menu.Item key="4">定时更新</Menu.Item>   
			             	<Menu.Item key="5">定时设置</Menu.Item>      
			          	</SubMenu>
			          	<SubMenu key="sub3" title={<span><Icon type="setting" /><span>收费标准维护</span></span>}>
				            <Menu.Item key="6">单一充电桩设置</Menu.Item>
				            <Menu.Item key="7">充电站所辖充电桩设置</Menu.Item>
			          	</SubMenu>
		          		<Menu.Item key="sub4">
		          			<Link to="/index">黑名单维护</Link>
		        		</Menu.Item>
		        		<SubMenu key="sub5" title={<span><Icon type="setting" /><span>充电控制</span></span>}>
				            <Menu.Item key="8">充电</Menu.Item>
				            <Menu.Item key="9">暂停</Menu.Item>
				            <Menu.Item key="10">停止</Menu.Item>
				            <Menu.Item key="11">定时检测</Menu.Item>
		          		</SubMenu>
		            	<Menu.Item key="sub6">
		          			<a href="http://www.alipay.com/" target="_blank">费用结算</a>
		        		</Menu.Item>
		        		<Menu.Item key="sub7">
		          			<a href="http://www.alipay.com/" target="_blank">会员管理</a>
		        		</Menu.Item>
		        		<SubMenu key="sub8" title={<span><Icon type="setting" /><span>会员优惠管理</span></span>}>
		            		<Menu.Item key="12">预充值折扣管理</Menu.Item>
		            		<Menu.Item key="13">分享充电桩优惠</Menu.Item>
		          		</SubMenu>
		          		<Menu.Item key="sub9">
		          			<a href="http://www.alipay.com/" target="_blank">会员积分管理</a>
		        		</Menu.Item>
		        		<SubMenu key="sub10" title={<span><Icon type="setting" /><span>分账</span></span>}>
		            		<Menu.Item key="14">分账周期设置</Menu.Item>
		            		<Menu.Item key="15">分账统计</Menu.Item>
		          		</SubMenu>
		          		<SubMenu key="sub11" title={<span><Icon type="setting" /><span>报表</span></span>}>
		            		<Menu.Item key="16">用户消费统计</Menu.Item>
		            		<Menu.Item key="17">设备报警统计</Menu.Item>
		            		<Menu.Item key="18">充电桩充电统计</Menu.Item>
		          		</SubMenu>
		        </Menu>
	        </div>
	        <div className="content">{this.props.children}</div>
      	</div>
		)
	}
}