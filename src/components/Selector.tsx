import React, { useState } from "react";

interface IOptions {
  label: string;
  value: string;
}

function InvestingApp() {
  const options: IOptions[] = [
    {
      label: "Select one",
      value: "",
    },
    { label: "GM", value: "GM" },
    { label: "AAPL", value: "AAPL" },
  ];

  const [stock, setStock] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("Stock selected!!");
    setStock(e.currentTarget.value);
  };

  return (
    <div className="select-container">
      {/* <label htmlFor="selectStock">Select:</label> */}
      <select
        id="selectStock"
        onChange={handleChange}
        className="mx-2 px-2 bg-red-300"
      >
        {options.map((option: IOptions) => {
          return (
            <option key={option.label} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
      <p className="text-red-300">{stock}</p>
    </div>
  );
}

export default InvestingApp;
