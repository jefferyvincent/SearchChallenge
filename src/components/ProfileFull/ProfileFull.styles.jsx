import styled from 'styled-components';

export const StyledContainer = styled.div`
  flex: 1;
  padding-top 0px;
  position: relative;
  ${({theme: {isMobile}}) => isMobile &&`
  padding: 1em;
  text-align: center;
  `}
`

export const ProfileImgBackground = styled.div`
  background-image: url(${props => props.img});
  height: 300px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(4px);
  ${({theme: {isMobile}}) => isMobile &&`
    display: none;
  `}
`

export const ProfileImageHolder = styled.div`
  position: absolute;
  z-index: 1;
  padding-left: 1em;
  ${({theme: {isDesktop}}) => isDesktop &&`
    top: 3rem;
  `}
  ${({theme: {isTablet}}) => isTablet &&`
    top: 3rem;
  `}
  ${({theme: {isMobile}}) => isMobile &&`
    position: relative;
    padding-left: 0px;
    width: 200px;
    margin: 0 auto;
  `}
`

export const ProfileImage = styled.img`
  with: 100%;
  height: auto;
  border-radius: 50%;
`

export const ProfileImageCount = styled.span`
  color: white;
  position: absolute;
  font-weight: bold;
  top: 90px;
  right: 20px;
  z-index: 2;
`

export const TextContainer = styled.div `
  padding: 1em;
`
export const ProfileHeadingOne = styled.h1`
  color: black;
`

export const ProfileLocation = styled.p`
  color: grey;
`
