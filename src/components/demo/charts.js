import React from 'react';
import echarts from 'echarts';
export default class Charts extends React.Component{
	render(){
		return (
			<div>
				<div className="tongji">
						<div className="ui statistic green ">
						  <div className="value">
						    5,550
						  </div>
						  <div className="label">可用桩 </div>
						</div>
						<div className="ui statistic grey ">
						  <div className="value">
						    200
						  </div>
						  <div className="label">不可用桩 </div>
						</div>
						<div className="ui statistic red ">
						  <div className="value">
						    800
						  </div>
						  <div className="label">会员数 </div>
						</div>
						<div className="ui statistic teal">
						  <div className="value">
						    1,010
						  </div>
						  <div className="label">今日分享 </div>
						</div>
						<div className="ui statistic orange ">
						  <div className="value">
						    9,910
						  </div>
						  <div className="label">分享总数 </div>
						</div>
						<div className="ui statistic brown ">
						  <div className="value">
						    10
						  </div>
						  <div className="label">黑名单 </div>
						</div>
				</div>
				<div className="ui divider"></div>
				<div id="echarts2" className="echarts"></div>
				<div id="echarts1" className="echarts"></div>				
			</div>
		)
	}
	componentDidMount(){
		var myChart1 = echarts.init(document.getElementById('echarts1'));
		// 绘制图表
		myChart1.setOption({
			tooltip: {
				trigger: 'axis'
			},
			toolbox: {
				feature: {
					dataView: {
						show: true,
						readOnly: false
					},
					magicType: {
						show: true,
						type: ['line', 'bar']
					},
					restore: {
						show: true
					},
					saveAsImage: {
						show: true
					}
				}
			},
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			legend: {
				data: ['蒸发量', '降水量', '平均温度']
			},
			xAxis: [{
				type: 'category',
				data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
			}],
			yAxis: [{
				type: 'value',
				name: '水量',
				min: 0,
				max: 250,
				interval: 50,
				axisLabel: {
					formatter: '{value} ml'
				}
			}, {
				type: 'value',
				name: '温度',
				min: 0,
				max: 25,
				interval: 5,
				axisLabel: {
					formatter: '{value} °C'
				}
			}],
			series: [{
				name: '蒸发量',
				type: 'bar',
				data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
			}, {
				name: '降水量',
				type: 'bar',
				data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
			}, {
				name: '平均温度',
				type: 'line',
				yAxisIndex: 1,
				data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
			}]
		});	
		var myChart2 = echarts.init(document.getElementById('echarts2'));
		// 绘制图表
		myChart2.setOption({
				title: {
			        text: '折线图堆叠'
			    },
			    tooltip: {
			        trigger: 'axis'
			    },
			    legend: {
			        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
			    },
			    grid: {
			        left: '3%',
			        right: '4%',
			        bottom: '3%',
			        containLabel: true
			    },
				toolbox: {
					feature: {
						dataView: {
							show: true,
							readOnly: false
						},
						magicType: {
							show: true,
							type: ['line', 'bar']
						},
						restore: {
							show: true
						},
						saveAsImage: {
							show: true
						}
					}
				},
			    xAxis: {
			        type: 'category',
			        boundaryGap: false,
			        data: ['周一','周二','周三','周四','周五','周六','周日']
			    },
			    yAxis: {
			        type: 'value'
			    },
			    series: [
			        {
			            name:'邮件营销',
			            type:'line',
			            stack: '总量',
			            data:[120, 132, 101, 134, 90, 230, 210]
			        },
			        {
			            name:'联盟广告',
			            type:'line',
			            stack: '总量',
			            data:[220, 182, 191, 234, 290, 330, 310]
			        },
			        {
			            name:'视频广告',
			            type:'line',
			            stack: '总量',
			            data:[150, 232, 201, 154, 190, 330, 410]
			        },
			        {
			            name:'直接访问',
			            type:'line',
			            stack: '总量',
			            data:[320, 332, 301, 334, 390, 330, 320]
			        },
			        {
			            name:'搜索引擎',
			            type:'line',
			            stack: '总量',
			            data:[820, 932, 901, 934, 1290, 1330, 1320]
			        }
			    ]
		});

	}
}