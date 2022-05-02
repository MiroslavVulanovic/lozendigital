import { useEffect, createRef } from "react";
import { connect, styled } from "frontity";
import lottie from "lottie-web";
import { motion, useViewportScroll, useTransform, useAnimation } from "framer-motion/dist/framer-motion";
import { useInView } from "react-intersection-observer";

import animationImportance from "../../animations/homeImportance.json";

 const HomeImportance = ({ state }) => {

  const { scrollYProgress, scrollY } = useViewportScroll();

  const HomeImportanceContainerBackground = useTransform(
    scrollYProgress,
    [0.19, 0.22, 0.38], [ "#fff", "#0a8d7f", "#0a8d7f" ]
  );

  let animationImportanceContainer = createRef();

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationImportanceContainer.current,
      animationData: animationImportance
    });
    anim.setSpeed(1);
  }, []);

  return (
    <HomeImportanceContainer>
      <motion.div className="home-importance-container" style={{backgroundColor: HomeImportanceContainerBackground, height: "100vh"}}>
        <div className="animation-importance" ref={animationImportanceContainer} />
        <div className="text-importance">
          <h1>Zasto je digitalni marketing vazan?</h1>
          <p>NMorbi maximus neque sit amet odio feugiat vulputate. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras commodo nisi non vehicula fringilla. Sed maximus purus vel tellus faucibus maximus. Cras luctus facilisis justo vitae laoreet. Nam elementum vel ante ut sollicitudin. Donec eget pretium augue, nec sollicitudin mauris. Cras id justo at nisl tincidunt consequat ut id massa. Curabitur porttitor blandit justo vitae cursus. Pellentesque lacus enim, tincidunt quis justo sed, elementum posuere nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
            Nulla sit amet bibendum sapien. Nunc auctor, metuhoncus diam, vel mattis mauris quam ac libero. Quisque dapibus dui augue, at condimentum nisi varius in. Phasellus cursus bibendum mauris, eu euismod nulla malesuada ut. Mauris consequat, tellus rutrum accumsan malesuada, velit ipsum lacinia erat, ac vulputate neque orci ut ante. Duis ac egestas metus. Pellentesque congue quam augue, sit amet bibendum elit cursus id. Nam augue odio, fermentum sed enim nec, aliquam fringilla leo. Donec laoreet, massa quis auctor tristique, tellus ligula tincidunt tellus, nec efficitur sem dui sed magna. </p>
        </div>
      </motion.div>
    </HomeImportanceContainer>
  );
};

export default connect(HomeImportance);

const HomeImportanceContainer = styled.div`
  .home-importance-container {
    grid-row:  1 / 5;
    display: grid;
    grid-template-columns: 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333%;
    grid-template-rows: 10% 80% 10%;
    color: #000;
    height: 100vh;

    .animation-importance {
      grid-row: 2 / 3;
      grid-column: 2 / 7;
      display: grid;
      justify-items: center;
      align-items: center;
      background-color: #fff;
      /* width: 95%; */
      /* height: 90%; */
      padding: 3%;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    }

    .text-importance {
      grid-row: 2 / 3;
      grid-column: 8 / 12;
      display: grid;
      justify-items: center;
      align-items: center;
      /* margin: 40px 50px 80px 50px; */
      /* padding: 0 70px; */
      /* font-size: 25px; */
      font-weight: 500;
      font-family: "ivypresto-display";

      h1 {
        font-size: 45px;
      }

      p {
        font-size: 25px;
      }
    }
  }
`