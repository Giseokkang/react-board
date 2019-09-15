import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 80%;
  height: 50px;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

const Num = styled.span`
  font-size: 15px;
`;

const Title = styled.span`
  font-size: 15px;
`;

const Author = styled.span`
  font-size: 15px;
`;

const Time = styled.span`
  font-size: 15px;
`;

export default ({ item, index }) => (
  <Container>
    <Num>{index + 1}</Num>
    <Title>
      <Link to={`/board/${item.id}`}>{item.title}</Link>
    </Title>
    <Author>{item.author}</Author>
    <Time>{item.time}</Time>
  </Container>
);
