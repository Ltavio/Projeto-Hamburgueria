import styled from "styled-components";

export const CardTotalDiv = styled.div`
  width: 87%;
  height: 104px;
  margin-bottom: 30px;

  div {
    width: 100%;
    height: 44px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-size: 14px;
      font-family: "Inter", sans-serif;
      font-weight: 600;
      color: #333333;
    }

    p {
      font-size: 14px;
      font-family: "Inter", sans-serif;
      font-weight: 600;
      color: #828282;
    }
  }
  button {
    width: 100%;
    height: 60px;

    background-color: #e0e0e0;
    border: 2px solid #e0e0e0;
    border-radius: 8px;

    font-size: 16px;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    color: #828282;

    cursor: pointer;

    &:hover {
      transition: all 400ms;
      background-color: #b3a4a4;
      border: 2px solid #b3a4a4;
      color: #ffffff;
    }
  }
`;
