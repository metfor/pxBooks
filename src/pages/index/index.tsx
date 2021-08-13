import { ActiveLink } from "../../components/ActiveLink"
import Button  from "../../components/Button"
import Image from "next/image"
import { Content, Container,Container2, Content2,H1 ,P} from "./stylesHome"
export default function Home() {
  return (
    <>
    <Container>
      <Content>
        <H1>Pixter Digital Books</H1>
        <P>Lorem ipsum dolor sit amet?<br/> consectetur elit, volutpat.</P>
        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus<br/> tristique bibendum. Donec rutrum sed sem quis venenatis. Proin viverra risus a eros <br/>volutpat tempor. In quis arcu et eros porta lobortis sit</P>
        <Image className="img" src="/assets/Vector3.svg"alt="mac" width="32" height="32"/>
        <Image className="img" src="/assets/Vector2.svg"alt="android"width="32" height="32"/>
        <Image className="img" src="/assets/Vector1.svg"alt="windows"width="32" height="32"/>
        <img className="book" src="/assets/header-book.svg"alt="book"/>
      
      </Content>
      
        
   

    </Container>
    <Container2>
      <Content2>
        <H1>Books</H1><br/>
        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed<br/> sem quis venenatis.</P>
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
