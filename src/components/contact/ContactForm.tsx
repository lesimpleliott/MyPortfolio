import React from "react";
import styled from "styled-components";
import FieldInput from "./FieldInput";
import SubmitContainer from "./SubmitContainer";

const ContactForm: React.FC = () => {
  const sentMessage = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("envoyé !");
    // if (fullName && email && !fullNameError) {
    //   console.log("Message envoyé !");
    //   setFullName("");
    //   setEmail("");
    //   setInputValid(false);
    // } else {
    //   console.log("Veuillez remplir correctement les champs.");
    // }
  };

  return (
    <FormContactStyled onSubmit={sentMessage}>
      <FieldInput
        label="Nom, prénom"
        type="text"
        name="fullName"
        icon="fa-solid fa-user"
        placeholder="Juste Leblanc"
        regExp={/^[a-zA-Z -\\é\\è\\à\\ï\\î\\ü\\û\\ù]*$/}
        required
      />
      <FieldInput
        label="Email"
        type="email"
        name="email"
        icon="fa-solid fa-at"
        placeholder="juste.leblanc@example.com"
        regExp={/^[a-z0-9_.-]+@[a-z0-9_.-]+\.[a-z]+$/}
        required
      />
      <FieldInput
        label="Object"
        type="text"
        name="object"
        placeholder="ex : On boit un café ?"
        icon="fa-solid fa-circle-info"
        regExp={/[a-zA-Z -_.À-ÖØ-öø-ÿ]+/}
        required
      />

      <SubmitContainer />
    </FormContactStyled>
  );
};

const FormContactStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export default ContactForm;
