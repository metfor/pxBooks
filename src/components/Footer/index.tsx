import Button from "../Button/index";
import { FooterN, Content, MyInput, NetWork, Adress, Paragraph,Title ,Newss,MyImage,BoxImage} from "./styles";

export function Footer() {
  return (
    <>
      <FooterN>
        <Content>
          <Title>Keep in touch with us</Title>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            vitae eros eget tellus tristique bibendum. Donec rutrum sed sem
            <br /> quis venenatis.
          </Paragraph>
          <Newss>
            <MyInput placeholder=" enter your email to update" />
            <Button width="6.75rem" height="1.875rem">
              submit
            </Button>
          </Newss>
          <NetWork>
            <BoxImage>
              <MyImage src="/assets/fb.svg" alt="facebook" width="43.75px" height="43.75px"/>
            </BoxImage>
            <BoxImage>
              <MyImage src="/assets/tw.svg" alt="facebook" width="43.75px" height="43.75px"/>
            </BoxImage>
            <BoxImage>
              <MyImage src="/assets/g+.svg" alt="facebook" width="43.75px" height="43.75px"/>
            </BoxImage>
            <BoxImage>
              <MyImage src="/assets/px.svg" alt="facebook"width="43.75px" height="43.75px"/>
            </BoxImage>
          </NetWork>
          <Adress>
            <Paragraph>
              Alameda Santos, 1970
              <br />
              6th floor - Jardim Paulista
              <br />
              São Paulo - SP
              <br />
              +55 11 3090 8500 <br />
            </Paragraph>
            <Paragraph>
              London - UK
              <br />
              125 Kingsway
              <br />
              London WC2B 6NH <br />
            </Paragraph>
            <Paragraph>
              Lisbon - Portugal
              <br />
              Rua Rodrigues Faria, 103
              <br />
              4th floor
              <br />
              Lisbon - Portugal <br />
            </Paragraph>
            <Paragraph>
              Curitiba – PR
              <br />
              R. Francisco Rocha, 198
              <br />
              Batel – Curitiba – PR <br />
            </Paragraph>
          </Adress>
        </Content>
      </FooterN>
    </>
  );
}
