import React from "react";
import { connect } from "react-redux";
import Scroll from '../../baseUI/scroll/index'

// import './Server.style.js'

const Info = (props) => {
    const { category } = props
    return (
        <>
            <Scroll
                direction="vertical"
                refresh={false}
            >
                <div>
                    Info
                </div>
            </Scroll>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
      
    }
}

export default connect(mapStateToProps, {})(Info)
