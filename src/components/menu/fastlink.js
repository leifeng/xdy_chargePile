import React from 'react';

class FastLink extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'FastLink';
    }
    render() {
        return (
			<div className="fastLink">
			  <div>
			    <div className="header">快速链接</div>
			  </div>
			  <div>
			    <div className="ui small feed">
				    <div className="ui link list">
					  <div className="active item">Home</div>
					  <a className="item">About</a>
					  <a className="item">工作</a>
					  <a className="item">Team</a>
					</div>
			    </div>
			  </div>
			</div>
        );
    }
}

export default FastLink;
