import React from 'react';
import { connect, styled } from "frontity";

 const Selection = ({ options }) => {

  // console.log('array', Object.values(options));
  // console.log('options', options);

  const selectionItems = options.map((option, index) => {
    return (
      <li key={index} className="goal-nav-list-item">
        <span>{option}</span>
      </li>
    )

  })

  return (
    <SelectionContainer>
      <ul className="goal-nav-list">
        {selectionItems}
      </ul>
    </SelectionContainer>
  );
};

export default connect(Selection);

const SelectionContainer = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;

  .goal-nav-list {
    font-size: 45px;
    font-weight: 600;
    font-family: "ivypresto-display";
    list-style-type: none;

    @media(max-width: 1600px) {
        margin: 0;
      }

    .goal-nav-list-item {
      margin: 20px 0;

      @media(max-width: 1600px) {
        margin: 0;
      }

      &:hover {
        background-color: #f2f2f2;
      }
    }
  }

`