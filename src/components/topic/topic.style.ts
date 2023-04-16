import styled from "styled-components";

export const TopicStyle = styled.div<{ isActive: boolean }>`
  width: 100%;
  padding: 12px;
  text-align: left;
  font-size: 20px;

  color: ${({ isActive }) => (isActive ? "orange" : "white")};

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;

  & .title {
    width: 100%;
  }

  &:hover {
    cursor: pointer;

    color: orange;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Icon = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    color: white;
  }
`;
