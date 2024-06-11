import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Logo from "../components/Logo";
import Credits from "../components/footer/Credits";
import Settings from "../components/footer/Settings";
import Socials from "../components/footer/Socials";

const Footer = () => {
  const location = useLocation();

  return (
    <FooterStyled>
      <div className="footerContainer">
        {location.pathname !== "/contact" && (
          <section className="socials">
            <Logo height={30} />
            <Socials />
          </section>
        )}

        <section className="credits">
          <Credits />
          <Settings />
        </section>
      </div>
    </FooterStyled>
  );
};

const FooterStyled = styled.footer`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  .footerContainer {
    width: 100%;
    max-width: 1024px;
    margin-inline: 5vw;

    .socials,
    .credits {
      padding: 15px 0;
      display: flex;
      justify-content: space-between;
      font-size: 0.9rem;
      font-weight: 200;
    }
    .credits {
      border-top: solid 1px grey;
      #credits {
        cursor: pointer;
        text-decoration: underline;
      }
    }

    @media screen and (max-width: 768px) {
      .socials {
        flex-direction: column;
        align-items: center;
      }
      .credits {
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 20px;
      }

      .stickyIcon {
        height: 40px;
        width: 40px;
      }

      .logo {
        display: none;
      }
    }
  }
`;

export default Footer;
