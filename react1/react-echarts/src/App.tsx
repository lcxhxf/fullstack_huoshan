import { createRef, useState, RefObject, useEffect } from 'react'
import * as eCharts from "echarts";
import { echartsResize } from './util'
import './App.css'
import LineChart from './component/LineChart'


function App() {
  // any 类型 <T> current: null | HTMLDivElement
  // @types/react RefObject<HTMLDivElement>
  // RefObject 自定义type
  // HTMLDivElement type html 标签
  const eChartsRef:RefObject<HTMLDivElement> = createRef()
  const [LineChartData, setLineChartData] = useState({
    xData: [
      "2021/08/13",
      "2021/08/14",
      "2021/08/15",
      "2021/08/16",
      "2021/08/17",
      "2021/08/18",
    ],
    seriesData: [22, 19, 88, 66, 5, 90],

  })

  useEffect(() => {
    // console.log(eChartsRef.current);
    const  myChart = eCharts.init(eChartsRef.current as HTMLElement);
    
    let option = {
      title: {
        text: "ECharts 入门示例",
      },
      tooltip: {},
      legend: {
        data: ["销量"],
      },
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    };
    
    myChart.setOption(option);

    echartsResize(myChart)

  }, [])  




  return (
    <div className="App">
      <div ref={eChartsRef} style={{
      width: "80%",
      height: "600%",
      margin: 100
    }}></div>
    <div className="chartWrapper" > 
      <LineChart
      title="折线图模拟数据"
      xData={LineChartData.xData}
      seriesData={LineChartData.seriesData}
      />
    </div>
    </div>
  )
}

export default App
