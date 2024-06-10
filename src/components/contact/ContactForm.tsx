import emailjs from "@emailjs/browser";
import { useRef } from "react";
import styled from "styled-components";
import FieldForm from "./FieldForm";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const formMess = document.querySelector(".formMessage");
    const submitBtn = document.getElementById("submitBtn") as HTMLElement;
    submitBtn!.innerText = "Envoi en cours...";

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE,
        import.meta.env.VITE_TEMPLATE,
        form.current as HTMLFormElement,
        {
          publicKey: import.meta.env.VITE_ID,
        }
      )
      .then(
        (res) => {
          console.log(res.text);
          if (form.current) {
            (form.current as HTMLFormElement).reset();
          }
          submitBtn!.innerText = "Message envoyé !";
          submitBtn!.classList.add("sent");

          setTimeout(() => {
            submitBtn!.innerText = "Envoyer";
            submitBtn!.classList.remove("sent");
          }, 2500);
        },
        (err) => {
          console.log(err.text);
          submitBtn!.innerText = "Une erreur s'est produite";
          submitBtn!.classList.add("error");

          setTimeout(() => {
            submitBtn!.innerText = "Envoyer";
            submitBtn!.classList.remove("error");
          }, 2500);
        }
      );
  };

  return (
    <FormContactStyled ref={form} onSubmit={sendEmail}>
      <FieldForm
        type="text"
        name="fullName"
        text="Prénom, Nom*"
        placeholder="Juste Leblanc"
        icon="fa-solid fa-user"
        required={true}
      />
      <FieldForm
        type="email"
        name="email"
        text="Email*"
        placeholder="juste@leblanc.fr"
        icon="fa-solid fa-at"
        required={true}
      />
      <FieldForm
        type="text"
        name="subject"
        text="Sujet*"
        placeholder="ex : On boit un café ?"
        icon="fa-solid fa-circle-info"
        required={true}
      />

      <FieldForm
        type="textarea"
        name="message"
        text="Message*"
        placeholder="Votre message ici..."
      />

      <button type="submit" className="btn" id="submitBtn">
        Envoyer
      </button>
    </FormContactStyled>
  );
};

const FormContactStyled = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  .btn {
    width: 100%;
    height: 45px;
    margin-top: 0.5rem;
    text-align: center;
    background-color: var(--secondColor);
    color: white;
    font-weight: 500;
    font-size: 1.1rem;
    border-radius: 10px;
    transition: filter 200ms ease-out, box-shadow 200ms ease-out,
      background-color 200ms ease-out;

    &:hover {
      filter: brightness(1.4);
    }
    &:active {
      filter: brightness(0.8);
      box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25) inset;
    }
    &:focus {
      outline: solid 2px var(--mainColor);
    }

    &.sent {
      background-color: #38bd38;
    }
    &.error {
      background-color: #f60404;
      animation: shake 300ms ease-out;
    }

    @keyframes shake {
      0% {
        transform: translateX(0px);
      }
      20% {
        transform: translateX(10px);
      }
      40% {
        transform: translateX(-10px);
      }
      60% {
        transform: translateX(10px);
      }
      80% {
        transform: translateX(-10px);
      }
      100% {
        transform: translateX(0px);
      }
    }
  }
`;

export default ContactForm;
