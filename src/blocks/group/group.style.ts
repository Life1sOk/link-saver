import styled from "styled-components";

export const GroupStyle = styled.div<{ isActive: boolean }>`
  position: relative;
  z-index: ${({ isActive }) => (isActive ? "9" : "0")};

  /* width: 289px; */
  width: 100%;
  height: fit-content;

  /* background-color: ${({ theme }) => theme.group.background}; */
  /* padding: 5px; */
  /* border: 1px solid ${({ theme }) => theme.group.border}; */
  /* border: 1px solid ${({ theme }) => theme.group.marker}; // */
  background-color: white;
  border-radius: 5px;
  /*   
  -webkit-box-shadow: 0px 0px 5px 3px rgba(255, 117, 101, 0.3);
  -moz-box-shadow: 0px 0px 5px 3px rgba(255, 117, 101, 0.3);
  box-shadow: 0px 0px 5px 3px rgba(255, 117, 101, 0.3); */

  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);

  display: flex;
  flex-direction: column;
`;

export const GroupHeader = styled.div`
  position: relative;

  width: 100%;
  height: 66px; //
  padding: 7px;
  /* border-bottom: 1px solid ${({ theme }) => theme.group.border}; */
  /* border: 1px solid ${({ theme }) => theme.border}; // */
  border-radius: 5px 5px 0 0; //
  /* background-color: ${({ theme }) => theme.group.marker}; // */
  color: white; //

  background: rgb(255, 78, 58);
  background: linear-gradient(
    171deg,
    rgba(255, 78, 58, 1) 0%,
    rgba(255, 116, 99, 1) 49%,
    rgba(255, 141, 141, 1) 100%
  );

  display: flex;
  align-items: center;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.group.icon};

  & svg {
    width: 22px;
  }

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.group.active};
  }
`;

export const LinksPlace = styled.div`
  width: 100%;
  margin: 11px 0;
  padding: 0 10px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
