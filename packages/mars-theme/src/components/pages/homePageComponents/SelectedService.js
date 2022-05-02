import { connect, styled } from "frontity";
import serviceImage from "../../img/copywriting.png";

 const SelectedService = ({ state, component }) => {

  return (
    <SelectedServiceContainer>
      <p className="selected_service-text">
        Sed vel felis eleifend, hendrerit leo non, venenatis lorem. Praesent hendrerit auctor enim, et vestibulum
      </p>
      <img src={serviceImage} className="selected_service-image" />
    </SelectedServiceContainer>
  );
};

export default connect(SelectedService);

const SelectedServiceContainer = styled.div`
  grid-row: 1 / 4;
  grid-column: 1 / 11;
  display: grid;
  grid-template-columns: 10% 10% 10% 10% 10% 10% 10% 10% 10% 10%;
  grid-template-rows: 10% 80% 10%;
  /* justify-items: center;
  align-items: center; */

    .selected_service-text {
      grid-row: 2 / 3;
      grid-column: 2 / 5;
      font-size: 25px;
      font-weight: 600;
      font-family: "ivypresto-display";
      list-style-type: none;
      background-color: green;

    .selected_service-image {
      grid-row: 2 / 3;
      grid-column: 6 / 9;    
    }
  }

`