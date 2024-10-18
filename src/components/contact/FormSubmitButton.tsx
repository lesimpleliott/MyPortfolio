import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import useContactFormStore from "../../stores/contact.store";
import { sendEmail } from "../../utils/emailService";

const FormSubmitButton = ({
  formRef,
}: {
  formRef: React.RefObject<HTMLFormElement>;
}) => {
  const { formIsValid, fieldValidity, setReset, setFormWasSubmitted } =
    useContactFormStore();
  const [buttonColor, setButtonColor] = useState("gray");
  const [buttonText, setButtonText] = useState("Envoyer");
  const [invalidInputsCount, setInvalidInputsCount] = useState(0);

  useEffect(() => {
    const countInvalidFields = Object.values(fieldValidity).filter(
      (valid) => !valid
    ).length;
    setInvalidInputsCount(countInvalidFields);
  }, [fieldValidity]);

  useEffect(() => {
    setButtonColor(formIsValid ? "success" : "gray");
  }, [formIsValid]);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFormWasSubmitted(true);

    if (!formIsValid || !formRef.current) {
      setButtonColor("error");
      setButtonText(
        invalidInputsCount <= 1 ? "Champ invalide" : "Champs invalides"
      );
      setTimeout(() => {
        setButtonText("Envoyer");
        setButtonColor("gray");
      }, 2000);
      return;
    }

    setButtonText("En cours d'envoi...");
    try {
      await sendEmail(formRef.current);
      setButtonColor("success");
      setButtonText("Envoyé avec succès");
      setReset(true);
      setTimeout(() => setReset(false), 250);
      setFormWasSubmitted(false);
    } catch (err) {
      console.error(err);
      setButtonColor("bg-red-600");
      setButtonText("Erreur");
    } finally {
      setTimeout(() => {
        setButtonText("Envoyer");
      }, 2500);
    }
  };

  return (
    <StyledButton type="submit" onClick={handleClick} buttonColor={buttonColor}>
      {buttonText}
    </StyledButton>
  );
};

const StyledButton = styled.button<{ buttonColor: string }>`
  width: 50%;
  border-radius: 0.5rem;
  padding: 0.5rem;
  font-size: 1.1rem;
  font-weight: 500;
  color: white;
  text-align: center;
  outline: none;
  transition: background-color 250ms ease-in-out;

  &:focus {
    outline: 1px solid var(--color-success);
  }

  ${({ buttonColor }) =>
    buttonColor === "success" &&
    css`
      background-color: var(--color-success);
    `}
  ${({ buttonColor }) =>
    buttonColor === "gray" &&
    css`
      background-color: #a0aec0;
    `}
  ${({ buttonColor }) =>
    buttonColor === "error" &&
    css`
      background-color: var(--color-error);
      animation: shake 250ms;
    `}
  ${({ buttonColor }) =>
    buttonColor === "success" &&
    css`
      background-color: var(--color-success);
    `}
  ${({ buttonColor }) =>
    buttonColor === "error" &&
    css`
      background-color: var(--color-error);
    `}
`;

export default FormSubmitButton;
