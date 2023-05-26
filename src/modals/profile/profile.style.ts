import styled from "styled-components";

export const ProfileStyle = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 100%;
  max-width: 666px;
  height: 100%;
  max-height: 411px;

  padding: 10px;
  background-color: white;
  border-radius: 4px;

  display: flex;
  /* justify-content: center;
  align-items: center; */
`;

export const LeftSide = styled.div`
  width: 211px;
  height: 100%;

  border-right: 1px solid ${({ theme }) => theme.border};

  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;

export const UserWrapper = styled.div`
  padding: 0 10px 10px 0;
  border-bottom: 1px solid ${({ theme }) => theme.border};

  margin-bottom: 10px;
`;

export const ActionSection = styled.div<{ isActive: boolean }>`
  padding: 10px;

  font-size: 15px;
  font-weight: 600;

  background-color: ${({ theme, isActive }) =>
    isActive ? theme.modals.hover : "initial"};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.modals.hover};
  }
`;
