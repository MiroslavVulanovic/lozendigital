import { useEffect, createRef } from "react";
import { connect, styled } from "frontity";
import lottie from "lottie-web";

import animationThree from "../../animations/productsThree.json";

 const ProductionServiceThree = () => {

  let animationThreeContainer = createRef();

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationThreeContainer.current,
      animationData: animationThree
    });
    anim.setSpeed(1);
  }, []);

  return (
    <ProductsThreeContainer>
      <div className="animation-three" ref={animationThreeContainer} />
      <div className="text-animation-three">
        <h1>Promo tekstovi</h1>
        <p>Nam quis magna ipsum. Cras justo ipsum, bibendum id sollicitudin sit amet, hendrerit quis velit. Stis ibitant morbi tristique senectus et netus et malesuada </p>
      </div>
    </ProductsThreeContainer>
  );
};

export default connect(ProductionServiceThree);

const ProductsThreeContainer = styled.div`
  display: grid;
  grid-template-columns: 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333%;
  grid-template-rows: 30% 40% 30%;
  justify-items: center;

  .animation-three {
    grid-row: 1 / 4;
    grid-column: 2 / 7;
    height: 100%;
  }

  .text-animation-three {
    grid-row: 2 / 3;
    grid-column: 8 / 12;
    text-align: center;
    font-weight: 500;
    font-family: "ivypresto-display";

    h1 {
      font-size: 45px;
    }

    p {
      font-size: 25px;
    }
  }
`