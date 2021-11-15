import styled from 'styled-components';

export const ContentContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 16px;
    ${({theme: {isMobile}}) => isMobile &&`
        grid-template-columns: 1fr;
    `}
`
export const Main = styled.main`
    margin: 24px;
`

export const Navigation = styled.div`
    display: flex;
    justify-content: flex-end;
`