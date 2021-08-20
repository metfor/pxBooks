import { ActiveLink } from "../ActiveLink";
import { Container, Content, NavLink } from "./styles";
import Link from "next/link";
import { MyImage } from "../Footer/styles";

export function Header() {
    return (
        <Container>
            <Content>
                <Link href="/">
                    <MyImage src="/assets/logo.svg" alt="logo" width="149" height="43px"/>
                </Link>
                <NavLink>
                    <ActiveLink href="/books" activeClassName="active">
                        <a>Books</a>
                    </ActiveLink>
                    <ActiveLink href="/newsletter" activeClassName="active">
                        <a>Newsletter</a>
                    </ActiveLink>
                    <ActiveLink href="/address" activeClassName="active">
                        <a>Address</a>
                    </ActiveLink>
                </NavLink>
            </Content>
        </Container>
    );
}
