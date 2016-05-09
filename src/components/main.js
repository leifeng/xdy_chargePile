import React from "react";
// import Breadcrumb from 'antd/lib/breadcrumb';
// import Affix from 'antd/lib/affix'
import {Breadcrumb} from 'antd'
import MainMenu from "./menu/mainmenu";

export default class Main extends React.Component{
	render(){
		return (
			<div>
				<MainMenu/>	
				<div className="breadcrumb">
			        <Breadcrumb {...this.props}/>
				</div>
		  		<div className="main">{this.props.children}</div>    
			</div>
		)
	}
}