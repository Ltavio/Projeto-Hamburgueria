import styled from "styled-components";

export const DivButton = styled.div`
  width: 90%;
  max-width: 379px;
  box-sizing: border-box;
  height: 3rem;

  position: relative;
  display: flex;
  justify-content: center;

  form {
    position: relative;
    height: 2.5rem;
    box-sizing: border-box;
    width: 100%;

    input {
      width: 100%;
      max-width: 379px;
      box-sizing: border-box;

      height: 2.5rem;

      padding: 21px;
      font-size: 16px;
      font-family: "Inter", sans-serif;
      font-weight: 400;

      background-color: #ffffff;

      border-radius: 8px;
      border: 2px solid #e0e0e0;

      &:focus {
        border: 2px solid #333333;
      }
    }

    button {
      top: 7px;
      right: 7px;

      width: 4.8rem;
      height: 2rem;
      padding: 0 45px;

      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 14px;
      font-family: "Inter", sans-serif;
      font-weight: 500;
      color: #ffffff;

      background: #27ae60;
      border: 2px solid #27ae60;
      border-radius: 8px;

      cursor: pointer;

      &:hover {
        transition: all 300ms;
        background: #e0e0e0;
        border: 2px solid #e0e0e0;
        color: #333333;
      }
    }
  }
`;
