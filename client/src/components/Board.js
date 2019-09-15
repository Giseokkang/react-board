import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { upload } from "../api";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const BoardForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  margin: 0 auto;
`;

const TitleInput = styled.input`
  width: 60%;
  height: 4%;
  margin-bottom: 50px;
`;

const DescInput = styled.textarea`
  width: 80%;
  height: 30%;
`;

const SubmitBtn = styled.button`
  width: 100px;
  height: 30px;
  margin-top: 50px;
`;

const Board = ({ history }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [author, setAuthor] = useState("");

  const onSubmit = async e => {
    e.preventDefault();
    const data = { title, desc, author };
    try {
      await upload({ ...data });
    } catch (e) {
      console.log(e);
    }
    history.push("/");
  };

  const onChange = e => {
    const {
      target: { value, className }
    } = e;

    if (className.includes("title")) {
      setTitle(value);
    } else if (className.includes("desc")) {
      setDesc(value);
    } else if (className.includes("author")) {
      setAuthor(value);
    }
  };

  return (
    <Container>
      <BoardForm onSubmit={onSubmit}>
        <TitleInput
          placeholder="Title"
          required
          onChange={onChange}
          className="title"
        ></TitleInput>
        <DescInput
          placeholder="Description"
          required
          onChange={onChange}
          className="desc"
        ></DescInput>
        <input
          placeholder="작성자"
          required
          onChange={onChange}
          className="author"
        ></input>
        <SubmitBtn>글작성</SubmitBtn>
      </BoardForm>
    </Container>
  );
};

export default withRouter(Board);
