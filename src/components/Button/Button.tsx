import React, { FunctionComponent } from "react";

interface Props {
  label: string;
  isSubmit: boolean;
}

const Button: FunctionComponent<Props> = ({ label, isSubmit }) => {
  return (
    <button className="bg-green-500 w-full rounded p-3.5" type={isSubmit ? "submit" : "button"}>
      <span className="text-white font-bold text-lg">{label}</span>
    </button>
  );
};

export default Button;
