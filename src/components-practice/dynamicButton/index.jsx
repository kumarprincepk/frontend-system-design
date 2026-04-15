import React, { useState } from "react";
import ButtonComponent from "./Button";
import { FcOldTimeCamera } from "react-icons/fc";

const DynamicButton = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const handelClick = () => {
    console.log("Button Clicked.");
    // setIsDisabled(prev => !prev);
    setLoading((prev) => !prev);
  };

  return (
    <div>
      <h3>This is Dynamic Button</h3>
      <ButtonComponent
        label={"Click Me!"}
        onClick={handelClick}
        disabled={isDisabled}
        loading={loading}
        type="submit"
        variant="primary"
        size="md"
        icon={<FcOldTimeCamera />}
        iconPosition="right"
      />
    </div>
  );
};
export default DynamicButton;
