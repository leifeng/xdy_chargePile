import React from 'react';
export default class Charts extends React.Component{
	render(){
		return (
			<div>
				<div className="ui statistics">
				  <div className="statistic">
				    <div className="value">
				      22
				    </div>
				    <div className="label">Faves </div>
				  </div>
				  <div className="statistic">
				    <div className="value">
				      31,200
				    </div>
				    <div className="label">视图 </div>
				  </div>
				  <div className="statistic">
				    <div className="value">
				      22
				    </div>
				    <div className="label">会员 </div>
				  </div>
				</div>
				<div className="ui divider"></div>
			</div>
		)
	}
}