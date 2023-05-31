import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const ChildWrapper = styled.div``;

export const GroupTransitionModalStyle = styled.div`
  position: absolute;
  top: 28px;
  left: -50%;
  z-index: 15;

  animation-name: modalAnimation;
  animation-duration: 0.5s;

  width: 128px;
  height: fit-content;
  background-color: ${({ theme }) => theme.modals.background};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 5px;

  display: flex;
  flex-direction: column;

  &::after {
    position: absolute;
    top: -7px;
    left: 50%;
    z-index: 16;

    transform: translateX(-50%);

    content: "";
    width: 0;
    height: 0;

    border-bottom: 7px solid ${({ theme }) => theme.topic.marker};
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
  }
`;

export const TransTitle = styled.h4`
  width: 100%;

  border-radius: 4px 4px 0 0;

  color: white;
  background-color: ${({ theme }) => theme.topic.marker};
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

export const TransMain = styled.ul`
  width: 100%;
  padding: 3px 0;

  display: flex;
  flex-direction: column;
`;

const BasicLi = styled.li`
  width: 100%;
  max-width: 128px;
  height: 33px;

  font-size: 15px;
  font-weight: 600;
  padding: 3px;
`;

export const TopicsPick = styled(BasicLi)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  color: ${({ theme }) => theme.color};

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.topic.marker};
  }
`;

export const Emptiness = styled(BasicLi)`
  opacity: 0.3;
`;
