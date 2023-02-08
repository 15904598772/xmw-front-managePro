import { Button, Card, Checkbox, Form, Input } from 'antd';
import logo from '@/assets/logo1.jpg'
import './index.scss'
const Login =()=>{
    // 测试用户名输入
    const userNameChange=(e)=>{
        // console.log(e.target.value)
    }
    // 提交时获取表单所有数据
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    return(
        <div className='login'>
            <Card className='login-container' title="登录界面">
                <img className='login-logo' src={logo} />
            </Card>
            <Form
                name="basic"
                validateTrigger={['onBlur', 'onChange']}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                // autoComplete="off"
            >
            <Form.Item
                label="用户名"
                name="username"
                rules={[
                    {
                        required: true,
                        message: '请输入你的用户名!',
                    },
                    {
                        pattern: /^1[3-9]\d{9}$/,
                        message: '手机号码格式不对',
                        validateTrigger:'onBlur'
                    }
                ]}
                onChange={userNameChange}
            >
            <Input />
            </Form.Item>

            <Form.Item
                label="验证码"
                name="password"
                rules={[
                    {
                        required: true,
                        message: '请输入验证码！',
                    },
                    {
                        validateTrigger:'onBlur',
                        len:6,
                        message:'请输入6位验证码！'
                    }
                ]}
            >
            <Input />
            </Form.Item>

            <Form.Item
                name="remember"
                valuePropName="checked"
                // wrapperCol={{
                //     offset: 8,
                //     span: 16,
                // }}
            >
            <Checkbox>我已阅读条款，代表已经同意！</Checkbox>
            </Form.Item>

            <Form.Item
                // wrapperCol={{
                //     offset: 8,
                //     span: 16,
                // }}
            >
            <Button type="primary" htmlType="submit" size='large' block>
                登录
            </Button>
            </Form.Item>
        </Form>
        </div>
    )
}

export default Login