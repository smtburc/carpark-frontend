import {Row, Input, Form, Card, Button, Alert} from "antd";
import {loginAction} from "./actions/TokenAction";
import {useDispatch} from "react-redux";

function Login() {

    const dispatch = useDispatch();

    const loginButton = (values) => {
        dispatch(loginAction(values));
    }

    return (
        <>
            <Card title="Kullanıcı Girişi"
                  style={{margin:"auto",marginTop:150, maxWidth: 400}}
            >
                <Form
                    onFinish={loginButton}
                >
                    <p>
                        <Row >
                            <Form.Item name={"username"} label={"Kullanıcı Adı"}
                                       rules={[{required: true, message: "Kullanıcı Adı Yazınız"},]}>
                                <Input placeholder="username" style={{maxWidth: 150, marginRight: 5}}/>
                            </Form.Item>
                        </Row>
                        <Row>
                            <Form.Item name={"password"} label={"Şifre"}
                                       rules={[{required: true, message: "Şifre Yazınız"},]}>
                                <Input placeholder="password" style={{maxWidth: 150, marginRight: 5}}/>
                            </Form.Item>
                        </Row>
                        <Row>
                             <Button  htmlType="submit" ghost type={"primary"}>Giriş</Button>
                        </Row>
                        <Row>
                            <Alert message="Kullanıcı Adı: username" type="success" style={{marginTop:20}} />
                        </Row>
                        <Row>
                            <Alert message="Şifre: password" type="success" style={{marginTop:5}} />
                        </Row>
                    </p>
                </Form>
            </Card>

        </>
    );
}

export default Login;
