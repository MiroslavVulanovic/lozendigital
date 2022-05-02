import { connect, styled } from "frontity";
import Link from "../link" 

const LogoTitle = ({ state }) => {
  return (
    <StyledLink  link="/">{state.frontity.title}</StyledLink>
  )
}

export default connect(LogoTitle);

const StyledLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 70px;
  font-weight: 500;
  font-family: "ivypresto-display";
  margin: 0 15px 7px 34px;
  color: #021816;
`
