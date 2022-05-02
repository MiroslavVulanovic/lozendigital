import { connect, styled } from "frontity";
import LogoFooter from "../LogoFooter";
import FooterNav from "./FooterNav";
import FooterDescription from "./FooterDescription";
import SocialMedia from "./SocialMedia";

 const Footer = ({ state }) => {

  return (
    <FooterContainer>
        <FooterNav />
        <LogoFooter />
        <FooterDescription />
        <SocialMedia />
    </FooterContainer>
  );
};

export default connect(Footer);

const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: 33% 34% 33%;
  grid-template-rows: 15% 50% 35%;
  /* grid-template-areas:
    "logoTitle footerInfo social"; */
  color: #fff;
  background-color: #000;
  font-family: "ivypresto-display";
  height: 50vh;
  z-index: 10001;
`
// const LogoTitleContainer = styled.div`
//   grid-column: 1 / 2;
//   display: grid;
//   grid-template-columns: 13% 87%;
//   align-items: start;
//   margin: 25px 0 0 8px;

//   img {
//     width: 25px;
//   }

//   a {
//     font-size: 25px;
//   }
// `
// const FooterInfoContainer = styled.div`
//   grid-column: 2 / 3;
//   display: grid;
//   grid-template-columns: 100%;
//   grid-template-rows: 18% 82%;
//   grid-template-areas: 
//     "footerNav footerDescritption";
//   justify-items: center;
//   align-items: start;
//   margin-top: 15px;
// `

// const SocialMediaContainer = styled.div`

// `