import React from 'react';
import { List } from 'antd';

function TopicsList(props) {
    let {data, loading } = props;
    return (
        <List
        dataSource={data}
        loading={loading}
        renderItem={
            (data) => {
                return (
                    <List.Item>
                        
                    </List.Item>
                )
            }
        }
        ></List>
    )
}

export default TopicsList;