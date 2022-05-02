import { useEffect, createRef } from "react";
import { connect, styled } from "frontity";
import lottie from "lottie-web";

import AboutUsOne from "./AboutUsOne";
import AboutUsTwo from "./AboutUsTwo";
import logo from "../../img/lozen-digital-logo-mark-reverse.png";

import animationContact from "../../animations/contact.json";
import AboutUsThree from "./AboutUsThree";

const AboutUsPage = () => {

  // let animationContactContainer = createRef();

  // useEffect(() => {
  //   const anim = lottie.loadAnimation({
  //     container: animationContactContainer.current,
  //     animationData: animationContact
  //   });
  //   anim.setSpeed(1);
  // }, []);

  return (
    <AboutUsWrapper>

      <SectionLeftContainer>
        <div className="logo-container">
          <img src={logo} />
        </div>
      </SectionLeftContainer>

      <SectionOneContainer>
        <AboutUsOne />
      </SectionOneContainer>

      <SectionTwoContainer>
        <AboutUsTwo />
      </SectionTwoContainer>

      <SectionThreeContainer>
        <AboutUsThree />
      </SectionThreeContainer>
      
    </AboutUsWrapper>
  )
}

export default connect(AboutUsPage);

const AboutUsWrapper = styled.div`
  /* background-color: #0a8d7f; */
  display: grid;
  grid-template-columns: 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333%;
  grid-template-rows: 100vh 100vh 100vh;

`

const SectionLeftContainer = styled.div`
  background-color: #0a8d7f;
  grid-column: 1 / 7;
  grid-row: 1 / 2;
  position: fixed;
  height: 100vh;
  width: 50vw;
  /* overflow-y: hidden; */
  display: grid;
  grid-template-columns: 15% 70% 15%;
  grid-template-rows: 5% 90% 5%;
  justify-items: center;
  align-items: center;

  .logo-container {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
`

const SectionOneContainer = styled.div`
  /* background-color: red; */
  grid-column: 7 / 13;
  grid-row: 1 / 2;
`

const SectionTwoContainer = styled.div`
  /* background-color: blue; */
  grid-column: 7 / 13;
  grid-row: 2 / 3;
`

const SectionThreeContainer = styled.div`
  /* background-color: green; */
  grid-column: 7 / 13;
  grid-row: 3 / 4;
`