import React,{Component} from 'react';

import Provider from 'react-redux/lib/components/Provider';

import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Route';
import browserHistory from 'react-router/lib/browserHistory';
import IndexRoute from 'react-router/lib/IndexRoute';

import syncHistoryWithStore from 'react-router-redux/lib/sync';

import reducers from '../reducers/index';
import configureStore from '../store/index';

import Sidebar from '../components/sidebar'

const store=configureStore();
const history = syncHistoryWithStore(browserHistory, store);


class Index extends Component{
	render(){
		return <div>ffffffff</div>
	}
}
class NoMatch extends Component{
	render(){
		return <h1>404</h1>
	}
}
const App=()=>{
	return (
		<Provider store={store}>
			<Router history={history}>
				<Route path="/" component={Sidebar}>
					<Route path="index" component={Index}/>
				</Route>	
				<Route path="*" component={NoMatch}/>			
			</Router>
		</Provider>
	)
}
export default App;