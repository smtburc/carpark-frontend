import {Button, Card, Col, Form, Input, Row} from "antd";
import {useDispatch} from "react-redux";
import {getPaymentAction, vehicleOutAction} from "../actions/CarParkAction";

function VehicleOutPanel() {

    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const vehicleOutButton = (values) => {
        dispatch(getPaymentAction(values));
        form.resetFields();
    }

    return (
        <>
            <Card title="Araç Çıkış"  style={{ margin: 5  }}>
                <Form
                    onFinish={vehicleOutButton}
                    form={form}
                >
                    <Row >
                        <Col >
                            <Form.Item name={"plate"} rules={[  {  required: true,message:"Plaka Yazınız"   }]} >
                                <Input placeholder="Plaka"  maxLength={8}  style={{maxWidth:150,marginRight:5}} />
                            </Form.Item>
                        </Col>
                        <Col >
                            <Button  htmlType="submit" ghost type={"danger"}>Araç Çıkışı</Button>
                        </Col>
                    </Row>
                </Form>
            </Card>

        </>
    );
}

export default VehicleOutPanel;
