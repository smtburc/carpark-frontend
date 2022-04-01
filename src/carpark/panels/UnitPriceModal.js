import {Button, Col, Form, InputNumber, Modal, Row,} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {closeUnitPriceModalAction, updateUnitPriceAction,} from "../actions/CarParkAction";

function ParkPlacePanel() {

    const dispatch = useDispatch();

    const unitPrice = useSelector((state) => state.carParkReducer.unitPrice);
    const modalVisible = useSelector((state) => state.carParkReducer.unitPriceModalVisible);

    const [form] = Form.useForm();

    if(unitPrice!=undefined){
        form.setFieldsValue(unitPrice);
    }

    const updateUnitPrice = (values) => {
        dispatch(updateUnitPriceAction(values));
    }



    return (
        <>
            <Modal
                title="Birim Fiyat Güncelle"
                visible={modalVisible}
                footer={null}
                onCancel={()=> dispatch(closeUnitPriceModalAction())}
            >
                <Form
                    form={form}
                    onFinish={updateUnitPrice}
                >
                    <Row>
                        <Col>
                            <Form.Item name={"price"} label={"Birim Fiyat"} rules={[  {  required: true,message:"Birim Fiyat Boş Olamaz"   }]}>
                                <InputNumber placeholder="Birim Fiyat"  maxLength={8}  style={{maxWidth: 150, marginRight: 5}}/>
                            </Form.Item>
                        </Col>

                    </Row>
                    <Row>
                        <Col>
                            <Button onClick={() => dispatch(closeUnitPriceModalAction())} style={{marginRight: 5}}>İptal</Button>
                        </Col>
                        <Col>
                            <Button type={"primary"} htmlType="submit" ghost>Kaydet</Button>
                        </Col>
                    </Row>
                </Form>
            </Modal>
        </>
    );
}


export default ParkPlacePanel;
