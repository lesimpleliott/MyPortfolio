import styled from "styled-components";
import SocialLink from "../components/SocialLink";

const ContactInfos = () => {
  return (
    <ContactInfosStyled>
      <h2>
        <strong>Me contacter ?</strong>
      </h2>
      <div className="contactText">
        <p>
          Un projet à me proposer ? Une question à me poser ? <br />
          Ou simplement envie d'échanger ?
        </p>
        <p>
          N'hésitez pas à me contacter par mail, téléphone <br />
          ou via le formulaire ci-dessous.
        </p>
      </div>
      <div className="contactBox">
        <SocialLink
          href="tel:+33663991329"
          text="06 63 99 13 29"
          iconDark="./icons/telephone_white.svg"
          iconLight="./icons/telephone_black.svg"
        />
        <SocialLink
          href="mail:eliott@elegarage.fr"
          text="eliott@elegarage.fr"
          iconDark="./icons/mail_white.svg"
          iconLight="./icons/mail_black.svg"
        />
        <SocialLink
          href="https://www.linkedin.com/in/lesimpleliott/"
          text="lesimpleliott"
          iconDark="./icons/linkedin_white.svg"
          iconLight="./icons/linkedin_black.svg"
        />
        <SocialLink
          href="https://github.com/lesimpleliott"
          text="lesimpleliott"
          iconDark="./icons/github_white.svg"
          iconLight="./icons/github_black.svg"
        />
      </div>
    </ContactInfosStyled>
  );
};

const ContactInfosStyled = styled.div`
  /* text-align: center; */
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .contactText {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .contactBox {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    @media screen and (max-width: 768px) {
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
    }
  }
`;

export default ContactInfos;
