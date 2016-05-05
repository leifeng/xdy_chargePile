import React from 'react';
import {Row,Col,Table,Input, Button,Icon,Form} from 'antd'
import classNames from 'classnames';
const FormItem = Form.Item;
const InputGroup = Input.Group;

const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
  render(text) {
    return <a href="#">{text}</a>;
  }
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '住址',
  dataIndex: 'address',
  key: 'address',
}, {
  title: '操作',
  key: 'operation',
  render(text, record) {
    return (
      <span>
        <a href="#">查看</a>
      </span>
    );
  }
}];

const data = [{
  key: '1',
  name: '胡彦斌',
  age: 32,
  address: '西湖区湖底公园1号'
}, {
  key: '2',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号'
}, {
  key: '3',
  name: '李大嘴',
  age: 32,
  address: '西湖区湖底公园1号'
},{
  key: '4',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号'
},{
  key: '5',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号'
},{
  key: '6',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号'
},{
  key: '7',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号'
},{
  key: '8',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号'
},{
  key: '9',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号'
}];

export default class MapShow extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = '';
    }
    render() {
        return (
        	<div>
        		<Row>
        			<Col>
        				<Form horizontal className="advanced-search-form">
					        <Row>
					          	<Col span="8">
						            <FormItem
						              label="普通搜索："
						              labelCol={{ span: 10 }}
						              wrapperCol={{ span: 14 }}>
						              <Input placeholder="请输入搜索名称" />
						            </FormItem>
					          	</Col>
					          	<Col span="8">
						            <FormItem
						              label="普通搜索："
						              labelCol={{ span: 10 }}
						              wrapperCol={{ span: 14 }}>
						              <Input placeholder="请输入搜索名称" />
						            </FormItem>
					          	</Col>
					       	  	<Col span="8">
						            <FormItem
						              label="普通搜索："
						              labelCol={{ span: 10 }}
						              wrapperCol={{ span: 14 }}>
						              <Input placeholder="请输入搜索名称" />
						            </FormItem>
					          	</Col>  
					        </Row>
					        <Row>
						        <Col span="8" offset="16" style={{ textAlign: 'right' }}>
						            <Button type="primary" htmlType="submit">搜索</Button>
						            <Button>清除条件</Button>
						        </Col>  
					        </Row>

        				</Form>
        			</Col>
        		</Row>
	        	<Row>
	        		<Col span="17">
	        			<div id="bmap"></div>
	        		</Col>
	        		<Col span="7">
	        			<Table columns={columns} dataSource={data} expandedRowRender={record => <p>{record.address}</p>} bordered/>
	        		</Col>
	        	</Row>
        	</div>
        );
    }

    componentDidMount(){    	
       var EXAMPLE_URL = "http://api.map.baidu.com/library/MarkerClusterer/1.2/examples/";
       var map = new BMap.Map("bmap");
       map.enableScrollWheelZoom();
       var point = new BMap.Point(116.404, 39.915);
       map.centerAndZoom(point, 4);



       var MAX = 10;
       var markers = [];
       var pt = null;
       var i = 0;
       for (; i < MAX; i++) {
           pt = new BMap.Point(Math.random() * 40 + 85, Math.random() * 30 + 21);
           markers.push(new BMap.Marker(pt));

       }
       //最简单的用法，生成一个marker数组，然后调用markerClusterer类即可。
       var markerClusterer = new BMapLib.MarkerClusterer(map, {markers:markers});

       //更改一些参数设置，比如GridSize， maxZoom


       var newPt = new BMap.Point(116.404, 39.895);


        var myStyles = [{
            url: EXAMPLE_URL + 'images/heart30.png',
            size: new BMap.Size(30, 26),
            opt_anchor: [16, 0],
            textColor: '#ff00ff',
            opt_textSize: 10
        }, {
            url: EXAMPLE_URL + 'images/heart40.png',
            size: new BMap.Size(40, 35),
            opt_anchor: [40, 35],
            textColor: '#ff0000',
            opt_textSize: 12
        }, {
            url: EXAMPLE_URL + 'images/heart50.png',
            size: new BMap.Size(50, 44),
            opt_anchor: [32, 0],
            textColor: 'white',
            opt_textSize: 14
        }];


        //添加和删除Markers
        var newMarkers = getNewMarkers(MAX);


        /**
         * 得到一个随机的marker数组。
         * @param  {Number} 数组的长度
         * @return {Array} 随机marker数组
         */
        function getNewMarkers(MAX){
          var newMarkers = [];
          for (i = 0; i < MAX; i++) {
                pt = new BMap.Point(Math.random() * 40 + 85, Math.random() * 30 + 21);
                newMarkers.push(new BMap.Marker(pt));               
            }
          return newMarkers;   
        }
 
	}
}
