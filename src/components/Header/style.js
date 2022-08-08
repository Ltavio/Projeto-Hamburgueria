import styled from "styled-components";

export const HeaderPage = styled.div`
  width: 100%;
  height: 7.688rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  background-color: #f5f5f5;

  img {
    width: 8.875rem;
    height: 1.8rem;
  }
  @media (min-width: 768px) {
    display: flex;
    height: 80px;
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 1.5rem;
  }
  @media (min-width: 1024px) {
    padding: 0 3rem;
  }
  @media (min-width: 1350px) {
    padding: 0 5rem;
  }
`;
