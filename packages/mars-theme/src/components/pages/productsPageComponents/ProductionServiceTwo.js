import { useEffect, createRef } from "react";
import { connect, styled } from "frontity";
import lottie from "lottie-web";

import animationTwo from "../../animations/productsTwo.json";

 const ProductionServiceOne = () => {

  let animationTwoContainer = createRef();

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationTwoContainer.current,
      animationData: animationTwo
    });
    anim.setSpeed(1);
  }, []);

  return (
    <ProductsTwoContainer>
      <div className="animation-two" ref={animationTwoContainer} />
      <div className="text-animation-two">
        <h1>Social Media</h1>
        <ul>
          <li>Facebook</li>
          <li>Instagram </li>
          <li>YouTube</li>
        </ul>
      </div>
    </ProductsTwoContainer>
  );
};

export default connect(ProductionServiceOne);

const ProductsTwoContainer = styled.div`
  display: grid;
  grid-template-columns: 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333%;
  grid-template-rows: 30% 40% 30%;
  justify-items: center;

  .animation-two {
    grid-row: 1 / 4;
    grid-column: 7 / 13;
    height: 100%;
  }

  .text-animation-two {
    grid-row: 2 / 3;
    grid-column: 1 / 7;
    text-align: center;
    font-weight: 500;
    font-family: "ivypresto-display";

    h1 {
      font-size: 45px;
    }

    ul {
      text-align: left;

      li {
        font-size: 25px;
        margin: 15px 0;
      }
    }


  }
`