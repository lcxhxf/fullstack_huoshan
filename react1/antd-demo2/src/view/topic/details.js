import React from 'react';
import { Card,Tag } from 'antd'
import { Content } from 'antd/lib/layout/layout';

export default function Details(props) {
  console.log(props,'+++++++++++');
  let {data:{title}, loading} = props;
  return (
    <Card
      bordered
      loading={loading}
      type="inner"
      title={
        <>
          <h1>
            <Tag color="green">分享</Tag>
            {title}
          </h1>
        </>
      }
    >
      {/* <div>
        <script>
          alert('银行卡密码给我')
        </script>
      </div> */}
      <div dangerouslySetInnerHTML={{__html:Content}}></div>
    </Card>
  )
}