需求分析和调研    提前设计 OO UML建模   coding 过程

积分系统 用户忠诚度提升
兑换
赚取  消费 
  channel  rule 
- 消费时  消费100得10京豆
- 签到    1
- 评论    2
- 做任务  5
？ 百度一下 不要从0开始设计 

1. 用户在获取积分的时候，回告知积分的有效期 11.11
2. 用户的查询，数量和状态
3. 积分消费规则

数据库
id
user_id
channel_id
credit 积分 +5 -5
event_id 相关的事件ID
create_time
expire_time

接口文档

- 赚取积分
url POST /points user_id channel_id event_id credit expired_time  返回值id
- 消费积分
url POST credit - 
- 查询积分
 userId  所有积分/可用积分/过期积分/时间/快要过期/定向积分/消费过
 分页


