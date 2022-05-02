import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header/Header";
import Post from "./post";
import Loading from "./loading";
import PageError from "./page-error";
import VerticalGrid from "./VerticalGrid";
import Footer from "./footer/Footer";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 *
 * @param props - The props injected by Frontity's {@link connect} HOC.
 *
 * @returns The top-level react component representing the theme.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  const link = state.router.link;

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        {/* <VerticalGrid /> */}
        <PageWrapper>
          <Header/>
          <Switch>
            <Loading when={data.isFetching} />
            <Post when={data.isPostType} />
            <PageError when={data.isError} />
          </Switch>
          <Footer />
        </PageWrapper>
      </Main>
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  body {
    margin: 0;
    /* font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif; */
    box-sizing: border-box ;
    overflow-x: hidden;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }

  @media(max-width: 1700px) {
    p {
      font-size: 12px !important;
    }
  }
`;

const PageWrapper = styled.div`
position: relative;
  display: grid;
  grid-template-rows: auto auto;
  grid-template-areas: 
    /* "header" */
    "main"
    "footer";
  width: 100vw;
  max-width: 100vw;
`

const Main = styled.div`
  width: 100vw;
  max-width: 100vw;
  box-sizing: border-box;
`;
