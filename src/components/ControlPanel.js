import { useSelector } from "react-redux";
import Setting from "./Setting";

const ControlPanel = () => {
  const config = useSelector((state) => state.config);
  const { version, model, engine, gearbox, color } = config.data ?? {};

  const colorOptions =
    color?.options?.map((option) => ({
      value: option.value,
      label: <div className="color" style={{ background: option.label }} />
    })) ?? [];

  return (
    <div className="controls">
      <div>{version}</div>
      {/* <Setting
        title={model?.title}
        type={model?.type}
        options={model?.options ?? []}
        defaultValue={model?.defaultValue}
      /> */}
      <Setting {...model} />
      <Setting {...engine} />
      <Setting {...gearbox} />
      <Setting {...color} options={colorOptions} />
    </div>
  );
};

export default ControlPanel;
