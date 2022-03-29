import Style from "./styled";
import React, { FC } from "react";

const Container: React.FC<{}> = ({ children }) => {
  return (
    <Style>
      <div className="center">{children}</div>
    </Style>
  );
};

export default Container;
