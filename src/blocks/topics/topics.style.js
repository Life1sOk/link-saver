import styled from "styled-components";

export const TopicsStyle = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
  padding: 7px 0;

  /* border-bottom: 1px solid ${({ theme }) => theme.border}; */
  /* border-radius: 0 0 0 4px; */

  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  gap: 7px;
`;
