import styled from "styled-components";

type FieldFormProps = {
  type: string;
  name: string;
  text: string;
  icon?: string;
  required?: boolean;
  placeholder?: string;
};

const FieldForm = (props: FieldFormProps) => {
  if (props.type === "textarea") {
    return (
      <FieldStyled>
        <label className="field__label">{props.text}</label>
        <textarea
          name={props.name}
          id={props.name}
          placeholder={props.placeholder}
        />
      </FieldStyled>
    );
  } else {
    return (
      <FieldStyled>
        <label className="field__label">{props.text}</label>
        <div className="field__input">
          {props.icon && <i className={`${props.icon} icon`}></i>}
          <input
            type="text"
            name={props.name}
            id={props.name}
            required={props.required}
            placeholder={props.placeholder}
          />
        </div>
      </FieldStyled>
    );
  }
};

const FieldStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  .field__label {
    margin-left: 5px;
  }

  input,
  textarea {
    all: unset;
    box-sizing: border-box;
    width: 100%;
    border: solid var(--text) 2px;
    border-radius: 10px;
    resize: vertical;
    background-color: var(--background);
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);

    &::placeholder {
      color: rgba(#cacaca, 0.5);
      font-size: 0.9rem;
      font-style: italic;
    }
  }

  textarea {
    height: 150px;
    padding: 10px;
  }

  .field__input {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    color: var(--text);
    background: none;

    .icon {
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
`;

export default FieldForm;
