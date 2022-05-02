import { connect, styled } from "frontity";
import  search  from "./img/hamburger.png";

 const Search = ({ state }) => {

  return (
    <SearchContainer>
      <img src={search} alt="Search icon" />
    </SearchContainer>
  );
};

export default connect(Search);

const SearchContainer = styled.div`
  margin: 20px 28px 0 0;
  
  img {
    width: 28px;
  }
`