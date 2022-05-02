import React, { useEffect, useState } from "react";
import { connect, styled } from "frontity";
import LogoTitle from "./LogoTitle";
import HeaderNav from "./HeaderNav";
import Search from "../Search";
import Logo from "../Logo"
import Menu from "../Menu"


const Header = ({ state }) => {

  const [headerScroll, setHeaderScroll] = useState(true);

  const data = state.source.get(state.router.link);
  const link = state.router.link;
  let hideHeader = link === '/o-nama/' ? true : false;

  useEffect(() => {
    if (typeof window !== "undefined") {
      if( window.pageYOffset < 10 ) {
        setHeaderScroll(false);
      }
      window.addEventListener("scroll", () => {
        setHeaderScroll(window.pageYOffset > 10);
      });
    }
  }, []);

  return (
    <>
    <HeaderWrapper hideHeader={hideHeader}>
      <div  className={`header ${headerScroll ? "header-scroll-backround" : ""}`}>
        <LogoTitleContainer>
          <Logo headerScroll={headerScroll} />
          {/* <LogoTitle headerScroll={headerScroll} /> */}
        </LogoTitleContainer>
        <NavContainer>
          {/* <Menu headerScroll={headerScroll}/> */}
          <HeaderNav />
          {/* <Search /> */}
        </NavContainer>
      </div>
    </HeaderWrapper>
    </>
  );
};

export default connect(Header);

const HeaderWrapper = styled.div`

  .header {
    position: fixed;
    top: 0;
    left: 0;
    height: 80px;
    width: 100vw;
    display: ${({ hideHeader }) => (hideHeader ? "none" : "grid")};
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-areas: 
      "logoContainer logoContainer . navContainer";
    z-index: 101;
    transition: background-color ease-in 0.5s;
    background-color: transparent;
  }

  .header-scroll-backround {
    display: none;
  }
`
const LogoTitleContainer = styled.div`
  grid-column: 1 / 3;
  display: grid;
  grid-template-columns: 10% 90%;
  align-items: center;
`

const NavContainer = styled.div`
  grid-column: 3 / 5;
  display: grid;
  justify-items: center;
  align-items: start;
  padding-top: 20px;
`
