import { connect, styled } from "frontity";
import facebook from "../img/facebookWhite.png";
import youtube from "../img/youtubeWhite.png";
import instagram from "../img/instagramWhite.png";
import twitter from "../img/twitterWhite.png";

 const SocialMedia = ({ state }) => {

  return (
    <SocialMediaContainer>
      <div className="social-container">
        <img src={facebook} alt="Facebook icon" />
        <img src={youtube} alt="Youtube icon" />
        <img src={instagram} alt="Instagram icon" />
        <img src={twitter} alt="Twitter icon" />
      </div>
    </SocialMediaContainer>
  );
};

export default connect(SocialMedia);

const SocialMediaContainer = styled.div`
  grid-column: 3 / 4;
  grid-row: 2 / 3;
  display: grid;
  justify-items: center;
  align-items: center;
  margin-right: 15px;

  .social-container {
    display: grid;

    img {
      width: 25px;
      margin: 10px;
    }
  }
`