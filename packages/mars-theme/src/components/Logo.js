import { connect, styled } from "frontity";
import logo  from "./img/lozen-digital-logo.png";
import logoWhite from "./img/lozen-digital-logo-reverse.png";
import Link from "../components/link"; 

 const Logo = ({ state, component, headerScroll }) => {

  return (
    <LogoContainer>
      <Link link="/">
        <img className={`${headerScroll ? "logo-scroll" : ""}`} src={component === "footer" ? logoWhite : logo} alt="Logo icon" />
      </Link>
    </LogoContainer>
  );
};

export default connect(Logo);

const LogoContainer = styled.div`
  margin: 10px 8px 10px 17px;

  img {
    width: 450px;
  }

  .logo-scroll {
    width: 45px;
    margin-top: -5px;
  }
`