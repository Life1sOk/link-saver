import styled from "styled-components";

export const GroupTransitionModalStyle = styled.div`
  position: relative;

  width: 100%;
  height: fit-content;

  &::after {
    position: absolute;
    top: 50%;
    right: 5px;

    transform: translateY(-50%);

    content: "";
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;

    border-left: 5px solid ${({ theme }) => theme.topic.marker};
  }
`;
