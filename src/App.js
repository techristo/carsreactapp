import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Spin } from "antd";
import { updateConfig, requestConfig } from "./data/redux";
import carSettings from "./data/mock-data";
import ControlPanel from "./components/ControlPanel";
import PreviewPanel from "./components/PreviewPanel";

import "antd/dist/antd.css";
import "./styles.css";

const App = () => {
  const dispatch = useDispatch();
  const config = useSelector((state) => state.config);

  useEffect(() => {
    dispatch(requestConfig());

    setTimeout(() => {
      const updateConfigAction = updateConfig(carSettings);
      dispatch(updateConfigAction);
    }, 1000);
  }, []);

  return (
    <Spin tip="Loading..." spinning={config.loading}>
      <div className="car-config">
        <ControlPanel />

        <PreviewPanel />
      </div>
    </Spin>
  );
};

export default App;
