import { useEffect, useState } from "react";
import styled from "styled-components";
import useContactFormStore from "../../stores/contact.store";
import { FormFieldText, FormFieldTextarea } from "../../types/ContactFormProps";

const FormField: React.FC<FormFieldText | FormFieldTextarea> = ({
  label,
  name,
  placeholder,
  iconClass,
  regex,
  inputType = "text",
  errorMessage,
}) => {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const [showError, setShowError] = useState(false);
  const { formWasSubmitted, setFieldValidity, reset } = useContactFormStore();

  useEffect(() => {
    setFieldValidity(name, isValid);
  }, [isValid, name, setFieldValidity]);

  useEffect(() => {
    if (reset) {
      setValue("");
      setIsValid(false);
      setIsTouched(false);
      setShowError(false);
    }
  }, [reset]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const inputValue = e.target.value;
    const newIsValid = regex.test(inputValue);

    setValue(inputValue);
    setIsValid(newIsValid);
    setIsTouched(true);

    if (newIsValid) {
      setShowError(false);
    }
  };

  const handleBlur = () => {
    if (!isValid && isTouched) {
      setShowError(true);
    }
  };

  const conditionalClass = [
    !value && !isTouched && !formWasSubmitted && "border-gray-300",
    isValid && "border-success",
    !isValid && isTouched && "border-error",
    !value && isTouched && "border-error",
    (showError || formWasSubmitted) && !isValid && "border-error",
    value && !isValid && "border-error",
    value && isValid && "border-success",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <FieldWrapper>
      <Label>{label}</Label>
      <InputWrapper>
        {iconClass && inputType === "text" && (
          <Icon
            className={`${iconClass}`}
            isValid={isValid}
            hasValue={!!value}
          />
        )}
        {inputType === "text" ? (
          <Input
            type="text"
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            className={conditionalClass}
          />
        ) : (
          <Textarea
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            rows={6}
            className={conditionalClass}
          />
        )}
      </InputWrapper>
      {(showError || formWasSubmitted) && !isValid && (
        <ErrorMessage>{errorMessage}</ErrorMessage>
      )}
    </FieldWrapper>
  );
};

// Styled Components
const FieldWrapper = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: left;
`;

const Label = styled.label`
  padding-left: 0.5rem;
  font-size: 0.875rem;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

const Icon = styled.i<{ isValid: boolean; hasValue: boolean }>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-left: 1rem;
  color: ${({ isValid, hasValue }) =>
    !hasValue
      ? "#a0aec0"
      : isValid
      ? "var(--color-success)"
      : "var(--color-error)"};
  transition: color 300ms;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.4rem 1rem 0.4rem 2.25rem;
  border-radius: 0.5rem;
  border: 2px solid;
  transition: border-color 0.3s, box-shadow 0.3s;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);

  &.border-gray-300 {
    border-color: #d1d5db;
  }

  &.border-success {
    border-color: var(--color-success);
    outline-color: var(--color-success);
  }

  &.border-error {
    border-color: var(--color-error);
    outline-color: var(--color-error);
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: 2px solid;
  transition: border-color 0.3s, box-shadow 0.3s;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);

  &.border-gray-300 {
    border-color: #d1d5db;
  }

  &.border-success {
    border-color: var(--color-success);
    outline-color: var(--color-success);
  }

  &.border-error {
    border-color: var(--color-error);
    outline-color: var(--color-error);
  }
`;

const ErrorMessage = styled.p`
  margin-top: 0.25rem;
  padding-left: 1rem;
  font-size: 0.75rem;
  font-style: italic;
  color: var(--color-error);
`;

export default FormField;
