/* eslint-disable react/jsx-key */
// ** React Imports
import { useState } from "react";

import ButtonComponent from "src/components/ButtonComponent";

// ** MUI Imports
import styled from "@emotion/styled";
import { string } from "yup";

const TabContainer = styled.div({
  display: "flex",
  gap: "10px",
  flexDirection: "row",
  alignItems: "flex-start",
  padding: "13px 20px",
  width: "100%",
  height: "66px",
  position: "relative",
  background: "#ECF8FF",
  boxShadow: "1px 2px 3px rgba(22, 31, 41, 0.2)",
});
interface Item {
  key: string;
  title: string;
}
type Props = {
  options: Item[];
  activekey: string;
  onChange?: (value: string) => void;
  style?: React.CSSProperties;
  isActive?:boolean
};

const TabbarComponent = (props: Props) => {
  // ** State
  const [active, setActive] = useState<string>(props.activekey || "regular"); //

  /**
   * Handle OnClick Button
   */
  const onClickHandler = (key: string) => {
    setActive(key);

    // console.log('key :>> ', key);
    if (props.onChange) props.onChange(key);
  };

  return (
    <TabContainer style={props.style}>
      {props.options.length
        ? props.options.map((item, i) => (
            <ButtonComponent
              type='tabButton'
              title={item?.title || ""}
              isActive={item?.key === active}
              onClick={() => onClickHandler(item.key || "")}
            />
          ))
        : null}
    </TabContainer>
  );
};

export default TabbarComponent;

TabbarComponent.defaultProps = {
  options: [
    {
      key: "regular",
      title: "Regular",
    },
    {
      key: "monetization",
      title: "Active Monetization",
    },
    {
      key: "trending",
      title: "Trending",
    },
    {
      key: "customized",
      title: "Customized",
    },
  ],
  activekey: "regular",
  onChange: (key: string) => null,
  style: {},
};
