import { connect, styled } from "frontity";
import Link from "./link";

/**
 * Navigation Component
 *
 * It renders the navigation links
 */
 const Nav = ({ state }) => {
  const items = state.source.get(`/menu/${state.theme.menuUrl}/`).items;
  return (
    <NavContainer>
      {items && items.map((item) => {
        if (!item.child_items) {
          return (
            <NavItem key={item.ID}>
              <Link link={item.url}>{item.title}</Link>
            </NavItem>
          );
        } else {
          const childItems = item.child_items;
          return (
            <NavItemWithChild key={item.ID}>
              <NavItem>
                <Link link={item.url}>{item.title}</Link>
              </NavItem>
              <ChildMenu>
                {childItems.map((childItem) => {
                  return (
                    <NavItem key={childItem.ID}>
                      <Link link={childItem.url}>{childItem.title}</Link>
                    </NavItem>
                  );
                })}
              </ChildMenu>
            </NavItemWithChild>
          );
        }
      })}
    </NavContainer>
  );
};

export default connect(Nav);

const NavContainer = styled.nav`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  display: grid;
  grid-auto-flow: row;
  justify-items: start;
  padding-left: 27%;
  width: 60%;
  margin-top: 10px;
`;

const NavItem = styled.div`

  text-decoration: none;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 400;
  font-family: "ivypresto-display";
  margin: 10px;
  
  /* width: 90px;
  padding-top: 13px;
  margin: 0 6px;
  color: #fff;
  font-size: 1.2em;
  font-weight: 600;
  box-sizing: border-box;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  text-align: center; */

  /* &:hover {
    background-color: #0a766d;
    color: #fff;
  } 

  & > a {
    display: inline-block;
    line-height: 2em;
    border-bottom: 2px solid;
    border-bottom-color: transparent;
    /* Use for semantic approach to style the current link */
    /* &[aria-current="page"] { */
      /* border-bottom-color: #fff;
    }

    &:focus {
      color: #11d4c4;
    } */ 
  /* } */

  /* &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;

    &:after {
      content: "";
      display: inline-block;
      width: 24px;
    }
  } */
`;
