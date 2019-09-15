import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BoardItem from "./BoardItem";
import uuid from "uuid";
import { getPosts } from "../api";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ItemContainer = styled.div`
  width: 70%;
  height: 80%;
  border-radius: 20px;
  box-shadow: 0px 1px 3px 2px rgba(0, 0, 0, 0.2);
`;

const Classification = styled.span`
  width: 80%;
  height: 50px;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  border-bottom: 1px solid black;
`;

const Num = styled.span`
  font-size: 20px;
`;

const Title = styled.span`
  font-size: 20px;
`;

const Author = styled.span`
  font-size: 20px;
`;

const Time = styled.span`
  font-size: 20px;
`;

const Home = () => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);

  const getBoard = async () => {
    try {
      const { data } = await getPosts();
      setState(data);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getBoard();
  }, []);

  return (
    <Container>
      <ItemContainer>
        <Classification>
          <Num>id</Num>
          <Title>제목</Title>
          <Author>작성자</Author>
          <Time>작성 시간</Time>
        </Classification>
        {loading ? (
          <span>loading...</span>
        ) : (
          state &&
          state.length > 0 &&
          state.map((item, index) => (
            <BoardItem key={uuid()} item={item} index={index}></BoardItem>
          ))
        )}
      </ItemContainer>
    </Container>
  );
};

export default Home;
