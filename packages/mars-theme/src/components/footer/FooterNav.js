import { connect, styled } from "frontity";
import Link from "../link";

/**
 * Navigation Component
 *
 * It renders the navigation links
 */
 const FooterNav = ({ state }) => {
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

export default connect(FooterNav);

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
`;
