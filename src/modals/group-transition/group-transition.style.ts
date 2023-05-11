import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const ChildWrapper = styled.div``;

export const GroupTransitionModalStyle = styled.div`
  position: absolute;
  left: 21px;
  z-index: 15;

  width: 128px;
  height: fit-content;

  background-color: ${({ theme }) => theme.modals.background};
  border: 1px solid ${({ theme }) => theme.modals.border};
  border-radius: 5px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
`;

export const TransTitle = styled.h4`
  width: 100%;

  color: white;
  background-color: ${({ theme }) => theme.topic.marker};
  border-bottom: 1px solid ${({ theme }) => theme.modals.border};
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

  &:hover {
    cursor: pointer;

    box-shadow: 0px 0px 10px 0px ${({ theme }) => theme.topic.marker} inset;
    -webkit-box-shadow: 0px 0px 10px 0px ${({ theme }) => theme.topic.marker} inset;
    -moz-box-shadow: 0px 0px 10px 0px ${({ theme }) => theme.topic.marker} inset;
  }
`;

export const Emptiness = styled(BasicLi)`
  opacity: 0.3;
`;
