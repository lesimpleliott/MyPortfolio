import { useRef } from "react";
import styled from "styled-components";
import FormField from "./FieldForm";
import FormSubmitButton from "./FormSubmitButton";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <FormStyled ref={formRef}>
      <FormField
        name="fullName"
        label="Prénom Nom"
        placeholder="3 caractères minimum"
        errorMessage="Doit contenir au moins 3 caractères"
        regex={/^[a-zA-Z\s\u00C0-\u017F-]{3,}$/} // Lettres, espaces, accents et tirets : 3 caractères minimum
        iconClass="fa-solid fa-user"
      />
      <FormField
        name="email"
        label="Email"
        placeholder="exemple@domaine.com"
        errorMessage="Format email invalide"
        regex={/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/} // Email valide
        iconClass="fa-solid fa-envelope"
      />
      <FormField
        name="subject"
        label="Sujet"
        placeholder="5 caractères minimum"
        errorMessage="Doit contenir au moins 5 caractères"
        regex={/^.{5,}$/} // 5 caractères minimum
        iconClass="fa-solid fa-circle-info"
      />
      <FormField
        name="message"
        inputType="textarea"
        label="Message"
        placeholder="Votre message..."
        errorMessage="Doit contenir au moins 5 caractères"
        regex={/^(?=.{5,})([\s\S]*)$/} // 5 caractères minimum
      />

      <FormSubmitButton formRef={formRef} />
    </FormStyled>
  );
};

// Styled Components
const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;

  @media (min-width: 768px) {
    gap: 1.5rem;
  }
`;

export default ContactForm;
