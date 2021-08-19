import { ActiveLink } from "../ActiveLink";
import { Container, Content, NavLink } from "./styles";
import Link from "next/link";

export function Header() {
    return (
        <Container>
            <Content>
                <Link href="/">
                    <img src="/assets/logo.svg" alt="logo" />
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
