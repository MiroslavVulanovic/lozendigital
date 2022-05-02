import { connect, styled } from "frontity";

 const FooterDescription = ({ state }) => {

  return (
    <FooterDescriptionContainer>
      <div>
        <h4>Kreativna digitalna agencija Lozen Digital</h4>
        <h4>Bulevar Vuka Micunovica 52 b, Niksic</h4>
        <h5>Copyright Lozen Digital © 2022.</h5>
      </div>
    </FooterDescriptionContainer>
  );
};

export default connect(FooterDescription);

const FooterDescriptionContainer = styled.div`
  grid-column: 2 / 3;
  grid-row: 3 / 4;
  display: grid;
  justify-items: center;
  align-items: center;
  /* width: 60%; */
  text-align: center;

  h4 {
    margin: 3px 0 0 0;
  }

  h5 {
    margin: 18px 0 20px 0;
  }

`