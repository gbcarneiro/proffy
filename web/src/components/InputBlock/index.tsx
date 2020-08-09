import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface InputBlockProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const InputBlock: React.FC<InputBlockProps> = ({ label, name, ...rest }) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest} />
    </div>
  );
}

export default InputBlock; 