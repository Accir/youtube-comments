import React, { FunctionComponent } from "react";

interface Props {
  label: string;
  type: string;
  placeholder?: string;
  value: string | number;
  onChange: Function;
}

const InputField: FunctionComponent<Props> = ({ label, type, placeholder, value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="mb-5 pb-1">
      <label className="text-zinc-800 font-bold">{label}</label>
      <input
        className="border-solid border rounded-md text-base outline-none font-normal p-2.5 w-full"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputField;
