import styled from "styled-components"


const McButton = styled.button`
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

    //min-height: 40px;

    &:hover {
        border: #fff9 2px solid;
    }
    &:active {
        box-shadow: inset -2px -4px #0004, inset 2px 2px #FFF5;
    }
`

interface IMcTextInputProps {
    size?: "small" | "medium"
}

const McTextInput = styled.input<IMcTextInputProps>`
    border: 2px solid rgb(170,170 ,170);
    background-color: black;
    padding: 12px;
    font-family: 'minecraft','gal11';
    color: white;
    
    &:focus {
       outline: none;
    }
`
interface IBackgroundProps {
    darker? : boolean
}

const McBackground = styled.div<IBackgroundProps>`
    background-image: ${props => props.darker ? "url(\"/dirt-dark.png\")" : "url(\"/dirt-light.png\")"};
    background-repeat: repeat;
    ${props => props.darker ? "background-size : 64px" : ""};
    `
const McBackgroundLayout = styled.main`
    background-image: url("/dirt-dark.png");
    background-repeat: repeat;
    background-size: 64px;

    width: 100%;
    min-height: 100vh;

    padding-top: 60px;
    padding-bottom: 60px;

    overflow-y: auto;
    overflow-x: hidden;
`

const McNav = styled.nav`
    background-image: url("/dirt-light.png");
    background-repeat: repeat;

    width: 100%;
    min-height: 60px;
    align-items: center;
    display: flex;
    top : 0;
    position : fixed;
    z-index: 1;
`
const McFooter = styled.footer`
    background-image: url("/dirt-light.png");
    background-repeat: repeat;


    width: 100%;
    min-height: 60px;
    align-items: center;
    display: flex;
    bottom : 0;
    position : fixed;
    z-index: 1;
`

const McBlackContainer = styled.div`
    border: 2px solid rgb(170,170 ,170);
    background-color: black;
    padding: 4px;
    color: white;

`

export {
    McButton,
    McTextInput,
    McBackground,
    McFooter,
    McNav,
    McBlackContainer,
    McBackgroundLayout
}