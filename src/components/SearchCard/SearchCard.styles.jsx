import styled from 'styled-components';
import { Link } from "react-router-dom";

export const SearchCard = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Avatar = styled.div`
    position: relative;
    width: 200px;
    height: 200px;
`

export const CardBody = styled.div`
    border: 1px solid lightgray;
    border-radius: 8px;
    box-shadow: 0 3px 6px lightgray, 0 3px 6px;
    overflow: hidden;
`

export const CardTextHolder = styled.div`
    position: absolute;
    width: 100%;
    bottom: 0px;
    border-radius: inherit;
    overflow: hidden;
`
export const CardTextHolderInner = styled.div`
    margin: 8px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    position: relative;
`

export const CardTextBody = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const CardTextHeader = styled.h6`
    font-size: 16px;
    display: flex;
    margin-bottom: 4px;
    align-items: center;
`

export const CardTextContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
`

export const Age = styled.div`
    display: flex;
    margin-bottom: 4px;
    align-items: center;
`

export const PhotoCount = styled.div`
    display: inline-block;
    height: 15px;   
`

export const PhotoCountHolder = styled.div`
    margin-right: 4px;
`