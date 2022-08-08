import styled from "styled-components";

//CARD

export const CardProduct = styled.div`
  width: 226px;
  height: 265px;
  min-width: 226px;
  min-height: 265px;

  background-color: #ffffff;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 0;
  margin-right: 20px;

  border: 2px solid #e0e0e0;
  border-radius: 8px;

  @media (min-width: 1024px) {
    margin-bottom: 20px;
  }

  figure {
    width: 100%;
    margin: 0;

    display: flex;
    justify-content: center;

    background-color: #f5f5f5;

    border-radius: 8px 8px 0 0;
    img {
      width: 120px;
      /* border: 1px solid black; */
    }
  }
`;

export const DetalhesProduct = styled.div`
  width: 82%;
  height: 100%;
  gap: 10px;
  padding: 15px 0 7px 20px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  h2 {
    width: max-content;
    margin: 0;

    font-size: 18px;
    font-family: "Inter", sans-serif;
    font-weight: 700;

    color: #333333;
  }

  p {
    width: max-content;
    margin: 0;

    font-size: 12px;
    font-family: "Inter", sans-serif;
    font-weight: 400;

    color: #828282;
  }

  span {
    width: max-content;
    margin: 0;

    font-size: 14px;
    font-family: "Inter", sans-serif;
    font-weight: 600;

    color: #27ae60;
  }

  button {
    width: 100%;
    height: 30px;

    background-color: #27ae60;
    border: 2px solid #27ae60;
    border-radius: 8px;

    font-family: "Inter", sans-serif;
    font-weight: 600;
    color: #ffffff;

    cursor: pointer;

    &:hover {
      transition: all 300ms;
      background-color: #93d7af;
      border: 2px solid #93d7af;
    }
  }
`;
