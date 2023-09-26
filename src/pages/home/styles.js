import styled from "styled-components";

export const Container = styled.div`
  color: #ffffff;
  height: 100vh;
`;

export const Content = styled.div`
  height: calc(100% - 47px);
  display: flex;
  justify-content: space-around;
  align-items: center;

  & .box {
    width: 400px;
    min-height: 50%;

    & h3 {
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }

  & form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 15px 0 15px 0;
  }
`;
