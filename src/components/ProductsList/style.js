import styled from "styled-components";

//CONTAINER DO CARD

export const ListaProdutosDiv = styled.div`
  width: 100%;
  height: 70vh;

  padding: 15px;

  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;

  overflow: hidden;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    width: 0px;
  }
  @media (min-width: 768px) {
    padding: 1rem 1.5rem;
  }

  @media (min-width: 1024px) {
    width: 56%;
    height: 535px;
    max-height: 535px;

    padding: 0px 15px 15px 0px;

    flex-wrap: wrap;

    overflow: hidden;
    overflow-y: auto;

    /* border: 1px solid black; */
  }

  @media (min-width: 1250px) {
    width: 65%;

    align-items: flex-start;
  }
`;
