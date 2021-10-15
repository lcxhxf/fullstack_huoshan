import React from 'react';
import { useEffect } from "react";
import { useSelector } from "react-redux";
import TopicsList from "../../component/topicsList";
import { useTopicList } from "../../store/action";

const Index = () => {
  let page = 1, tab = 'all';
  let getData = useTopicList();
  useEffect(() => {
    getData(tab, page);
  }, [page, tab]);
  let { data, loading } = useSelector((state) => state.topics);
  console.log(data, loading);
  return (
    <>
      <TopicsList data={data} loading={loading} />
    </>
  )
}

export default Index;
