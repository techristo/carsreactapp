import { useSelector } from "react-redux";
import CarIcon from "./CarIcon";
import useGetSetting from "../hooks/useGetSetting";

const PreviewSetting = ({ title, value, style }) => {
  return (
    <div className="preview-setting" style={style}>
      <span>{title}</span>
      <span>{value}</span>
    </div>
  );
};

const PreviewPanel = () => {
  const activeSettings = useSelector((state) => state.setting);
  const { getSettingOption, getSettingTitle } = useGetSetting();
  const config = useSelector((state) => state.config);

  const getTotalCost = () => {
    let cost = config.data.baseCost;
    const settingList = ["model", "engine", "gearbox", "color"];

    settingList.forEach((setting) => {
      cost =
        cost + getSettingOption(setting, activeSettings[setting])?.cost ?? 0;
    });

    return cost;
  };

  if (!config.data) {
    return null;
  }

  return (
    <div className="summary">
      <CarIcon color={activeSettings.color} />

      <div style={{ marginTop: 20 }}>
        {Object.entries(activeSettings).map(([key, value]) => (
          <PreviewSetting
            key={key}
            value={getSettingOption(key, value)?.label}
            title={getSettingTitle(key)}
          />
        ))}
        <PreviewSetting
          value={getTotalCost()}
          title={"Cost"}
          style={{ marginTop: 10 }}
        />
      </div>
    </div>
  );
};

export default PreviewPanel;
