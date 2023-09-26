import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 5px;
  border-bottom: 1px solid #3b3450;
  height: 35px;
  width: 50%;

  & img {
    width: 10px;
  }

  & input {
    background-color: transparent;
    border: none;
    color: #fff;
  }
  ::placeholder {
    color: #fff;
  }
`;
