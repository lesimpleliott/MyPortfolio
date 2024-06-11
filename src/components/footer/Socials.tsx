import styled from "styled-components";
import StickyButton from "../StickyButton";

const Socials = () => {
  return (
    <SocialsStyled>
      <StickyButton
        key="mail"
        link="mailto:lesimpleliott@gmail.com"
        iconDark="./icons/mail_white.svg"
        iconLight="./icons/mail_black.svg"
        alt="mail icon"
      />
      <StickyButton
        key="phone"
        link="tel:+33663991329"
        iconDark="./icons/telephone_white.svg"
        iconLight="./icons/telephone_black.svg"
        alt="phone icon"
      />
      <StickyButton
        key="github"
        link="https://github.com/lesimpleliott"
        iconDark="./icons/github_white.svg"
        iconLight="./icons/github_black.svg"
        alt="github icon"
      />
      <StickyButton
        key="linkedin"
        link="https://www.linkedin.com/in/lesimpleliott/"
        iconDark="./icons/linkedin_white.svg"
        iconLight="./icons/linkedin_black.svg"
        alt="linkedin icon"
      />
    </SocialsStyled>
  );
};

const SocialsStyled = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    gap: 20px;
  }
`;

export default Socials;
