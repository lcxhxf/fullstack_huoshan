import React, { useEffect } from 'react';
// store 连接到当前组件
import { connect } from 'react-redux';
import * as actionTypes from './store/actionCreators';
// connect 的一个子组件
function RecommendList(props) {
  // 把store 数据引进来？ useSelector
  console.log(props, '|||||||||||||||||');
  let { getBannerDataDispatch, getRecommendListDispatch } = props
  // 生命周期时 调用 action bannerList修改
  useEffect(() => {
    getBannerDataDispatch();
    getRecommendListDispatch();
  }, [])
  return (
    <>
      RecommendList
    </>
  )
}
// 高阶组件
const mapStateToProps = (state) => ({
  bannerList: state.getIn(['recommend', 'bannerList']),
  recommendList: state.getIn(['recommend', 'recommendList'])
})
const mapDispatchToProps = (dispatch) => {
  return {
    getBannerDataDispatch() {
      dispatch(actionTypes.getBannerList());
    },
    getRecommendListDispatch() {
      dispatch(actionTypes.getRecommendList())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(RecommendList);