import React from "react";
import { useState, useDispatch } from "../reducer";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { DELETE } from "../actions";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ItemContainer = styled.div`
  width: 1000px;
  height: 500px;
  border-radius: 20px;
  border: 3px solid black;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.span`
  font-size: 25px;
`;

const Desc = styled.span`
  font-size: 20px;
`;

const Author = styled.span``;

const DeleteBtn = styled.button`
  width: 100px;
  height: 30px;
  margin-top: 50px;
`;

export default withRouter(({ match: { params }, history: { push } }) => {
  const state = useState();
  const dispatch = useDispatch();
  const result = state.find(item => item.id === params.id);
  const onClick = () => {
    dispatch({ type: DELETE, payLoad: params.id });
    push("/");
  };
  return (
    <Container>
      <ItemContainer>
        {result && (
          <>
            <Title>{result.title}</Title>
            <Desc>{result.Desc}</Desc>
            <Author>{result.author}</Author>
          </>
        )}
        <DeleteBtn onClick={onClick}>글삭제</DeleteBtn>
      </ItemContainer>
    </Container>
  );
});
