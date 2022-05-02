import { useEffect, createRef } from "react";
import { connect, styled } from "frontity";
import lottie from "lottie-web";
import { motion, useViewportScroll, useTransform, useAnimation } from "framer-motion/dist/framer-motion";
import { useInView } from "react-intersection-observer";

import animationContact from "../../animations/homeContact.json";

 const HomeContact = ({ state }) => {

  const { scrollYProgress, scrollY } = useViewportScroll();

  const HomeContactBackground = useTransform(
    scrollYProgress,
    [0.76, 0.81, 0.95], [ "#fff", "#0a8d7f", "#0a8d7f" ]
  );

  let animationContactContainer = createRef();

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContactContainer.current,
      animationData: animationContact
    });
    anim.setSpeed(1);
  }, []);

  return (
    <HomeContactContainer>
      <motion.div className="contact-container" style={{backgroundColor: HomeContactBackground, height: "100vh"}}>
        <div className="animation-contact" ref={animationContactContainer} />
        <div className="text-contact">
          <h1 className="contact-container-title">Kontaktirajte nas</h1>
          <p className="contact-container-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in olor sit amet, consectetur adipiscing elit. est horeet at erat in varius.</p>
          <button className="contact-container-button">Kontakt</button>
        </div>
      </motion.div>
    </HomeContactContainer>
  );
};

export default connect(HomeContact);

const HomeContactContainer = styled.div`
  .contact-container {
    grid-row:  1 / 5;
    display: grid;
    grid-template-columns: 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333%;
    grid-template-rows: 10% 80% 10%;
    color: #000;
    height: 100vh;

    .animation-contact {
      grid-row: 2 / 3;
      grid-column: 7 / 12;
      display: grid;
      justify-items: center;
      align-items: center;
      background-color: #fff;
      padding: 3%;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    }

    .text-contact {
      grid-row: 2 / 3;
      grid-column: 2 / 6;
      display: grid;
      grid-template-rows: 30% 30% 40%;
      justify-items: end;
      align-items: center;
      font-weight: 500;
      font-family: "ivypresto-display";

      h1 {
        grid-row: 1 / 2;
        font-size: 45px;
        text-align: center;
      }

      p {
        grid-row: 2 / 3;
        font-size: 25px;
        text-align: end;
      }

      .contact-container-button {
        grid-row: 3 / 4;
        width: 15vw;
        height: 8vh;
      }
    }
  }
`