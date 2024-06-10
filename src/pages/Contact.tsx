import styled from "styled-components";
import ContactForm from "../components/contact/ContactForm";
import ContactInfos from "../components/contact/ContactInfos";

const Contact = () => {
  return (
    <ContactStyled>
      <section className="contactInfos">
        <ContactInfos />
      </section>
      <section className="contactForm">
        <ContactForm />
      </section>
    </ContactStyled>
  );
};

// Styled_components
const ContactStyled = styled.main`
  height: 100%;
  width: 100%;
  max-width: calc(1024px + 2 * 5vw);
  padding-inline: 5vw;
  margin-top: 70px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1.5rem;

  .contactInfos,
  .contactForm {
    margin-top: 50px;
  }

  .contactInfos {
    width: 55%;
  }
  .contactForm {
    width: 45%;
    max-width: 500px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 50px 0 50px 0;
    .contactInfos,
    .contactForm {
      width: 100%;
    }
  }
`;

export default Contact;
