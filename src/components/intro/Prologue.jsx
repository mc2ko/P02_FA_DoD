import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const Movie = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  display: block;
  position: fixed;
  right: 40px;
  bottom: 20px;

  width: 100px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: yellow;
  cursor: pointer;
`;

const Prologue = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Movie>프롤로그</Movie>
      <Button
        onClick={() => {
          navigate("/");
        }}
      >
        Skip...
      </Button>
    </div>
  );
};

export default Prologue;
