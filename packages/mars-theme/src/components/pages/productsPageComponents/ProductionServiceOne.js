import { useEffect, createRef } from "react";
import { connect, styled } from "frontity";
import lottie from "lottie-web";

import animationOne from "../../animations/productsOne.json";

 const ProductionServiceOne = () => {

  let animationOneContainer = createRef();

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationOneContainer.current,
      animationData: animationOne
    });
    anim.setSpeed(1);
  }, []);

  return (
    <ProductsOneContainer>
      <div className="animation-one" ref={animationOneContainer} />
      <div className="text-animation-one">
        <h1>Copywriting</h1>
        <ul>
          <li>Sed vel felis eleifend, hendrerit leo non, venenatis lorem</li>
          <li>Sed vel felis eleifend, hendrerit </li>
          <li>Sed vel felis eleifend, hendrerit leo non</li>
        </ul>
      </div>
    </ProductsOneContainer>
  );
};

export default connect(ProductionServiceOne);

const ProductsOneContainer = styled.div`
  display: grid;
  grid-template-columns: 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333%;
  grid-template-rows: 30% 40% 30%;
  justify-items: center;

  .animation-one {
    grid-row: 1 / 4;
    grid-column: 2 / 7;
    height: 100%;
  }

  .text-animation-one {
    grid-row: 2 / 3;
    grid-column: 7 / 13;
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