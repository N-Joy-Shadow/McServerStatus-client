import styled from "styled-components"

interface IMcLengthProps {
    width? : string,
    height? : string  
}

const McButton = styled.button<IMcLengthProps>`
    padding-bottom: 0.4em;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #DDD;
    text-shadow: 2px 2px #000a;
    box-shadow: inset -2px -4px #0006, inset 2px 2px #fff5;
    background: #999 url('/bar.png') center/cover;
    image-rendering: pixelated;
    border: 2px solid #000;
    font-family: 'minecraft','gal11';
    user-select: none;

    width : ${(props) => props.width ?? "auto"};
    height: ${(props) => props.height ?? "auto"};
    min-height: 40px;

    &:hover {
        border: #fff9 2px solid;
    }
    &:active {
        box-shadow: inset -2px -4px #0004, inset 2px 2px #FFF5;
    }
`

const McTextInput = styled.input<IMcLengthProps>`
    border: 2px solid rgb(170,170 ,170);
    background-color: black;
    padding: 4px;
    padding: 12px;
    font-family: 'minecraft','gal11';
    color: white;

    width : ${(props) => props.width ?? "calc(auto-4px)"};
    height: ${(props) => props.height ?? "calc(auto-4px)"};
    
    &:focus {
       outline: none;
    }
`
export {
    McButton,McTextInput
}