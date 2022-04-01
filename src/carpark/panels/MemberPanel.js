import {Button, Card, Col, Form, Input, Modal, Row, Space, Table} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {
    saveMemberAction,
    listMemberAction, getPaymentAction, deleteMemberAction,
} from "../actions/CarParkAction";
import {useEffect, useState} from "react";

function MemberPanel() {

    const dataSource = useSelector((state) => state.carParkReducer.listMember);

    const dispatch = useDispatch();
    const [form] = Form.useForm();

    useEffect(() => {
        dispatch(listMemberAction());
    }, []);


    const columns = [
        {
            title: 'No',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Plaka',
            dataIndex: 'plate',
            key: 'plate',
            render: (text, record) => (
                < >
                    {text} <Button type="dashed" onClick={() => memberSilButton({plate:text})} danger size={"small"} style={{marginLeft:5}} >Sil</Button>
                </ >

            ),
        },
    ];

    const memberSilButton = (values) => {
        dispatch(deleteMemberAction(values));
    }


    const saveButton = (values) => {
        dispatch(saveMemberAction(values));
        setModalVisible(false);
        form.resetFields();
    }

    const [modalVisible, setModalVisible] = useState(false);


    const newRecordModal = (

        <Modal
            title="Yeni Kayıt"
            visible={modalVisible}
            footer={null}
            onCancel={()=> setModalVisible(false)}
        >
            <Form
                onFinish={saveButton}
                form={form}
            >
                <Row>
                    <Col>
                        <Form.Item name={"plate"} rules={[  {  required: true,message:"Plaka Yazınız"   }]}>
                            <Input placeholder="Plaka"  maxLength={8}  style={{maxWidth: 150, marginRight: 5}}/>
                        </Form.Item>
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <Button onClick={() => setModalVisible(false)} style={{marginRight: 5}}>İptal</Button>
                    </Col>
                    <Col>
                        <Button type={"primary"} htmlType="submit" ghost>Kaydet</Button>
                    </Col>
                </Row>
            </Form>
        </Modal>
    )


    return (
        <>
            <Card title="Üyelik" extra={<Button onClick={() => setModalVisible(true)}>Yeni Kayıt</Button>}
                  style={{margin: 5}}>
                <Table dataSource={dataSource} columns={columns}/>
            </Card>
            {newRecordModal}
        </>
    );
}

export default MemberPanel;
