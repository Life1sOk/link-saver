import styled from "styled-components";

export const TopicsStyle = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
  padding: 2px 0;

  overflow-y: scroll;

  display: flex;
  flex-direction: column;

  /* width */
  ::-webkit-scrollbar {
    width: 3px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.topic.scrollBar};
    border-radius: 10px;
  }
`;
