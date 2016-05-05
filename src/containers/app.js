import React,{Component} from 'react';

import Provider from 'react-redux/lib/components/Provider';

import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Route';
import browserHistory from 'react-router/lib/browserHistory';
import IndexRoute from 'react-router/lib/IndexRoute';

import syncHistoryWithStore from 'react-router-redux/lib/sync';

import reducers from '../reducers/index';
import configureStore from '../store/index';

import { Breadcrumb } from 'antd'

// component
import Index from '../components/index';
import UserGroup  from "../components/user/group.js";
import RealTime  from "../components/chargeStatus/realtime.js";
import MapShow from "../components/demo/map.js";
import Charts from '../components/demo/charts.js';
const store=configureStore();
const history = syncHistoryWithStore(browserHistory, store);

class NoMatch extends Component{
	render(){
		return <h1>404</h1>
	}
}
class Info extends Component{
	render(){
		return <div>info</div>
	}
}
function requireAuth(){
	console.log('aaaaaaa')
}
const App=()=>{
	return (
		<Provider store={store}>
			<Router history={history}>
				<Route onEnter={requireAuth} breadcrumbName="首页" path="/" component={Index}>
					<Route path="index" component={UserGroup}/>
					<Route path="charts" component={Charts}/>
					<Route path="map" breadcrumbName="地图" component={MapShow}/>
					<Route path="crud" breadcrumbName="增删改" component={UserGroup}/>
				</Route>	
				<Route path="*" component={NoMatch}/>			
			</Router>
		</Provider>
	)
}
export default App;