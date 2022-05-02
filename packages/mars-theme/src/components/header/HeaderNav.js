import { connect, styled } from "frontity";
import Link from "../link";

const HeaderNav = ({ state }) => {
  const items = state.source.get(`/menu/${state.theme.menuUrl}/`).items;
  return (
    <HeaderNavContainer className="header-nav-container">
      <ul className="header-nav-ul">
        {items && items.map((item) => {
          if (!item.child_items) {
            return (
              <HeaderNavItem key={item.ID} className="header-nav-item">
                <Link link={item.url}>{item.title}</Link>
              </HeaderNavItem>
            );
          } else {
            const childItems = item.child_items;
            return (
              <NavItemWithChild key={item.ID}>
                <HeaderNavItem>
                  <Link link={item.url}>{item.title}</Link>
                </HeaderNavItem>
                <ChildMenu>
                  {childItems.map((childItem) => {
                    return (
                      <HeaderNavItem key={childItem.ID}>
                        <Link link={childItem.url}>{childItem.title}</Link>
                      </HeaderNavItem>
                    );
                  })}
                </ChildMenu>
              </NavItemWithChild>
            );
          }
        })}
      </ul>
    </HeaderNavContainer>
  );
};

export default connect(HeaderNav);

const HeaderNavContainer = styled.nav`
  display: grid;
  grid-auto-flow: column;
  width: 85%;

  .header-nav-ul {
    display: grid;
    grid-auto-flow: column;
    list-style: none;
    text-align: center;

    .header-nav-item {
      display: inline-block;
      width: 80%;

      a {
        text-decoration: none;
        color: #000;
        font-weight: 800;
        text-transform: uppercase;
        padding: 7px;
      }

      a:after,
      a:before {
        transition: all .5s;
      }
      a:hover {
        color: #fff;
      }
      a {
        position: relative;
      }
      a:after {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: 0%;
        content: '.';
        color: transparent;
        background: #aaa;
        height: 3px;
      }
      a {
        transition: all 1s;
      }
      a:after {
        text-align: left;
        content: '.';
        margin: 0;
        opacity: 0;
      }
      a:hover {
        color: #fff;
        z-index: 1;
      }
      a:hover:after {
        z-index: -10;
        animation: fill 1s forwards;
        -webkit-animation: fill 1s forwards;
        -moz-animation: fill 1s forwards;
        opacity: 1;
      }
    }
  }

  @-webkit-keyframes fill {
  0% {
    width: 0%;
    height: 1px;
  }
  50% {
    width: 100%;
    height: 1px;
  }
  100% {
    width: 100%;
    height: 100%;
    background: #333;
  }
}
`;

const HeaderNavItem = styled.div`

  text-decoration: none;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 600;
  font-family: "ivypresto-display";
  margin: 15px 10px;
`;
