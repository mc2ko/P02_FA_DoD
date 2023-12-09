import React from "react";
import useInput from "../../hook/useInput";
import styled from "styled-components";

import img_popup from "./../asset/img/ui/popup.png";
import img_popupLeft from "./../asset/img/ui/popup_left.png";
import img_popupRight from "./../asset/img/ui/popup_right.png";
import img_titlebar from "./../asset/img/ui/titlebar.png";
import img_btnGreen from "./../asset/img/ui/standard_btn_green.png";
import img_btnRed from "./../asset/img/ui/standard_btn_red.png";
import btn_arrow from "./../asset/img/ui/btn_arrow.png";

import img_cha01 from "./../asset/img/character/resource_apeach.png";
import img_cha02 from "./../asset/img/character/resource_tube.png";
import img_cha03 from "./../asset/img/character/resource_muzi.png";
import img_cha04 from "./../asset/img/character/resource_frodo.png";
import img_cha05 from "./../asset/img/character/resource_neo.png";
import img_cha06 from "./../asset/img/character/resource_jayG.png";
import img_cha07 from "./../asset/img/character/resource_ryan.png";

import "./../keyframes/KeyframesAnimation.css";

const CreatePopup = styled.div`
  position: absolute;
  z-index: 300;
  width: 100%;
  height: 53%;
  background-color: rgba(0, 0, 0, 0.8);
`;

// 스크롤 연출
const BGscroll = styled.div`
  position: absolute;
  z-index: 300;
  left: 50%;
  top: 50%;
  width: 82%;
  height: 94%;

  transform: translate(-50%, -50%);
`;

const BGscrollArea = styled.div`
  overflow: hidden;
  position: absolute;
  z-index: 300;
  left: 50%;
  top: 50%;
  width: 90%;
  height: 90%;
  transform: translate(-50%, -50%);
  background-size: contain;

  animation: scrollANI 0.3s ease-in 0s normal forwards;
`;

const BGscrollImage = styled.p`
  position: absolute;
  z-index: 300;
  left: 50%;
  top: 50%;
  width: 80vw;
  height: 100%;
  transform: translate(-50%, -50%);
  background-image: url(${img_popup});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 70vw 96%;
`;

const Titlebar = styled.div`
  position: absolute;
  z-index: 310;
  left: 50%;
  top: 7%;
  width: 28vw;
  height: 10.8%;
  transform: translate(-50%, 0);
  color: #fff;
  font-size: 2.2vw;
  font-weight: 600;
  background-image: url(${img_titlebar});
  background-size: contain;
  background-repeat: no-repeat;
`;

const TitleName = styled.p`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -56%);
`;

const BGscrollLeft = styled.p`
  position: absolute;
  z-index: 320;
  left: 40%;
  width: 8.9%;
  height: 100%;
  background-image: url(${img_popupLeft});
  background-position: center 0;
  background-size: 100%;
  background-repeat: no-repeat;

  animation: scrollLeftANI 0.3s ease-in 0s normal forwards;
`;

const BGscrollRight = styled.p`
  position: absolute;
  z-index: 320;
  right: 0%;
  width: 8.9%;
  height: 100%;
  background-image: url(${img_popupRight});
  background-position: center 0;
  background-size: 100%;
  background-repeat: no-repeat;

  animation: scrollRightANI 0.3s ease-in 0s normal forwards;
`;

// 캐릭터 선택
const SelectCharacter = styled.div`
  position: absolute;
  z-index: 310;
  left: 50%;
  top: 20%;
  transform: translate(-50%, 0);
  width: 56vw;
  height: 56%;
  /* background-color: pink; */
`;

const BgcCharacter = styled.p`
  position: absolute;
  width: 19vw;
  height: 100%;
  background-color: #fff6ad;
  border-radius: 1vw;
`;

const ImageCharacter = styled.p`
  position: absolute;
  left: 1.8vw;
  top: 5%;
  width: 15.5vw;
  height: 90%;
  background-image: url(${img_cha01});
  background-position: 0 center;
  background-size: contain;
  background-repeat: no-repeat;
`;

const ChaForm = styled.div`
  position: absolute;
  left: 21vw;
  top: 1%;
`;

