import styled from 'styled-components';

export const SpinnerStyle = styled.div`
    width: 50px;
    height: 50px;
    border: 7px solid var(--orange);
    border-top: 10px solid var(--main-background);
    border-radius: 50%;

    animation: spinner 1s linear infinite;

    @keyframes spinner {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
  }
`;