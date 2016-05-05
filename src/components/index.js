import React from "react";
import Breadcrumb from 'antd/lib/breadcrumb';
// import SideBar from "./menu/sidebar";
// import TopMenu from "./menu/topmenu";
import MainMenu from "./menu/mainmenu";
import LeftSubMenu from "./menu/submenu";
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
			</div>
		)
	}
}