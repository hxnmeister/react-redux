import React from 'react';
import { Button, Form, Input } from 'antd';
import "./style.css";
import validateMessages from '../../lang/en/validationMessages';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../asyncThunks/authThunk';
import { getToken } from '../../utils/helperFunctions';
import { Navigate } from 'react-router-dom';

const layout = 
{
    labelCol: 
    {
        span: 8,
    },
    wrapperCol: 
    {
        span: 16,
    },
};

const initValues = 
{
    email: 'test@gmail.com',
    password: '123456'
};

const onFinishFail = (errorInfo) =>
{
    console.log(errorInfo);
};

const Login = () => 
{
    const { token } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    if(token || getToken())
    {
        return <Navigate to="/"/>
    }

    const onFinish = (values) =>
    {
        console.log(values);
        dispatch(login(values));
    };

    return (
        <div className="formContainer">
            <Form {...layout} name='loginForm' initialValues={initValues} onFinish={onFinish} onFinishFailed={onFinishFail} validateMessages={validateMessages}>
                <Form.Item label="Email" name="email" rules={[{required: true}, {type: 'email'}]}>
                    <Input/>
                </Form.Item>

                <Form.Item label="Password" name="password" rules={[{required: true}, {min: 6}]}>
                    <Input.Password/>
                </Form.Item>

                <Form.Item wrapperCol={{...layout.wrapperCol, offset: 8}}>
                    <Button type="primary" htmlType="submit">Login</Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Login;
