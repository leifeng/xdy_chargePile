import React from "react";
import Breadcrumb from 'antd/lib/breadcrumb';
import Affix from 'antd/lib/affix'
// import SideBar from "./menu/sidebar";
// import TopMenu from "./menu/topmenu";
import MainMenu from "./menu/mainmenu";
import LeftSubMenu from "./menu/submenu";
import FastLink from './menu/fastlink.js';
export default class Index extends React.Component{
	render(){
		return (
			<div>
				<MainMenu/>				
				<div className="content">
					<LeftSubMenu/>
					<div className="breadcrumb">
			        	<Breadcrumb {...this.props}/>
				  	</div>
			  		<div className="main">{this.props.children}</div>	        
	       		</div>
	       		<FastLink/>
			</div>
		)
	}
}