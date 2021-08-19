import styled from "styled-components";
export const Container = styled.header`
  height: 7.8rem;
  background: #fcdb00;
`;
export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 1rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 9.6rem;
    height: 2.6rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;
export const NavLink = styled.nav`
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  margin-left: 5rem;
  height: 5rem;
  a {
    display: inline-block;
    position: relative;
    padding: 0 0.5rem;
    height: 6.5rem;
    line-height: 5rem;

    transition: color 0.2s;

    & + a {
      margin-left: 2rem;
    }
    &:hover {
      color: black;
    }
    &.active {
      color: black;
      font-weight: bold;
    }
    &.active::after {
      content: "";
      height: 3px;
      border-radius: 3px 3px 0 0;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      background: black;
    }
  }
`;
