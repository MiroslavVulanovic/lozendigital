import { connect, styled } from "frontity";

 const VerticalGrid = ({ state }) => {

  return (
    <VerticalGridContainer>
      <div className="column"/>
      <div className="column"/>
      <div className="column"/>
      <div className="column"/>
      <div className="column"/>
      <div className="column"/>
    </VerticalGridContainer>
  );
};

export default connect(VerticalGrid);

const VerticalGridContainer = styled.div`
  display: grid;
  /* grid-template-columns: calc(25% - 1px) calc(25% - 1px) calc(25% - 1px) calc(25% - 1px); */
  grid-template-columns: 10vw 20vw 20vw 20vw 20vw 10vw;
  grid-template-areas: 
    "column column column column";

  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10000;
  /* box-sizing: border-box; */
  max-width: 100vw;


  .column {
    border-style: solid;
    border-width: 1px;
    border-color: #f2f2f2;
  }
`