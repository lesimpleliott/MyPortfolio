import styled from "styled-components";
import useStoreTheme from "../theme.store";

type SocialLinkProps = {
  href: string;
  text: string;
  iconDark: string;
  iconLight: string;
};

const SocialLink = (props: SocialLinkProps) => {
  const { theme } = useStoreTheme();

  return (
    <SocialLinkStyled href={props.href} className="socialLink" target="_blank">
      <img
        className="socialLink__icon"
        src={theme === "dark" ? props.iconDark : props.iconLight}
      />
      <p className="socialLink__text">{props.text}</p>
    </SocialLinkStyled>
  );
};

const SocialLinkStyled = styled.a`
  width: fit-content;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  text-decoration: none;
  color: var(--text);
  @media screen and (max-width: 768px) {
    flex: 1 1 45%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .socialLink__icon {
    width: 35px;
    height: 35px;
  }

  .socialLink__text {
    font-size: 1.1rem;
    font-weight: 600;
  }

  &:hover {
    opacity: 0.6;
    transition: opacity 200ms ease-in-out;
  }
`;

export default SocialLink;
