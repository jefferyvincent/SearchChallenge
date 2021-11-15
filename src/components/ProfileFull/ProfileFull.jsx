import React, {useContext} from 'react';
import { ThemeContext } from 'styled-components';
import { 
    StyledContainer, 
    ProfileImgBackground,
    ProfileImageHolder, 
    ProfileImage,
    ProfileImageCount, 
    TextContainer,
    ProfileHeadingOne,
    ProfileLocation
} from "./ProfileFull.styles";

export const ProfileFull = ({data}) => {
    const { handle, age, location, photoCount, photoUrl } = data;
    const themeContext = useContext(ThemeContext);
    return <StyledContainer>
        <ProfileImgBackground img={photoUrl} theme={themeContext} />
        <ProfileImageHolder>
            <ProfileImage src={photoUrl} alt={handle} theme={themeContext} />
            {photoCount > 1 && (<ProfileImageCount>{photoCount}</ProfileImageCount>)}
        </ProfileImageHolder>
        <TextContainer>
            <ProfileHeadingOne theme={themeContext} >{handle}, {age}</ProfileHeadingOne>
            <ProfileLocation>{location}</ProfileLocation>
        </TextContainer>
    </StyledContainer>
}