const Cha01 = styled(ChaForm)`
  /* display: none; */
`;
const Cha02 = styled(ChaForm)`
  display: none;
`;
const Cha03 = styled(ChaForm)`
  display: none;
`;
const Cha04 = styled(ChaForm)`
  display: none;
`;
const Cha05 = styled(ChaForm)`
  display: none;
`;
const Cha06 = styled(ChaForm)`
  display: none;
`;
const Cha07 = styled(ChaForm)`
  display: none;
`;

const ChaName = styled.p`
  color: #602a09;
  font-weight: bold;
  font-size: 3.2vw;
`;

const ChaSpecial = styled.p`
  color: #fff;
  font-weight: 600;
  font-size: 1.8vw;

  > span {
    color: #c03611;
  }
`;

const ChaInformation = styled.p`
  margin-top: 1.4vw;
  color: #602a09;
  font-weight: 600;
  font-size: 1.7vw;
  line-height: 2vw;
`;

const ChaArrowLeft = styled.p`
  position: absolute;
  left: -5.4vw;
  top: 42%;
  width: 4.8vw;
  height: 28.3%;
  background-image: url(${btn_arrow});
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const ChaArrowRight = styled.p`
  position: absolute;
  right: -5.8vw;
  top: 42%;
  width: 4.8vw;
  height: 28.3%;
  transform: scaleX(-100%);
  background-image: url(${btn_arrow});
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
`;

// 캐릭터 스텟설정
const List = styled.ul`
  display: none;
  position: absolute;
  z-index: 310;
  left: 50%;
  top: 20%;
  width: 60vw;
  height: 60%;
  transform: translate(-30vw, 0);
`;

const ListItem = styled.li`
  position: relative;
  z-index: 320;
  font-weight: 800;
  font-size: 2vw;

  &.name {
    font-size: 20px;
  }
`;

// 버튼
const Button = styled.button`
  position: absolute;
  z-index: 330;
  width: 20vw;
  font-size: 2.2vw;
  font-weight: 800;
  background-color: initial;
  background-size: contain;
  background-repeat: no-repeat;
  border: none;
  outline: none;
  cursor: pointer;

  &.btnNext {
    width: 15vw;
    height: 13.8%;
    left: 50%;
    bottom: 7.4%;
    transform: translate(1vw, 0);
    color: #1f5104;
    background-image: url(${img_btnGreen});
  }

  &.btnCancel {
    width: 15vw;
    height: 13.8%;
    left: 50%;
    bottom: 7.4%;
    transform: translate(-16vw, 0);
    color: #5e1100;
    background-image: url(${img_btnRed});
  }
