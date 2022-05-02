import { useState, useEffect, createRef } from "react";
import { connect, styled } from "frontity";
import lottie from "lottie-web";

import animationGoal from "../../animations/animationGoal.json";
import animationMission from "../../animations/animationMission.json";
import animationSuccess from "../../animations/animationSuccess.json";


const HomeGoal = ({ state }) => {

  const [selectedItem, setSelectedItem] = useState('cilj');
  let animationGoalContainer = createRef();
  let animationMissionContainer = createRef();
  let animationSuccessContainer = createRef();
  let options=[
    {
      slug: 'cilj',
      label: 'Cilj',
      text: 'Nam quis magna ipsum. Cras justo ipsum, bibendum id sollicitudin sit amet, hendrerit'
    },
    {
      slug: 'misija',
      label: 'Misija',
      text: 'Nam quis magna ipsum. Cras justo ipsum, bibendum id sollicitudin sit amet, hendrerit'
    },
    {
      slug: 'rezultat',
      label: 'Rezultat',
      text: 'Nam quis magna ipsum. Cras justo ipsum, bibendum id sollicitudin sit amet, hendrerit'
    }
  ];

  const selectionItems = options.map((option, index) => {
    return (
      <li key={index} className="goal-nav-list-item" onClick={() => setSelectedItem(option.slug)}>
        <span className="goal-nav-list-title">{option.label}</span>
        <p className="goal-nav-list-text">{option.text}</p>
      </li>
    )
  })

  useEffect(() => {
    const animGoal = lottie.loadAnimation({
      container: animationGoalContainer.current,
      animationData: animationGoal
    });
    animGoal.setSpeed(1);
  }, []);

  useEffect(() => {
    const animMission = lottie.loadAnimation({
      container: animationMissionContainer.current,
      animationData: animationMission
    });
    animMission.setSpeed(1);
  }, []);

  useEffect(() => {
    const animSuccess = lottie.loadAnimation({
      container: animationSuccessContainer.current,
      animationData: animationSuccess
    });
    animSuccess.setSpeed(1);
  }, []);


  return (
    <GoalContainer>
      <div className={`animation-goal ${selectedItem === 'cilj' ? '' : 'animation-goal-inactive'}`} ref={animationGoalContainer} />
      <div className={`animation-mission ${selectedItem === 'misija' ? '' : 'animation-mission-inactive'}`} ref={animationMissionContainer} />
      <div className={`animation-success ${selectedItem === 'rezultat' ? '' : 'animation-success-inactive'}`} ref={animationSuccessContainer} />
      <SelectionContainer>
        <ul className="goal-nav-list">
          {selectionItems}
        </ul>
      </SelectionContainer>
    </GoalContainer>
  )
}

export default connect(HomeGoal);

const GoalContainer = styled.div`
  grid-row:  1 / 5;
  display: grid;
  grid-template-columns: 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333%;
  grid-template-rows: 10% 80% 10%;
  height: 100vh;

  .animation-goal {
    grid-row: 2 / 3;
    grid-column: 7 / 12;
    display: grid;
    justify-items: center;
    align-items: center;
    background-color: #fff;
    padding: 3%;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }

  .animation-mission {
    grid-row: 2 / 3;
    grid-column: 7 / 12;
    display: grid;
    justify-items: center;
    align-items: center;
    background-color: #fff;
    padding: 3%;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }

  .animation-success {
    grid-row: 2 / 3;
    grid-column: 7 / 12;
    display: grid;
    justify-items: center;
    align-items: center;
    background-color: #fff;
    padding: 3%;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }

  .animation-goal-inactive,
  .animation-mission-inactive,
  .animation-success-inactive {
    display: none;
  }
`

const SelectionContainer = styled.div`
  display: grid;
  grid-row: 2 / 3;
  grid-column: 2 / 6;
  justify-items: center;
  align-items: center;

  .goal-nav-list {
    font-size: 45px;
    font-weight: 600;
    font-family: "ivypresto-display";
    list-style-type: none;

    .goal-nav-list-item {
      margin: 30px 0;

      &:hover {
        background-color: #f2f2f2;
      }

      .goal-nav-list-text {
        font-size: 25px;
        font-weight: 500;
      }
    }
  }

`