import {Modal} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {clearPaymentAction, doPayAction} from "../actions/CarParkAction";

function PaymentModal() {

    const payment = useSelector((state) => state.carParkReducer.payment);

    const dispatch = useDispatch();

    let message;

    if(payment!=undefined){
        message = payment.plate +" Plakalı Araç için "+payment.cost +"TL tutarında ödeme yapılması gerekmektedir"
    }

    return (
        <>
            <Modal
                title="Ödeme"
                visible={payment!=undefined}
                okText= "Ödemeyi Gerçekleştir"
                cancelText= "İptal"
                onOk= {()=>dispatch(doPayAction({plate:payment.plate}))}
                onCancel= {()=>dispatch(clearPaymentAction())}
            >
                <p> {message}</p>
            </Modal>
        </>
    );
}

export default PaymentModal;
