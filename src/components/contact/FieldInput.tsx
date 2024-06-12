import { useState } from "react";
import styled from "styled-components";

type FieldInputProps = {
  label: string;
  type: string;
  name: string;
  regExp: RegExp;
  icon?: string;
  required?: boolean;
  placeholder?: string;
};

const FieldInput: React.FC<FieldInputProps> = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [inputClass, setInputClass] = useState("");

  const inputChecker = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    if (value.length === 0) {
      setInputClass("");
    } else if (!props.regExp.test(value)) {
      setInputClass("error");
    } else {
      setInputClass("valid");
    }
  };

  return (
    <FieldInputStyled>
      <label className="fieldLabel">
        {props.label}
        {props.required ? "*" : ""}
      </label>
      <div className="fieldInput">
        <i className={props.icon}></i>
        <input
          type={props.type}
          name={props.name}
          id={props.name}
          placeholder={props.placeholder}
          value={inputValue}
          onChange={inputChecker}
          className={inputClass}
          required={props.required || false}
        />
      </div>
    </FieldInputStyled>
  );
};

const FieldInputStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  text-align: left;

  .fieldLabel {
    margin-left: 10px;
  }

  .fieldInput {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    color: var(--text);
    background: none;

    i {
      width: 35px;
      height: 100%;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    input {
      padding: 5px 5px 5px 2rem;
    }
  }

  .fieldTextarea {
    textarea {
      height: 150px;
      padding: 10px;
    }
  }

  input,
  textarea {
    all: unset;
    box-sizing: border-box;
    width: 100%;
    border: solid var(--text) 2px;
    border-radius: 10px;
    resize: vertical;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);

    &::placeholder {
      color: rgba(#cacaca, 0.5);
      font-size: 0.9rem;
      font-style: italic;
    }
  }

  .error {
    border: solid 2px var(--formError);
  }
  .valid {
    border: solid 2px var(--formValid);
  }
`;
export default FieldInput;
