import React  from "react";
import {Link} from 'react-router';
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
				<Row type="flex" justify="end" className="menus">
					<Col span="7">
						<img src="https://www.baidu.com/img/baidu_jgylogo3.gif" className="logo"/>
					</Col>
					<Col span="14">
						<Menu onClick={this.handleClick}
					        selectedKeys={[this.state.current]}
					        mode="horizontal" style={{lineHeight:'60px'}}>
					        <Menu.Item key="mail">
					        	<Link to="/"><Icon type="home" />首页</Link>
					        </Menu.Item>
					        <Menu.Item key="map">
					          	<Link to="/map"><Icon type="environment-o" />电桩地图</Link>
					        </Menu.Item>
					        <Menu.Item key="app">
					        	<Link to="/map"><Icon type="download" />APP下载</Link>
					        </Menu.Item>
					        <Menu.Item key="rent">
					          	<Link to="/crud"><Icon type="search" />租车</Link>
					        </Menu.Item>
			                <SubMenu title={<span><Icon type="user" />我的</span>}>
					            <Menu.Item key="user:1"><Link to="/crud"><Icon type="star-o" />收藏</Link></Menu.Item>
					            <Menu.Item key="user:2"><Link to="/crud"><Icon type="poweroff" />充电记录</Link></Menu.Item>
					            <Menu.Item key="user:3"><Link to="/crud"><Icon type="pay-circle-o" />支付记录</Link></Menu.Item>
					            <Menu.Item key="user:4"><Link to="/crud"><Icon type="team" />预约记录</Link></Menu.Item>
					        </SubMenu>
					        <Menu.Item key="setting">
					          	<Link to="/crud"><Icon type="setting" />系统管理</Link>
					        </Menu.Item>
					    </Menu>
					</Col>
					<Col span="3">
						<img className="ui avatar image" src="http://www.semantic-ui.cn/images/wireframe/square-image.png"/>
						<span>Username</span>
						<a className="logout">退出</a>
					</Col>
				</Row>
			</div>
		)
	}
}