`;

const Create = ({ createPopup, popup }) => {
  const [inputs, changeFn, emptyFn, $name] = useInput({
    name: "", //캐릭터명
    str: "", //힘
    dex: "", //민첩
    int: "", //지능
    con: "", //체질
    wis: "", //지혜
    hp: "", //체력
  });

  const { name } = inputs;

  let ChaCode = 0;
  const $ChaTab = document.getElementsByClassName(".ChaTab");
  console.log($ChaTab);

  return (
    <>
      {popup ? (
        <CreatePopup>
          <BGscroll>
            <BGscrollArea>
              <BGscrollImage />
              <Titlebar>
                <TitleName>캐릭터 생성</TitleName>
              </Titlebar>
              <SelectCharacter>
                <BgcCharacter />
                <ImageCharacter />
                <Cha01 className="ChaTab">
                  <ChaName>어피치(APEACH)</ChaName>
                  <ChaSpecial>
                    민첩성, 체력, 도검, 활 <span>특화</span>
                  </ChaSpecial>
                  <ChaInformation>
                    유전자변이로 자옹동주가 된 것을 알고
                    <br />
                    복숭아 나무에서 탈출한 악동복숭아 어피치.
                    <br />
                    섹시한 뒷태로 사람들을 매혹 시키지만
                    <br />
                    성격이 매우 급하고 과격합니다.
                  </ChaInformation>
                </Cha01>
                <Cha02 className="ChaTab">
                  <ChaName>튜브(TUBE)</ChaName>
                  <ChaSpecial>
                    힘, 지구력, 도끼, 둔기 <span>특화</span>
                  </ChaSpecial>
                  <ChaInformation>
                    겁 많고 마음약한 오리튜브.
                    <br />
                    극도의 공포를 느끼면 미친오리로 변신합니다.
                    <br />
                    작은 발이 컴플렉스여서 큰 오리발을 착용합니다.
                    <br />
                    미운오리새끼가 먼 친척입니다.
                  </ChaInformation>
                </Cha02>
                <Cha03 className="ChaTab">
                  <ChaName>무지&콘(MUZI&CON)</ChaName>
                  <ChaSpecial>
                    지능, 정신력, 도검, 지팡이 <span>특화</span>
                  </ChaSpecial>
                  <ChaInformation>
                    호기심 많은 장난꾸러기 무지!
                    <br />
                    토끼옷을 입고 있지만 정체는 단무지.
                    <br />
                    토끼옷을 벗으면 부끄러움을 많이 탑니다.
                    <br />
                    <br />
                    단무지를 키워 무지를 만든 말 없는 정체불명의 악어 콘! 이제는
                    복숭아를 키우고 싶어 어피치를 찾아 다닙니다.
                  </ChaInformation>
                </Cha03>
                <Cha04 className="ChaTab">
                  <ChaName>프로도(FRODO)</ChaName>
                  <ChaSpecial>
                    힘, 체력, 도검, 도끼 <span>특화</span>
                  </ChaSpecial>
                  <ChaInformation>
                    부자집 도시개 프로도.
                    <br />
                    잡종이라 태생에 대한 컴플렉스가 많습니다.
                  </ChaInformation>
                </Cha04>
                <Cha05 className="ChaTab">
                  <ChaName>네오(NEO)</ChaName>
                  <ChaSpecial>
                    민첩성, 지능, 지팡이, 활 <span>특화</span>
                  </ChaSpecial>
                  <ChaInformation>
                    새침하고 사나운 고양이 네오.
                    <br />
                    나 이외에는 중요한게 없습니다.
                    <br />
                    자신감의 근원은 단발머리 가발에서 나옵니다.
                  </ChaInformation>
                </Cha05>
                <Cha06 className="ChaTab">
                  <ChaName>제이지(JAY-G)</ChaName>
                  <ChaSpecial>
                    민첩성, 지능, 지팡이, 활 <span>특화</span>
                  </ChaSpecial>
                  <ChaInformation>
                    땅속나라 고향에 대한 향수병이 있는 비밀요원 제이지!
                    <br />
                    사명의식이 투철하고, 냉철해 보이고 싶으나 어리버리 합니다.
                    <br />
                    겉모습과 달리 알고보면 외로움을 많이 타는 여린 감수성의
                    소유자 입니다.
                    <br />
                    힙합가수 JAY-Z의 열혈팬입니다.
                  </ChaInformation>
                </Cha06>
                <Cha07 className="ChaTab">
                  <ChaName>라이언(RYAN)</ChaName>
                  <ChaSpecial>
                    지구력, 체력, 둔기, 창 <span>특화</span>
                  </ChaSpecial>
                  <ChaInformation>
                    믿음직스러운 카카오프렌즈의 조언자 라이언!
                    <br />
                    갈기가 없어 컴플렉스가 많은 수사자.
                    <br />
                    항상 무뚝뚝한 표정을 짓고 있지만
                    <br />
                    소녀처럼 여리고, 섬세한 감성을 가지고 있습니다.
                    <br />
                    꼬리가 길면 잡히기 때문에, 꼬리가 짧습니다.
                  </ChaInformation>
                </Cha07>
                <ChaArrowLeft onClick={() => {}}></ChaArrowLeft>
                <ChaArrowRight></ChaArrowRight>
              </SelectCharacter>
              <List>
                <ListItem>
                  <label htmlFor="name">캐릭터명 : </label>
                  <input
                    onChange={changeFn}
                    id="name"
                    autoComplete="off"
                    type="text"
                    value={name}
                    ref={$name}
                  />
                </ListItem>
                <ListItem>힘 : {inputs.str}</ListItem>
                <ListItem>민첩 : {inputs.str}</ListItem>
                <ListItem>지능 : {inputs.str}</ListItem>
                <ListItem>체질 : {inputs.str}</ListItem>
                <ListItem>지혜 : {inputs.str}</ListItem>
                <ListItem>체력 : {inputs.str}</ListItem>

                <ListItem>
                  <Button>주사위1</Button>
                  <Button>주사위2</Button>
                </ListItem>
              </List>
              <Button className="btnNext">다음</Button>
              <Button className="btnCancel" onClick={createPopup}>
                취소
              </Button>
            </BGscrollArea>
            <BGscrollLeft />
            <BGscrollRight />
          </BGscroll>
        </CreatePopup>
      ) : null}
    </>
  );
};

export default Create;
