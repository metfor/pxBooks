import {createGlobalStyle}from "styled-components"
export const GlobalStyle= createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;

}
a{
    text-decoration: none;
    color:black;

}

p,a,h1,h2{
    font-family: 'Open Sans', sans-serif;

}

html{
    @media(min-width:1080px){
        font-size:93.75%;
    }
    @media(min-width:720px){
        font-size:87.5%;
    }
}
.react-modal-overlay{
    background: rgba(0,0,0, 0.5);
    position:fixed;
    top:0;
    bottom:0;
    right: 0;
    left: 0;
    display:flex;
    align-items: center;
    justify-content: center;
}
.react-modal-content{
    width :100%;
    max-width:900px;
    height: 22rem;
    background:white;
    padding:3rem;
    position: relative;
    border-radius: 0.24rem;
    button{
    position:absolute;
    right:1.5rem;
    top:0.5rem;
    border:0;
    background:transparent;
    transition: filter 0.2s;
    &:hover{
        filter:brightness(0.9);
    }
    }
    img{
        margin-top: -1.5rem;
        position: absolute;
        margin-left: -2rem;
    }
    h1{
        font-size: 1.5rem;
        position: absolute;
        max-width: 700px;
        margin-left: 7rem;
        margin-top: -1.5rem;
        font-weight:700;
    }
    h2{
        position: absolute;
        margin-top: 11rem;
        margin-left: -1.8rem;
    }
    p{
        font-size: 0.9rem;
        font-weight: 400;
        max-width: 700px;
        margin-left:7rem;
        position: absolute;
        margin-top:2.5rem ;
    }
    
}

`