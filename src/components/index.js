import React from "react";
import Breadcrumb from 'antd/lib/breadcrumb';
import SideBar from "./menu/sidebar";
import TopMenu from "./menu/topmenu";
export default class Index extends React.Component{
	render(){
		return (
			<div>
				<SideBar/>
				<TopMenu/>
				<div className="content">	        	
		        	<Breadcrumb>
					    <Breadcrumb.Item>首页</Breadcrumb.Item>
					    <Breadcrumb.Item href="">应用中心</Breadcrumb.Item>
					    <Breadcrumb.Item href="">应用列表</Breadcrumb.Item>
					    <Breadcrumb.Item>某应用</Breadcrumb.Item>
				  	</Breadcrumb>
			  		<div className="main">{this.props.children}</div>	        
	       		 </div>
			</div>
		)
	}
}