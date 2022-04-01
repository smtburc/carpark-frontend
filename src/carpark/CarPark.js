import {Row, Col} from "antd";
import VehicleInPanel from "./panels/VehicleInPanel";
import ParkPlacePanel from "./panels/ParkPlacePanel";
import VehicleOutPanel from "./panels/VehicleOutPanel";
import PaymentModal from "./panels/PaymentModal";
import MemberPanel from "./panels/MemberPanel";
import UnitPriceModal from "./panels/UnitPriceModal";
import PageHeaderPanel from "./panels/PageHeaderPanel";


function CarPark() {

    return (
        <>
            <PageHeaderPanel />
            <Row style={{ marginLeft: 30,marginTop: 30,maxWidth:1300 }}>
                <Col flex={2}>
                    <ParkPlacePanel  />
                </Col>
                <Col flex={2}>
                    <VehicleInPanel  />
                    <VehicleOutPanel  />
                </Col>
                <Col flex={2}>
                    <MemberPanel  />
                </Col>
            </Row>
            <PaymentModal />
            <UnitPriceModal  />
        </>
    );
}

export default CarPark;
