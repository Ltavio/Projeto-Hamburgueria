import styled from "styled-components";

export const CartDiv = styled.div`
  width: 95%;
  max-width: 379px;
  height: auto;
  max-height: 535px;

  margin: 10px 0;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #f5f5f5;
  border-radius: 8px;
`;

export const HeaderCart = styled.div`
  width: 100%;
  height: 65px;
  /*   border: 1px solid black; */

  display: flex;
  align-items: center;

  background: #27ae60;
  border-radius: 8px 8px 0px 0px;

  h3 {
    width: max-content;
    margin-left: 20px;

    font-size: 18px;
    font-family: "Inter", sans-serif;
    font-weight: 700;
    color: #ffffff;
  }
`;
export const CarrinhoVazio = styled.div`
  width: 100%;
  height: 250px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #f5f5f5;

  border-radius: 0 0 8px 8px;

  h2 {
    font-size: 18px;
    font-family: "Inter", sans-serif;
    font-weight: 700;
    color: #333333;
  }
  span {
    font-size: 14px;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    color: #828282;
  }
`;
export const CarrinhoCart = styled.div`
  width: 87%;
  height: 260px;

  padding: 20px;

  overflow: hidden;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 6px; /* width of the entire scrollbar */
  }

  ::-webkit-scrollbar-track {
    background: #f5f5f5; /* color of the tracking area */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #27ae60; /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
    border: 3px solid #27ae60; /* creates padding around scroll thumb */
  }
`;

export const LinhaDivisao = styled.div`
  width: 87%;
  height: 3px;

  margin: 20px 0 10px 0;

  background-color: #e0e0e0;
`;
