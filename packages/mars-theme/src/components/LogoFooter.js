import { connect, styled } from "frontity";
import logoFooter  from "./img/lozen-digital-logo-reverse.png";

 const Logo = ({ state, component, headerScroll }) => {

  return (
    <LogoContainer>
      <img src={logoFooter} alt="Logo footer icon" />
    </LogoContainer>
  );
};

export default connect(Logo);

const LogoContainer = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  display: grid;
  justify-items: center;
  align-items: center;
  padding-right: 11%;
  
  img {
    width: 100%;
  }
`