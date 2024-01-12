import React from 'react';
import { Button, Form, Input } from 'antd';
import validateMessages from '../../lang/en/validationMessages';
import { useDispatch } from 'react-redux';
import { registration } from '../../asyncThunks/authThunk';

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
    name: 'Simple Name',
    email: 'template@mail.com',
    password: ''
};

const onFinishFail = (errorInfo) =>
{
    console.log(errorInfo);
};

const Registration = () => 
{
    const dispatch = useDispatch();

    const onFinish = (values) =>
    {
        console.log(values);
        dispatch(registration(values));
    };

    return (
        <div className="formContainer">
            <Form {...layout} name='loginForm' initialValues={initValues} onFinish={onFinish} onFinishFailed={onFinishFail} validateMessages={validateMessages}>
                <Form.Item label="Name" name="name" rules={[{required: true}, {min: 3}]}>
                    <Input/>
                </Form.Item>

                <Form.Item label="Email" name="email" rules={[{required: true}, {type: 'email'}]}>
                    <Input/>
                </Form.Item>

                <Form.Item label="Password" name="password" rules={[{required: true}, {min: 6}]}>
                    <Input.Password/>
                </Form.Item>

                <Form.Item wrapperCol={{...layout.wrapperCol, offset: 8}}>
                    <Button type="primary" htmlType="submit">Sign Up</Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Registration;
