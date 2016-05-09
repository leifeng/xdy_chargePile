import React from 'react';
import BannerAnim from 'rc-banner-anim';
import QueueAnim from 'rc-queue-anim';
const { Element } = BannerAnim;

class Index extends React.Component {


    render() {
        return (
        	<div>
	        	<BannerAnim autoPlay>
				    <Element  key="1" img="static/images/a.jpg">
		    	          <QueueAnim name="QueueAnim">
				            <h1 key="h1">Ant Motion Demo</h1>
				            <p key="p">Ant Motion Demo.Ant Motion Demo.Ant Motion Demo.Ant Motion Demo</p>
				          </QueueAnim>
				    </Element>
				    <Element  key="2" img="static/images/b.jpg">
				          <QueueAnim name="QueueAnim">
				            <h1 key="h1">Ant Motion Demo</h1>
				            <p key="p">Ant Motion Demo.Ant Motion Demo.Ant Motion Demo.Ant Motion Demo</p>
				          </QueueAnim>
				    </Element>
				</BannerAnim>
        	</div>
        );
    }
}

export default Index;
