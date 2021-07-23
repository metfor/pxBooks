import styled from "styled-components";
export const Container= styled.header`
    height:51.1rem;
    background:#FCDB00 ;
    
`
export const Content= styled.div`

    font-family: 'Open Sans', sans-serif;
    max-width:1120px;
    margin:0 auto;
    padding: 1rem 1rem 12rem;
    
    img{
        margin-top: 2rem;
        margin-left: 2rem;
    }
    h1{
        font-weight: 700;
        margin-top: 8rem;
    }
    p{
        font-weight:400 ;
        font-size:1rem;
        margin-top:2rem;
    }
    .book{
        margin-left: 45rem;
        margin-top: -20rem;
    }
    `
export const Container2 = styled.div`
    height:58.1rem;
    background:white ;
    
`

export const Content2= styled.div`
    
    justify-content: center;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    max-width:1120px;
    margin:5rem auto;
    padding: 1rem 1rem 12rem;
    
   
    h1{
        
        font-weight: 700;
       
    }
    p{
        font-weight:400 ;
        font-size:1rem;
        
    }
    img{
        margin:4rem
    }
    Button{
        border:0;
        font-weight: 700;
        transition: filter 0.2s;
        &:hover{
            filter:brightness(0.8);
        }
    }
    `