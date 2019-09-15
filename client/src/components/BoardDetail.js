import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { postDetail, deletePost } from "../api";

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
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(true);

  const getPostDetail = async () => {
    try {
      const { data } = await postDetail(params.id);
      setPost(data);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getPostDetail();
  }, []);

  const handleDeletePost = async e => {
    e.preventDefault();
    try {
      await deletePost(params.id);
    } catch (e) {
      console.log(e);
    }
    push("/");
  };

  return (
    <Container>
      <ItemContainer>
        {loading ? (
          <span>Loading...</span>
        ) : (
          post && (
            <>
              <Title>{post.title}</Title>
              <Desc>{post.Desc}</Desc>
              <Author>{post.author}</Author>
            </>
          )
        )}
        <DeleteBtn onClick={handleDeletePost}>글삭제</DeleteBtn>
      </ItemContainer>
    </Container>
  );
});
