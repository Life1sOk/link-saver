import styled from "styled-components";

export const MessageStyle = styled.div<{ isActive?: boolean }>`
  position: fixed;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  align-items: center;

  width: fit-content;
  height: 55px;
  padding: 5px 15px 5px 5px;

  font-size: var(--font-basic);
  font-weight: var(--font-weight-normal);

  background-color: ${({ theme }) => theme.modals.background};
  color: rgba(0, 123, 255, 0.8);
  border-radius: 4px;
  border-left: 3px solid rgba(0, 123, 255, 0.8);

  -webkit-box-shadow: 0px 2px 10px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 2px 10px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 2px 10px 0px rgba(34, 60, 80, 0.2);

  animation: ${({ isActive }) => (isActive ? "messageUp" : "messageOut")} 1s linear;

  @keyframes messageUp {
    from {
      opacity: 0;
      transform: translate(-50%, 150%);
    }

    to {
      opacity: 1;
      transform: translate(-50%, 0);
    }
  }

  @keyframes messageOut {
    from {
      opacity: 1;
      transform: translate(-50%, 0);
    }

    to {
      opacity: 0;
    }
  }
`;

export const IconWrapper = styled.div`
  height: 100%;
  aspect-ratio: 1/ 1;

  display: flex;
  align-items: center;
  justify-content: center;

  & > svg {
    width: 25px;
    height: 25px;
    animation: animationRotation 10s linear infinite;
  }
`;

export const Message = styled.span`
  padding: 10px;
`;

export const Action = styled.a`
  text-decoration: underline;

  cursor: pointer;
`;
