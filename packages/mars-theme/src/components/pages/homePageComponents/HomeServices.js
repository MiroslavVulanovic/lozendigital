import { useState, useEffect, useRef, createRef } from "react";
import { connect, styled } from "frontity";
import lottie from "lottie-web";
import Slider from "react-slick";
import LastPlayedSlider from 'react-slick/lib';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// import animationCopywritting from "../../animations/animationCopyWritting.json";
// import animationSocialMedia from "../../animations/animationSocialMedia.json";
// import animationCourses from "../../animations/animationCourses.json";
// import animationsCampaigns from "../../animations/animationCampaigns.json";
import animationCopywritting from "../../animations/animationCopywritting.gif";
import animationSocialMedia from "../../animations/animationSocialMedia.gif";
import animationCourses from "../../animations/animationCourses.gif";
import animationsCampaigns from "../../animations/lady-on-laptop.gif";
import animationArrowRight from "../../animations/caret-right-icon-animation.json";
import animationArrowLeft from "../../animations/caret-left-icon-animation.json";


const HomeServices = ({ state }) => {

  const [selectedItem, setSelectedItem] = useState('cilj');
  const slider = useRef();
  let animationCopywrittingContainer = createRef();
  let animationSocialMediaContainer = createRef();
  let animationCoursesContainer = createRef();
  let animationCampaignsContainer  = createRef();
  let animationArrowRightsContainer = createRef();
  let animationArrowLeftContainer = createRef();

  // useEffect(() => {
  //   const animCopywritting = lottie.loadAnimation({
  //     container: animationCopywrittingContainer.current,
  //     animationData: animationCopywritting
  //   });
  //   animCopywritting.setSpeed(1);
  // }, []);

  // useEffect(() => {
  //   const animSocialMedia = lottie.loadAnimation({
  //     container: animationSocialMediaContainer.current,
  //     animationData: animationSocialMedia
  //   });
  //   animSocialMedia.setSpeed(1);
  // }, []);

  // useEffect(() => {
  //   const animCourses = lottie.loadAnimation({
  //     container: animationCoursesContainer.current,
  //     animationData: animationCourses
  //   });
  //   animCourses.setSpeed(1);
  // }, []);

  // useEffect(() => {
  //   const animCampaigns = lottie.loadAnimation({
  //     container: animationCampaignsContainer.current,
  //     animationData: animationsCampaigns
  //   });
  //   animCampaigns.setSpeed(1);
  // }, []);

  useEffect(() => {
    const animArrowRight = lottie.loadAnimation({
      container: animationArrowRightsContainer.current,
      animationData: animationArrowRight
    });
    animArrowRight.setSpeed(1);
  }, []);

  useEffect(() => {
    const animArrowLeft = lottie.loadAnimation({
      container: animationArrowLeftContainer.current,
      animationData: animationArrowLeft
    });
    animArrowLeft.setSpeed(1);
  }, []);

  const next = () => {
    slider.current.slickNext();
  };
   const previous = () => {
    slider.current.slickPrev();
  }; 

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 0,
    speed: 1000,
    pauseOnHover: false,
    cssEase: 'linear',
    arrows: false,
    dots: false,
    className: 'slick-slider-fade',
  };


  return (
    <HomeServicesContainer>
        {/* <h2>Auto Play</h2> */} 
        <button  onClick={previous} className="previous-button" ref={animationArrowLeftContainer} />
        <Slider  ref={(c) => (slider.current = c)} {...settings} className="slider" >
          <div className="copywritting">
            <div className="home-copywritting-text-container">
              <h1>Copywritting</h1>
              <p>Sed elit enim, congue vel nisi interdum, commodo laoreet ligula. Integer suscipit maximus posuere. Quisque non rhoncus mauris. Nam volutpat non diam vitae malesuada. Aliquam erat volutpat. Proin non tristique arcu. Proin quis blandit orci. Donec vitae dolor bibendum turpis ultrices rhoncus. Ut eget massa vel nulla</p>
            </div>
            <img className="home-copywritting-animation" src={animationCopywritting}/>
          </div>

          <div className="socialMedia">
            <img className="home-social-media-animation" src={animationSocialMedia}/>
            <div className="home-social-media-text-container">
              <h1>Social Media</h1>
              <p>Sed elit enim, congue vel nisi interdum, commodo laoreet ligula. Integer suscipit maximus posuere. Quisque non rhoncus mauris. Nam volutpat non diam vitae malesuada. Aliquam erat volutpat. Proin non tristique arcu. Proin quis blandit orci. Donec vitae dolor bibendum turpis ultrices rhoncus. Ut eget massa vel nulla</p>
            </div>
          </div>

          <div className="courses">
            <div className="home-courses-text-container">
              <h1>Kursevi za digitalni marketing</h1>
              <p>Sed elit enim, congue vel nisi interdum, uisque non rhoncus mauris. Nam volutpat non diam vitae malesuada. Aliquam erat volutpat. Proin non tristique arcu. Proin quis blandit orci. Donec vitae dolor bibendum turpis ultrices rhoncus. Ut eget massa vel nulla</p>
            </div>
            <img className="home-courses-animation" src={animationCourses}/>
          </div>

          <div className="campaigns">
            <img className="home-campaigns-animation" src={animationsCampaigns}/>
            <div className="home-campaigns-text-container">
              <h1>Kampanje</h1>
              <p>Sed elit enim, congue vel nisi interdum, commodo laoreetncus mauris. Nam volutpat non diam vitae malesuada. Aliquam erat volutpat. Proin non tristique arcu. Proin quis blandit orci. Donec vitae dolor bibendum turpis ultrices rhoncus. Ut eget massa vel nulla</p>
            </div>
          </div>
        </Slider>
        <button onClick={next} className="next-button" ref={animationArrowRightsContainer} />
    </HomeServicesContainer>
  )
}

