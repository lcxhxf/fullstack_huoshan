import React, { useState, useCallback } from 'react'
import { Cell, Input, Button, Checkbox }from 'zarm'
import CustomIcon from '@/components/CustomIcon'
import Captcha from 'react-captcha-code';
import s from './style.module.less'
import { post } from '@/utils';
import cx from 'className'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [verify, setVerify] = useState('');
    const [captcha, setCaptcha] = useState('');
    const [type, setType] = useState('login');

    const handleChange = useCallback((captcha) => {
        setCaptcha(captcha)
    }, []);
    // 登陆注册
    const onSubmit = async () => {
        if (!username) {
            Toast.show('请输入账号')
            return
        }
        if (!password) {
            Toast.show('请输入密码')
            return
        }
        if (!verify) {
            Toast.show('请输入验证码')
            return
        }
        if (verify != captcha) {
            Toast.show('验证码有误')
            return
        }
        // 发请求
        try {
            console.log(post, '++++++++++');
            const { data } = await post('/api/user/register', {
                username,
                password
            })
            Toast.show(data.msg)
            setType('login')
        } catch (error) {

        }
    }

    return <div className={s.auth}>
        <div className={s.head} />
        <div className={s.tab}>
            <span className={cx({ [s.avtive]: type == 'login' })} onClick={() => setType('login')}>登录</span>
            <span className={cx({ [s.avtive]: type == 'register' })} onClick={() => setType('register')}>注册</span>
        </div>
        <div className={s.form}>
            <Cell icon={<CustomIcon type="zhanghao" />}>
                <Input
                    clearable
                    type="text"
                    placeholder="请输入账号"
                    onChange={(value) => setUsername(value)}
                />
            </Cell>
            <Cell icon={<CustomIcon type="mima" />}>
                <Input
                    clearable
                    type="password"
                    placeholder="请输入密码"
                    onChange={(value) => setPassword(value)}
                />
            </Cell>
            {
                type == 'register' ? <Cell icon={<CustomIcon type="mima" />}>
                    <Input
                        clearable
                        type="text"
                        placeholder="请输入验证码"
                        onChange={(value) => setVerify(value)}
                    />
                    <Captcha charNum={4} onChange={handleChange} />
                </Cell> : null
            }

        </div>
        <div className={s.operation}>
            <div className={s.agree}>
                <Checkbox />
                <label className="text-light">阅读并同意<a>《掘掘手札条款》</a></label>
            </div>
            <Button block theme="primary" onClick={onSubmit}>{
                type == 'login' ? '登录' : '注册'
            }</Button>
        </div>
    </div>
}

export default Login
