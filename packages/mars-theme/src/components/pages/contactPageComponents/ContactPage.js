import { useEffect, createRef } from "react";
import { connect, styled } from "frontity";
import lottie from "lottie-web";

import animationContact from "../../animations/contact.json";

const ContactPage = () => {

  let animationContactContainer = createRef();

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContactContainer.current,
      animationData: animationContact
    });
    anim.setSpeed(6);
  }, []);

  return (
    <ContactWrapper>
      <div className="animation-contact" ref={animationContactContainer}/>
      <div className="contact-form-container">
        <form className="contact-form">
          {/* <div className="personal-info-container"> */}
            <label className="personal-info-label" >Kontakt podaci</label>
            <input className="full-name" placeholder="Ime"/>
            <input className="email" type="email" placeholder="Email adresu"/>
            <input className="phone-number" type="number" placeholder="Broj telefona"/>
          {/* </div> */}
          {/* <div className="message-container"> */}
            <label className="message-label">Poruka</label>
            <textarea className="message" placeholder="Poruka..."/>
          {/* </div> */}
          <button type="submit" className="submit-button">Pošalji</button>
        </form>
      </div>
    </ContactWrapper>
  )
}

export default connect(ContactPage);

const ContactWrapper = styled.div`
  /* background-color: #0a8d7f; */
  display: grid;
  grid-template-columns: 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333%;
  grid-template-rows: 20% 10% 70%;
  height: 100vh;

  .animation-contact {
    grid-row: 3 / 4;
    grid-column: 2 / 6;
    height: 88%;
    /* border: 1px solid grey; */
    padding: 3%;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

    @media(max-width: 1500px) {
      height: 80%;
      margin-top: 9%;
      padding: 2%;
    }
  }

  .contact-form-container {
    grid-row: 3 / 4;
    grid-column: 7 / 12;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100%;
    font-weight: 600;
    font-family: "ivypresto-display";
    font-size: 25px;

    .contact-form {
      grid-row: 1 / 2;
      grid-column: 1 / 2;
      display: grid;
      grid-template-columns: 100%;
      grid-template-rows: 0% 7% 3% 10% 3% 10% 3% 10% 3% 7% 3% 21% 3% 10% 7%;

      .personal-info-label {
        grid-row: 2 / 3;
        grid-column: 1 / 2;
      }

      .full-name {
        grid-row: 4 / 5;
        grid-column: 1 / 2;
      }

      .email {
        grid-row: 6 / 7;
        grid-column: 1 / 2;
      }

      .phone-number {
        grid-row: 8 / 9;
        grid-column: 1 / 2;
      }

      .message-label {
        grid-row: 10 / 11;
        grid-column: 1 / 2;
      }

      .message {
        grid-row: 12 / 13;
        grid-column: 1 / 2;
      }

      .submit-button {
        grid-row: 14 / 15;
        grid-column: 1 / 2;
      }
    }
  }
`