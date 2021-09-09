import {useRef, useEffevt, useEffect} from 'react'
import * as eCharts from 'echarts';
const ChartDemo = () => {
    let eChartsRef = useRef() //唯一的元素
    useEffect(() => {
        console.log(eChartsRef.current,'...........');
        const myChart = eCharts.init(eChartsRef.current);
    },[]) //onload
    return (
        // dom 不要 ref
        <div ref={eChartsRef} style={{
            width: 600,
            height: 400,
            margin: 100,
        }}>

        </div>
    )
}
export default ChartDemo