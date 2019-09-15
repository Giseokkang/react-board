import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: #3498db;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Item = styled.li`
  width: 80px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid ${props => (props.current ? "white" : "transparent")};
  transition: border-bottom 0.3s;
  opacity: ${props => (props.current ? "1" : "0.8")};
  &:hover {
    opacity: 1;
    transform: scale(0.98);
  }
`;

const SLink = styled(Link)`
  font-size: 20px;
`;

export default withRouter(({ location: { pathname } }) => (
  <Container>
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/">Home</SLink>
      </Item>
      <Item current={pathname === "/board"}>
        <SLink to="/board">게시판</SLink>
      </Item>
    </List>
  </Container>
));
