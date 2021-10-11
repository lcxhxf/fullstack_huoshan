import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import TopicsList from '../../components/topicsList'
import { useTopicList } from '../../store/action'

function Index(props) {
    let { data, loading } = useSelector((state) => state.topics);
    let getData = useTopicList;
    useEffect(() => {
        getData('all', 1 )
    },[])
    console.log(data, loading, '---------');
    // 自由状态 -> 公有
    // 文章列表 loading true
    // data[]
    // error
    return (
        <>
        <TopicsList data={data} loading={loading} />
        {loading?"":"---------"}
        </>
    )
}

export default Index;