import { useSelector } from "react-redux";

const useGetSetting = () => {
  const config = useSelector((state) => state.config);

  const getSettingOption = (settingKey, settingValue) =>
    config.data?.[settingKey]?.options?.find((o) => o.value === settingValue);

  const getSettingTitle = (settingKey) =>
    config.data?.[settingKey]?.title ?? settingKey;

  return { getSettingOption, getSettingTitle };
};

export default useGetSetting;
