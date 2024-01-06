import React from "react";

const Input = ({ placeholder, handleClick, value }) => {
  return (
    <div class="form-group label-floating is-empty">
      <input
        class="form-control input--squared input--dark"
        type="text"
        placeholder={placeholder}
        onChange={handleClick}
        value={value}
      />
    </div>
  );
};

export default Input;
