import styled from "styled-components";

export const BlankStyle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  color: grey;
  opacity: 0.3;
  border-radius: 3px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;

  font-size: var(--font-basic);
  font-weight: var(--font-weight-main);
  letter-spacing: 1px;
`;

export const BlankIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  animation: animationRotation 10s linear infinite;

  & svg {
    width: 25px;
    height: 25px;
  }

  @keyframes animationRotation {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;
