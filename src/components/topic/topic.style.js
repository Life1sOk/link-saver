import styled from "styled-components";

export const TopicStyle = styled.div`
  width: 100%;
  padding: 12px;
  text-align: left;
  font-size: 20px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;

  &:hover {
    cursor: pointer;

    color: orange;

    & svg {
      color: orange;
    }
  }
`;
