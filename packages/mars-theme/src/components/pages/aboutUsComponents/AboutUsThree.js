import { useEffect, createRef } from "react";
import { connect, styled } from "frontity";
import lottie from "lottie-web";

import animationThree from "../../animations/aboutUsThree.json";

 const AboutUsThree = () => {

  let animationThreeContainer = createRef();

  useEffect(() => {  
    const anim = lottie.loadAnimation({
      container: animationThreeContainer.current,
      animationData: animationThree
    });
    anim.setSpeed(0.4);
  }, []);

  return (
    <AboutUsThreeContainer>
      <div className="text-container">
        <h1>Lozen Magazine</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in est hendrerit orcion porttitor odio. Nam scelerisque sed nisl ut varius. Suspendisse vitae elit efficitur diam aliquet accumsan in eget nunc. Suspendisse a nibh id turpis feugiat consequat. Fusce quis sodales metus. In hendrerit blandit iaculis. Morbi laoreet at erat in varius</p>
      </div>
      <div className="animation-three" ref={animationThreeContainer} />
    </AboutUsThreeContainer>
  );
};

export default connect(AboutUsThree);

const AboutUsThreeContainer = styled.div`
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

  .animation-three {
    grid-row: 3 / 4;
    grid-column: 2 / 3;
    height: 80%;

    @media(max-height: 850px) {
      height: 60%;
      margin-top: 5%;
    }
  }
`