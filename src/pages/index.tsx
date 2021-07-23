import { ActiveLink } from "../components/ActiveLink"
import Button  from "../components/Button"

import { Content, Container,Container2, Content2 } from "./stylesHome"
export default function Home() {
  return (
    <>
    <Container>
      <Content>
        <h1>Pixter Digital Books</h1>
        <p>Lorem ipsum dolor sit amet?<br/> consectetur elit, volutpat.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus<br/> tristique bibendum. Donec rutrum sed sem quis venenatis. Proin viverra risus a eros <br/>volutpat tempor. In quis arcu et eros porta lobortis sit</p>
        <img src="/assets/Vector3.svg"alt="mac"/>
        <img src="/assets/Vector2.svg"alt="android"/>
        <img src="/assets/Vector1.svg"alt="windows"/>
        <img className="book" src="/assets/header-book.svg"alt="book"/>
      
      </Content>
      
        
   

    </Container>
    <Container2>
      <Content2>
        <h1>Books</h1><br/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed<br/> sem quis venenatis.</p>
        <img src="/assets/l1.svg" alt="livro1"/>
        <img src="/assets/l2.svg" alt="livro1"/>
        <img src="/assets/l3.svg" alt="livro1"/>
        <img src="/assets/l4.svg" alt="livro1"/>
        <img src="/assets/l1.svg" alt="livro1"/>
        <img src="/assets/l2.svg" alt="livro1"/>
        <img src="/assets/l3.svg" alt="livro1"/>
        <img src="/assets/l4.svg" alt="livro1"/>
        <ActiveLink href="/books"><Button>SEE MORE</Button></ActiveLink>
      </Content2>
    </Container2>
    
      
    </>
  )
}
