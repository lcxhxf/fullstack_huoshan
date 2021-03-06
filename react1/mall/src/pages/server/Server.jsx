import React from "react";
// import './Server.style.js'
// import "./Server.css"
import { connect } from "react-redux"
import Scroll from "../../baseUI/scroll"
const Server = (props) => {
    const { category } = props
    return (
        <>
            <Scroll
                direction={"vertical"} // 垂直滚动
                refresh={false} // 下拉更新为false
            >
                <div>
                    Server
                </div>
            </Scroll>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        category: state.server.category
    }
}

export default connect(mapStateToProps, {})(Server)