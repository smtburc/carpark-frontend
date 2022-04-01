import {Button, Card, Col, Form, Input, InputNumber, Modal, Row, Timeline} from "antd";
import {useEffect, useState,} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    getPaymentAction,
    getUnitPriceAction,
    listVehicleAction,
    openUnitPriceModalAction,
    saveMemberAction,
} from "../actions/CarParkAction";
import UnitPriceModal from "./UnitPriceModal";
import {loginAction} from "../actions/TokenAction";

function ParkPlacePanel() {

    const data = useSelector((state) => state.carParkReducer.listParkingLot);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listVehicleAction());
    }, []);

    const getColor = (param) => {
        switch(param) {
            case "CLASS_A":
                return "green";
            case "CLASS_B":
                return "blue";
            case "CLASS_C":
                return "red";
            default:
                return "gray";
        }
    };

    const vehicleOutButton = (values) => {
        dispatch(getPaymentAction(values));
    }

    const timeline = data.map((obj)=>{
        return  <Timeline.Item color={getColor(obj.vehicleClass)}> {obj.value}
                    {getColor(obj.vehicleClass)!="gray"? <Button onClick={() =>  vehicleOutButton({plate:obj.plate}) } type="dashed" danger size={"small"} style={{marginLeft:5}} >Araç Çıkış</Button>:<div></div> }
                </Timeline.Item>
    });

    return (
        <>

            <Card title="Park Alanı (50 Birim)" extra={<Button onClick={() => dispatch(openUnitPriceModalAction())}>Birim Fiyat Güncelle</Button>}  style={{ margin: 5 }}>
                <p>
                    <Timeline>
                        {timeline}
                    </Timeline>
                </p>
            </Card>
        </>
    );
}


export default ParkPlacePanel;
