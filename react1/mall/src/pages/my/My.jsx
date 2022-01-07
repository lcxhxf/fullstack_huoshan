import React from "react";
import { connect } from "react-redux";
import Scroll from '../../baseUI/scroll/index'

// import './Server.style.js'

const My = (props) => {
    const { category } = props
    return (
        <>
            <Scroll
                direction="vertical"
                refresh={false}
            >
                <div>
                   My
                </div>
            </Scroll>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
      
    }
}

export default connect(mapStateToProps, {})(memo(My))
