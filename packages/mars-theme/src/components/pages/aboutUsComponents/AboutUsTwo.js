import { useEffect, createRef } from "react";
import { connect, styled } from "frontity";
import lottie from "lottie-web";

import animationTwo from "../../animations/aboutUsTwo.json";

 const AboutUsTwo = () => {

  let animationTwoContainer = createRef();

  useEffect(() => {  
    const anim = lottie.loadAnimation({
      container: animationTwoContainer.current,
      animationData: animationTwo
    });
    anim.setSpeed(1);
  }, []);

  return (
    <AboutUsOneContainer>
      <div className="text-container">
        <h1>Digitalna agencija Lozen Digital</h1>
        <p>Lorem ipsum dolor sit amet, consectetur orcion porttitor odio. Nam scelerisque sed nisl ut varius. Suspendisse vitae elit efficitur diam aliquet accumsan in eget nunc. Suspendisse a nibh id turpis feugiat consequat. Fusce quis sodales metus. In hendrerit blandit iaculis. Morbi laoreet at erat in varius</p>
      </div>
      <div className="animation-two" ref={animationTwoContainer} />
      <div className="section-two-border"/>
    </AboutUsOneContainer>
  );
};

export default connect(AboutUsTwo);

const AboutUsOneContainer = styled.div`
  display: grid;
  grid-template-columns: 5% 90% 5%;
  grid-template-rows: 10% 30% 55% 5%;
  height: 100vh;
  justify-items: center;
  align-items: center;

  .text-container {
    grid-row: 2 / 3;
    grid-column: 2 / 3;
    font-weight: 500;
    font-family: "ivypresto-display";

    h1 {
      font-size: 45px;
    }

    p {
      font-size: 25px;
    }
  }

  .animation-two {
    grid-row: 3 / 4;
    grid-column: 2 / 3;

    @media(max-height: 850px) {
      height: 70%;
      margin-top: 8%;
    }
  }

  .section-two-border {
    grid-row: 4 / 5;
    grid-column: 2 / 3;
    width: 100%;
    height: 100%;
    border-bottom: 1px solid grey;
  }
`