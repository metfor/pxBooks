import { ActiveLink } from "../ActiveLink";
import { Container, Content, MyA, NavLink } from "./styles";
import Link from "next/link";
import { MyImage } from "../Footer/styles";

export function Header() {
  return (
    <Container>
      <Content>
        <Link href="/">
          <MyImage
            src="/assets/logo.svg"
            alt="logo"
            width="149"
            height="43px"
          />
        </Link>
        <NavLink>
          <ActiveLink href="/books" activeClassName="active">
            <MyA>Books</MyA>
          </ActiveLink>
          <ActiveLink href="/newsletter" activeClassName="active">
            <MyA>Newsletter</MyA>
          </ActiveLink>
          <ActiveLink href="/address" activeClassName="active">
            <MyA>Address</MyA>
          </ActiveLink>
        </NavLink>
      </Content>
    </Container>
  );
}
