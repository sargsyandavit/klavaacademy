import styled from "styled-components";

export const StylsHeader = styled.h1`
    color: ${props => props.color};
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

export const BlockEx = styled.div`
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    align-items: ${props => props.align || 'stretch'};
    justify-content: ${props => props.justify || 'row'};
    margin: ${({margin}) => margin || '0'};
`;

export const StylsConsole = styled.textarea`
    width: 80%;
    height: 50vh;
    margin: 0 auto;
    background-color: black;
    font-size: 24px;
    border: 1px dashed white;
    padding: 5px;
    resize: none;
    color: ${({color}) => color || 'red'};
    &:focus{
        outline: none;
        border: none;
        
    }
`;  

export const StyledBotton = styled.button`
    border: none;
    padding: 10px 15px;
    font-size: 18px;
     cursor: pointer;
     &:focus{
         outline: none;
     }
     
     align-self: ${props => props.align || 'stretch'};
`;

export const CopyButton = styled(StyledBotton)`
      color: green;
      background-color: grey;
`;

// https://www.youtube.com/watch?v=cNUTCKq-_-Y&t=724s

