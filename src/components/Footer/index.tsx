
import  Button  from "../Button/index"
import { FooterN,Content,MyInput, NetWork, Adress, P} from "./styles";

export function Footer(){
    return(
        <>
            <FooterN>
                <Content>
                    <h1>Keep in touch with us</h1>
                    <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem<br/> quis venenatis.</P>
                    <div>
                        <MyInput placeholder=" enter your email to update" /><Button width="6.75rem" height="1.875rem">submit</Button>
                    </div>
                    <NetWork>
                        <a><img src="/assets/fb.svg" alt="facebook"/></a>
                        <a><img src="/assets/tw.svg" alt="facebook"/></a>
                        <a><img src="/assets/g+.svg" alt="facebook"/></a>
                        <a><img src="/assets/px.svg" alt="facebook"/></a>
                    </NetWork>
                    <Adress>
                        <P>
                            Alameda Santos, 1970<br/>
                            6th floor - Jardim Paulista<br/>
                            São Paulo - SP<br/>
                            +55 11 3090 8500 <br/>   
                        </P>
                        <P>
                            London - UK<br/>
                            125 Kingsway<br/>
                            London WC2B 6NH <br/>
                        </P>
                        <P>
                            Lisbon - Portugal<br/>
                            Rua Rodrigues Faria, 103<br/>
                            4th floor<br/>
                            Lisbon - Portugal  <br/>
                        </P>
                        <P>
                        Curitiba – PR<br/>
                        R. Francisco Rocha, 198<br/>
                        Batel – Curitiba – PR   <br/>
                        </P>
                    </Adress>
                </Content>
            </FooterN>
        </>
    )
}