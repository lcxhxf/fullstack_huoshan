import React, { useEffect, useRef } from 'react';
import { IProps } from './type'
import * as echarts from 'echarts'
import { echartsResize } from '../../util'

const Index:React.FC<IProps> = (props) => {
    const chartRef:any = useRef()
    useEffect(() => {
        console.log(chartRef,"???????????????");
        
    },[props])
    return (
        <>
            <div ref={chartRef} className="chart"></div>
        </>
    )
}

export default Index