import React  from "react";
import Link from 'react-router/lib/Link';
import {Menu,Icon,Row,Col,Button} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
export default class MainMenu extends React.Component{

	constructor() {
		super();
	    this.state= {
	      current: 'mail'
	    };
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
			<div className="mainMenu">
				<Row type="flex" justify="end" className="top">
					<Col span="2" offset="21">管理员:xxxx</Col>
					<Col span="1" className="logout">退出</Col>
				</Row>
				<Row type="flex" justify="end" className="menus">
					<Col span="10">
						<img src="https://www.baidu.com/img/baidu_jgylogo3.gif" className="logo"/>
					</Col>
					<Col span="14">
						<Menu onClick={this.handleClick}
					        selectedKeys={[this.state.current]}
					        mode="horizontal" style={{lineHeight:'60px'}}>
					        <Menu.Item key="mail">
					        	<Link to="/"><Icon type="mail" />首页</Link>
					        </Menu.Item>
					        <Menu.Item key="app">
					          <Link to="/map"><Icon type="appstore" />地图</Link>
					        </Menu.Item>
					        <Menu.Item key="app2">
					          <Link to="/crud"><Icon type="area-chart" />增删改</Link>
					        </Menu.Item>
					        <Menu.Item key="app3">
					          <Icon type="setting" />导航四
					        </Menu.Item>
					        <Menu.Item key="app4">
					          <Icon type="team" />导航五
					        </Menu.Item>
					        <Menu.Item key="app5">
					          <Icon type="picture" />导航六
					        </Menu.Item>
					    </Menu>
					</Col>
				</Row>
			</div>

		)
	}
}