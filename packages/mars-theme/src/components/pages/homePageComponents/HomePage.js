import { connect, styled } from "frontity";

import Selection from "./Selection";
import SelectedService from "./SelectedService";
import MainSlider from "./MainSlider";
import HomeImportance from "./HomeImportance";
import HomeContact from "./HomeContact";
import HomeGoal from "./HomeGoal";
import HomeServices from "./HomeServices";

const HomePage = ({ state, post }) => {


  // const data = state.source.get(state.router.link);
  // console.log('------state.router.link-------', state.router.link);
  // const podaci = state.source[data.type][data.id];
  // console.log('------podaci-------', podaci.acf);

  return (
    <HomeWrapper>
      
      <SectionOneContainer>
        <div className="moto-container">
          <h1 className="moto-container-title">Kreativna digitalna agencija LOZEN DIGITAL</h1>
          <h1 className="moto-container-message">Digitalna strana vaseg uspjeha!</h1>
        </div>
        <div className="home-slider-container">
          <MainSlider />
        </div>
      </SectionOneContainer>

      <SectionTwoContainer>
        <HomeImportance />
      </SectionTwoContainer>

      <SectionThreeContainer>
        <HomeGoal />
      </SectionThreeContainer>

      <SectionFourContainer>
        {/* <div className="services-container">
          <div className="service-container-selection">
            <Selection options={['Copywritting', 'Social Media', 'Kampanje']} />
          </div>
          <div className="service-container-selected_service">
            <SelectedService />
          </div>
        </div> */}
        <HomeServices />
      </SectionFourContainer>

      <SectionFiveContainer>
        <HomeContact />
      </SectionFiveContainer>

    </HomeWrapper>
  )
}

export default connect(HomePage);

const HomeWrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto auto auto auto auto;
`;

const SectionOneContainer = styled.div`
  grid-row: 1 / 2;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 60% 10% 10% 40%;
  height: 100vh;

  .moto-container {
    grid-column: 1 / 1;
    grid-row: 2 / 4;
    display: grid;
    grid-template-rows: 50% 50%;
    width: 100%;
    z-index: 100;
    justify-items: center;
    align-items: center;
    background-color: #fff;
    opacity: 0.5;

    .moto-container-title {
      grid-row: 1 / 2;
      display: grid;
      align-items: end;
      font-size: 45px;
      font-weight: 500;
      font-family: "ivypresto-display";
    }

    .moto-container-message {
      grid-row: 2 / 3;
      display: grid;
      align-items: start;
      font-size: 45px;
      font-weight: 600;
      font-family: "ivypresto-display";
    }

  }

  .home-slider-container {
    display: grid;
    grid-column: 1 / 1;
    grid-row: 1 / 5;
    justify-items: end;
  }
`

const SectionTwoContainer = styled.div`
  grid-row: 2 / 3;
  display: grid;
  grid-template-rows: 20% auto auto 20%;
  height: 100vh;
`

const SectionThreeContainer = styled.div`
  grid-row: 3 / 4;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100% ;
  height: 100vh;
`

const SectionFourContainer = styled.div`
  grid-row: 4 / 5;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100% ;
  height: 100vh;

  /* .services-container {
    grid-row: 2 / 3;
    grid-column: 2 /16;
    display: grid;
    grid-template-columns: 42.86% 7.14% 50%;
    grid-template-rows: 50% 50%;

    .service-container-selection {
      grid-row: 1 / 3;
      grid-column: 1 / 2;
    }

    .service-container-selected_service {
      display: grid;
      grid-template-columns: 10% 10% 10% 10% 10% 10% 10% 10% 10% 10%;
      grid-template-rows: 10% 80% 10%;
      grid-row: 1 / 3;
      grid-column: 3 / 4;
      background-color: blue;
    }
  } */
`

const SectionFiveContainer = styled.div`
  grid-row: 5 / 6;
  display: grid;
  grid-template-rows: 20% auto auto 20%;
  height: 100vh;
`