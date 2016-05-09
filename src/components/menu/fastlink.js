import React from 'react';

class FastLink extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'FastLink';
    }
    render() {
        return (
			<div className="fastLink">
			  	<div className="header"> <i className="heart icon"></i>快速链接</div>
			    <div className="ui link list links">
				  <div className="active item">Home</div>
				  <a className="item">About</a>
				  <a className="item">工作</a>
				  <a className="item">Team</a>
				</div>
			</div>
        );
    }
}

export default FastLink;
