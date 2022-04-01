import {Button, PageHeader} from "antd";
import {useDispatch} from "react-redux";
import {logoutAction} from "../actions/TokenAction";

function PageHeaderPanel() {

    const dispatch = useDispatch();
    return (
        <>
            <PageHeader
                className="site-page-header"
                title="Otopark "
                extra={[
                    <Button onClick={()=>dispatch(logoutAction())} key="1" ghost type="danger">
                        Çıkış
                    </Button>,
                ]}
            />

        </>
    );
}

export default PageHeaderPanel;
