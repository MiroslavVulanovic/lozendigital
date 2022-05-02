import { connect, styled } from "frontity";

 const Description = ({ state }) => {
  const items = state.source.get(`/menu/${state.theme.menuUrl}/`).items;
  // console.log('ITEMS:',items)
  return (
    <DescriptionWrapper>
      <h1>{state.frontity.description} </h1>
      {/* <h4>{state.source.page[9].acf.site_moto}</h4> */}
    </DescriptionWrapper>
  );
};

export default connect(Description);

const DescriptionWrapper = styled.div`
  margin: 150px auto 300px ;
  text-align: center;
  text-shadow: 2px 2px 15px #000000;

  h1 {  
    font-size: 40px;
    color: #fff;
    margin: 0 auto;
    font-family: "ivypresto-display";
  }

  h4 {
    font-size: 60px;
    color: #fff;
    margin: 0;
    font-family: "ivypresto-display";
  }
  
`;