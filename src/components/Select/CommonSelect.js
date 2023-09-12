import React, { useContext } from "react";
import { Select } from "antd";
import { ThemeContext } from "../../context/ThemeContext";

function CommonSelect({ seletionData, defaultText }) {
  const { isDarkMode } = useContext(ThemeContext);
  const commonStyle = isDarkMode ? "#FFFFFF" : "black";
  return (
    <Select
      defaultValue={defaultText}
      style={{
        width: "100%",
        color: commonStyle,
        border: `1px solid ${commonStyle}`,
      }}
      options={seletionData}
    />
  );
}

export default CommonSelect;
