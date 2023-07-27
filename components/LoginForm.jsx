import { Button, Checkbox, Form, Input, Row } from "antd";
import Link from "next/link";
export default function LoginForm(){
    return (
      <div className="wrapperBox">
        <div className="innerBox">
          <div className="formTitle">
            <h1>Login Form</h1>
          </div>
          <Form
            layout="vertical"
            name="basic"
            initialValues={{
              remember: true,
            }}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <div className="pageLink">
              <Link href="/register">Go To Register Page</Link>
            </div>

            <Form.Item
              name="remember"
              valuePropName="checked"
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
}