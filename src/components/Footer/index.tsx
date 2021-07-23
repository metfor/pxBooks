
import  Button  from "../Button/index"
import { FooterN,Content,MyInput, NetWork, Adress} from "./styles";

export function Footer(){
    return(
        <>
            <FooterN>
                <Content>
                    <h1>Keep in touch with us</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem<br/> quis venenatis.</p>
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
                        <p>
                            Alameda Santos, 1970<br/>
                            6th floor - Jardim Paulista<br/>
                            São Paulo - SP<br/>
                            +55 11 3090 8500 <br/>   
                        </p>
                        <p>
                            London - UK<br/>
                            125 Kingsway<br/>
                            London WC2B 6NH <br/>
                        </p>
                        <p>
                            Lisbon - Portugal<br/>
                            Rua Rodrigues Faria, 103<br/>
                            4th floor<br/>
                            Lisbon - Portugal  <br/>
                        </p>
                        <p>
                        Curitiba – PR<br/>
                        R. Francisco Rocha, 198<br/>
                        Batel – Curitiba – PR   <br/>
                        </p>
                    </Adress>
                </Content>
            </FooterN>
        </>
    )
}