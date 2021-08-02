import { FormEvent, useContext, useState } from "react";
import Button from "../../components/Button";
import {Container ,Content} from "./styles";
import{AuthContext}from"../services/contexts/AuthContext";
export default function Newsletter(){
    const [user,setUser]=useState("")
    const nameApp="Pxbooks"
    const{signIn}=useContext(AuthContext)
    async function handleSubmit(event:FormEvent){
        event.preventDefault();
        const data ={
            user,
            nameApp,
        }
        await signIn(data)
    }
    return(
    <>
    <Container>
        <Content onSubmit={handleSubmit}>
            
            <input type="text" value={user} onChange={e=>setUser(e.target.value)} placeholder="Nome"/>
            <Button type="submit" width="15rem">Enviar</Button>
        </Content>
    </Container>
   
    </>
)
}