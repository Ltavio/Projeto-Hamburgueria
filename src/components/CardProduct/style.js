import styled from "styled-components";

export const CardProductDiv = styled.div`
  width: 100%;
  max-width: 343px;
  height: 80px;
  min-height: 80px;

  margin-bottom: 20px;
  padding: 0;

  position: relative;
  display: flex;
  justify-content: space-between;

  div {
    display: flex;

    figure {
      width: 80px;
      height: 100%;

      margin: 0;

      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 70px;
      }
    }
    div {
      display: flex;
      flex-direction: column;
      padding: 10px;

      h3 {
        margin: 0 0 10px 0;
        max-width: 122px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        font-size: 16px;
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
    }
  }
  button {
    width: max-content;
    height: max-content;
    top: 10px;

    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: transparent;
    border: none;

    color: #bdbdbd;
    font-size: 12px;
    font-family: "Inter", sans-serif;
    font-weight: 500;

    cursor: pointer;

    &:hover {
      color: #8484fb;
      text-decoration: underline;
    }
  }
`;
