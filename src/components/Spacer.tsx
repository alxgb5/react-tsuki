import React from "react";

type SpacerProps = {
  size: number;
};

const Spacer: React.FC<SpacerProps> = ({ size }) => {
  return <div style={{ height: size }} />;
};

export default Spacer;