export default connect(HomeServices);

const HomeServicesContainer = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333%;
  grid-template-rows: 10% 80% 10%;
  height: 100vh;
  justify-items: center;
  align-items: center;

  .previous-button,
  .next-button {
    grid-row: 2 / 3;
    width: 5vw;
    height: 10vh;
    background-color: transparent;
    border: none;
  }

  .previous-button {
    grid-column: 1 / 2;
  }

  .next-button {
    grid-column: 12 / 13;
  }

 .slick-slider {
   grid-row: 2 / 3;
   grid-column: 2 / 12;
   width: 83.34vw;
   overflow-x: hidden;

   .slick-track {
     display: grid;
     grid-auto-flow: column;
   }

   .slick-slider-fade .slick-track
    {
      -webkit-transform: none!important;
      -moz-transform: none!important;
      -ms-transform: none!important;
      -o-transform: none!important;
        transform: none!important;
    }

   .copywritting,
   .socialMedia,
   .courses,
   .campaigns {
    height: 80vh;
    display: grid !important;
    grid-template-rows: 2.5% 45% 5% 45% 2.5%;
    grid-template-columns: 5% 90% 5%;
    justify-items: center;
    align-items: center;
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


   .copywritting {

     .home-copywritting-text-container {
      grid-row: 2 / 3;
      grid-column: 2 / 3;
     }

     .home-copywritting-animation {
      grid-row: 4 / 5;
      grid-column: 2 / 3;
      height: 36vh;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
     }
   }

   .socialMedia {

     .home-social-media-text-container {
      grid-row: 4 / 5;
      grid-column: 2 / 3;
     }

     .home-social-media-animation {
      grid-row: 2 / 3;
      grid-column: 2 / 3;
      height: 36vh;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
     }
   }

   .courses {

     .home-courses-text-container {
      grid-row: 2 / 3;
      grid-column: 2 / 3;
     }

     .home-courses-animation {
      grid-row: 4 / 5;
      grid-column: 2 / 3;
      height: 36vh;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
     }
   }

   .campaigns {

     .home-campaigns-text-container {
      grid-row: 4 / 5;
      grid-column: 2 / 3;
     }

     .home-campaigns-animation {
      grid-row: 2 / 3;
      grid-column: 2 / 3;
      height: 36vh;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
     }
   }
 }
`