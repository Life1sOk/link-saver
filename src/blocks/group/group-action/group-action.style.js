import styled from "styled-components";

export const GroupActionStyle = styled.div`
  width: fit-content;
  height: fit-content;

  padding: 1px 5px;
  border: 1px solid transparent;

  display: flex;
  align-items: center;
  gap: 2px;

  font-size: 14px;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    border: 1px solid white;
    border-radius: 8px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.group.icon};

  & svg {
    width: 22px;
    height: 18px;
  }

  &:hover {
    cursor: pointer;
  }
`;
