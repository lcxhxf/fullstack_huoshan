import React, { useEffect } from 'react'
import Scroll from '../../baseUI/scroll'
import './Main.css'
import { connect } from 'react-redux'
import * as actionTypes from './store/actionCreators'
import Classify from
    '../../components/main/classify/Classify'
import RotationChart from
    '../../components/main/rotationChart/RotationChart'
import MenuBar from "../../components/main/menuBar/MenuBar"
import ImgList from '../../components/main/imgList/ImgList'

const Main = (props) => {
    // 状态
    const { maindata } = props
    // action
    const { getMainDataDispatch } = props


    const { classify = [], rotationImg = [], menuBarData = {} } = maindata

    console.log(maindata)
    useEffect(() => {
        if (!maindata.length) {
            getMainDataDispatch()
        }
    }, [])
    return (
        <div className="main">
            <Scroll
                direction={"vertical"}
                refresh={false}>
                <div className="main-padding">
                    <Classify classify={classify} />
                    <RotationChart rotationImg={rotationImg} />
                    <MenuBar menuBarData={menuBarData} />
                    <ImgList />
                </div>
            </Scroll>
        </div>
    )
}
const mapStateToPorps = (state) => {
    return {
        maindata: state.main.maindata
    }
}
const mapStateToDispatch = (dispatch) => {
    return {
        getMainDataDispatch() {
            dispatch(actionTypes.getMainData())
        }
    }
}

export default connect(mapStateToPorps, mapStateToDispatch)(Main)
