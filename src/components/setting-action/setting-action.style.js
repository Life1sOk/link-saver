import styled from "styled-components";

export const SettingActionStyle = styled.a`
  /* width: 100%; */
  /* height: 44px;
  aspect-ratio: 1/1; */
  /* border-radius: 4px 0px 0px 4px;
  background-color: white; */
  /* height: fit-content; */

  /* display: flex;
  align-items: center; */
  /* gap: 13px; */
  /* flex-shrink: 0; */
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;

export const ActionTitle = styled.span`
  font-size: 17px;
  font-weight: 600;
`;

export const IconWrapper = styled.div`
  /* padding-left: 5px; */
  padding: 7px;

  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    width: 23px;
    height: 23px;
  }
`;
