import api from "../services/api"
import Modal from "react-modal";
import React, { useEffect, useState } from "react";
import { BookBox, Container, Content, SeachForm } from "./styles";
import Button from "../../components/Button";
export default function Home() {
  const [ isOpen, setIsOpen]=useState(false);
  
  function handleOpenNewModal(){
    setIsOpen(true)
    console.log(isOpen)
    
  }
  function handleCloseModal(){
    setIsOpen(false)
  }
  const [books, setBooks]= useState({items:[],})
  useEffect(()=>{
    api
      .get("/items")
      .then((response)=>{
        setBooks(response.data)
        return response.data
      })
      .catch((err)=>{
        console.error("ops"+err);
      });
  },[])
 
  return (
    <Container>
      <Content>
        <SeachForm>
          <h1>Filter</h1>
          
          <input placeholder="  palavra-passe"/>
          <input placeholder="  título"/>
          <input placeholder="  ano"/>
          <input placeholder="  autor"/>
          <input placeholder="  categoria"/>
          <Button color="black" width="15rem" 
    
          height= "1.875rem">Submit</Button>
        </SeachForm>
        <BookBox>
      {books.items.map(book=>{
        return(
          
        <><img onClick={handleOpenNewModal} key={book.id} id={book.id} src={book.volumeInfo.imageLinks?.thumbnail || "./assets/404.jpg"} />
        
        </>
        )
        
        
          
      })}
      
        
      
    <Modal isOpen={isOpen}><button onClick={handleCloseModal} >x</button></Modal>
      </BookBox>
    
      </Content>
      
    </Container>   
    
  )
}
/* */