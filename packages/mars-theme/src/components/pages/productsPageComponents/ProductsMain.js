import { useEffect, createRef } from "react";
import { connect, styled } from "frontity";
import lottie from "lottie-web";

import animationMain from "../../animations/productsMain.json";

 const ProductsMain = () => {

  let animationMainContainer = createRef();

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationMainContainer.current,
      animationData: animationMain
    });
    anim.setSpeed(0.3);
  }, []);

  return (
    <ProductsMainContainer>
      <div className="text-main">
        <h1>Upoznajte paletu naših usluga!</h1>
      </div>
      <div className="animation-main" ref={animationMainContainer} />
    </ProductsMainContainer>
  );
};

export default connect(ProductsMain);

const ProductsMainContainer = styled.div`
  display: grid;
  grid-template-columns: 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333%;
  grid-template-rows: 30% 40% 30%;
  justify-items: center;
  align-items: center;

  @media(max-width: 1500px) {
    align-items: end;
  }

  .animation-main {
    grid-row: 1 / 4;
    grid-column: 7 / 13;
    height: 100%;
  }

  .text-main {
    grid-row: 2 / 3;
    grid-column: 1 / 7;
    text-align: center;

    h1 {
      font-size: 45px;
      font-weight: 500;
      font-family: "ivypresto-display";
    }
  }
`