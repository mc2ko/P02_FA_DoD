import React from "react";
import { styled } from "styled-components";

import { useNavigate } from "react-router-dom";

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

const Chapter01 = () => {
  const navigate = useNavigate();

  return (
    <div>
      챕터01
      <Button
        onClick={() => {
          navigate("/");
        }}
      >
        뒤로가기
      </Button>
    </div>
  );
};

export default Chapter01;
