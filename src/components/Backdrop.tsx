import React from "react";

const Backdrop = ({ onCancel }: { onCancel: React.MouseEventHandler }) => {
  return <div className="backdrop" onClick={onCancel} />;
};

export default Backdrop;
