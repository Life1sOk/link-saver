import styled from "styled-components";

export const CheckWrapperStyle = styled.div<{ isCheck: boolean }>`
  border-radius: 4px;
  animation: ${({ isCheck }) =>
    isCheck ? "pulsPerple 1.5s alternate infinite" : "none"};

  @keyframes pulsPerple {
    from {
      box-shadow: 0px 0px 10px -3px rgba(225, 69, 165, 0.8);
    }

    to {
      box-shadow: 0px 0px 10px 0px rgba(225, 69, 165, 0.8);
    }
  }

  &:hover {
    animation: none;
  }
`;
