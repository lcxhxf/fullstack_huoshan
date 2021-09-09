import { useRef, useEffect } from 'react';
import  * as eCharts from 'echarts';

const ChartDemo = () => {
  let eChartsRef = useRef() // 唯一的元素
  console.log(eChartsRef, '---------------|||||')
  useEffect(() => {
    console.log(eChartsRef.current, '-------------------------------')
    
    const myChart = eCharts.init(eChartsRef.current);
    let option = {
      title: {
        text: 'ECahrts 入门实战'
      },
      tooltip: {},
      legend: {
        data: ["销量"]
      },
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    }
    myChart.setOption(option)

  }, []) // onload 
  return (
    // dom 不要 ref 
    <div ref={eChartsRef} style={{
      width: 600,
      height: 400,
      margin: 100
    }}>
      
    </div>
  )
}
export default ChartDemo
