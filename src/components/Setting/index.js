import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Radio } from "antd";
import { useDispatch } from "react-redux";
import { updateSetting } from "./redux";

const Setting = ({
  title = "",
  type = "",
  options = [],
  defaultValue = ""
}) => {
  const dispatch = useDispatch();
  const activeSettings = useSelector((state) => {
    return state.setting;
  });

  useEffect(() => {
    const setDefaultValueAction = updateSetting({ type, value: defaultValue });
    dispatch(setDefaultValueAction);
  }, [defaultValue, dispatch, type]);

  const handleChange = (event) => {
    const updateAction = updateSetting({ type, value: event.target.value });
    dispatch(updateAction);
  };

  const currentValue = activeSettings[type];

  const isDisabled = (option) => {
    if (option?.incompatible) {
      return Object.entries(
        option?.incompatible
      ).some(([incompatibleKey, valueList]) =>
        valueList.includes(activeSettings[incompatibleKey])
      );
    }

    return false;
  };

  return (
    <div>
      <div>{title}</div>
      <Radio.Group
        buttonStyle="solid"
        onChange={handleChange}
        value={currentValue}
      >
        {options?.map((option) => (
          <Radio.Button
            key={option.value}
            value={option.value}
            disabled={isDisabled(option)}
          >
            {option.label}
          </Radio.Button>
        ))}
      </Radio.Group>
    </div>
  );
};

export default Setting;
