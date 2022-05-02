import React from 'react'
import { connect, styled } from "frontity";

import ProductsMain from './ProductsMain';
import ProductionServiceOne from './ProductionServiceOne';
import ProductionServiceTwo from './ProductionServiceTwo';
import ProductionServiceThree from './ProductionServiceThree';

const ProductsPage = ({ post }) => {

  return (
  <ProductsWrapper>

    <SectionMainContainer>
      <ProductsMain />
    </SectionMainContainer>

    <SectionOneContainer>
      <ProductionServiceOne />
    </SectionOneContainer>

    <SectionTwoContainer>
      <ProductionServiceTwo />
    </SectionTwoContainer>

    <SectionThreeContainer>
      <ProductionServiceThree />
    </SectionThreeContainer>

  </ProductsWrapper>
  )
}

export default connect(ProductsPage);

const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100vh 90vh 90vh 90vh;
`;

const SectionMainContainer = styled.div`
  display: grid;
  grid-row: 1 / 2;
  grid-column: 1 / 2;
`

const SectionOneContainer = styled.div`
  background-color: #0a8d7f;
  display: grid;
  grid-row: 2 / 3;
  grid-column: 1 / 2;
`

const SectionTwoContainer = styled.div`
  display: grid;
  grid-row: 3 / 4;
  grid-column: 1 / 2;
`

const SectionThreeContainer = styled.div`
  background-color: #0a8d7f;
  display: grid;
  grid-row: 4 / 5;
  grid-column: 1 / 2;
`