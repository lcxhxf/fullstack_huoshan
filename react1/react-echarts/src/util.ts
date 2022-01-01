import _ from 'lodash'

const echartsDom:any = [];  //所有echarts图表的数组
/**
 * 当屏幕尺寸变化时，循环数组里的每一项调用resize方法来实现自适应。
 * @param {*} eDom 
 */
export function echartsResize(eDom:any) {   
    echartsDom.push(eDom);
    const fn = () => {
        console.log("????????????????????");
        
        echartsDom.forEach((it:any)=>{
            it.resize();
        })
    };
    window.onresize = _.debounce(fn,200)
}
