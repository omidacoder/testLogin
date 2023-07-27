import { Button, Form, Input } from "antd";
import Link from "next/link";
export default function RegisterForm() {
  return (
    <div className="wrapperBox">
      <div className="innerBox">
        <div className="formTitle">
          <h1>Register Form</h1>
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
            label="Name"
            name="Name"
            rules={[
              {
                required: true,
                message: "Please fill name input",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Family"
            name="Family"
            rules={[
              {
                required: true,
                message: "Please fill family input",
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

          <Form.Item
            label="Confirm"
            name="Confirm"
            rules={[
              {
                required: true,
                message: "Please input your confirm password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <div className="pageLink">
            <Link href="/login">Go To Login Page</Link>
          </div>
          <div style={{ marginTop: 10 }}>
            <Form.Item
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
}
