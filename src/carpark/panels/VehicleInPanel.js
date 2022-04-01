import {Button, Card, Checkbox, Col, Form, Input, Row, Select} from "antd";
import {vehicleInAction} from "../actions/CarParkAction";
import {useDispatch} from "react-redux";


function VehicleInPanel() {

    const { Option } = Select;

    const dispatch = useDispatch();

    const [form] = Form.useForm();

    const vehicleInButton = (values) => {
        dispatch(vehicleInAction(values));
        form.resetFields();
    }

    return (
        <>
            <Card title="Araç Giriş"  style={{ margin: 5  }}>
                <Form
                onFinish={vehicleInButton}
                form={form}
                >
                    <Row >
                        <Col >
                            <Form.Item name={"plate"} label={"Plaka"} rules={[  {  required: true,message:"Plaka Yazınız"   },]}   >
                                <Input placeholder="Plaka" maxLength={8} style={{maxWidth:150,marginRight:5}} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Item name={"type"} label={"Araç Tipi"} rules={[  {  required: true,message:"Araç Tipi Seçiniz"  },   ]} >
                                <Select placeholder="Seçiniz" style={{ width: 150,marginRight:5 }} >
                                    <Option value="1">Motorsiklet</Option>
                                    <Option value="2">Sedan</Option>
                                    <Option value="3">Hatcback</Option>
                                    <Option value="4">Jeep</Option>
                                    <Option value="5">Suv</Option>
                                    <Option value="6">Minibüs</Option>
                                    <Option value="7">Kamyonet</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row>
                        <Col >
                            <Button  htmlType="submit" ghost type={"primary"}>Araç Girişi</Button>
                        </Col>
                    </Row>
                </Form>
            </Card>

        </>
    );
}

export default VehicleInPanel;
