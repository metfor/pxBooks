import { Content, Container,Container2, Footer } from "./stylesHome"
export default function Home() {
  return (
    <>
    <Container>
      <Content>
        <h1>Pixter Digital Books</h1>
        <h2>Lorem ipsum dolor sit amet?<br/> consectetur elit, volutpat.</h2>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus<br/> tristique bibendum. Donec rutrum sed sem quis venenatis. Proin viverra risus a eros <br/>volutpat tempor. In quis arcu et eros porta lobortis sit</h2>
        <img src="/assets/Vector3.svg"alt="mac"/>
        <img src="/assets/Vector2.svg"alt="android"/>
        <img src="/assets/Vector1.svg"alt="windows"/>
        <img className="book" src="/assets/header-book.svg"alt="book"/>
      </Content>
      
        
   

    </Container>
    <Container2>

    </Container2>
    <Footer>

    </Footer>
    </>
  )
}
