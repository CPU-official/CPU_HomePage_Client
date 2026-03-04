import React from 'react';
import styled from 'styled-components';

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  /* 첫 번째 문구가 화면 위로부터 352px 떨어진 곳에 위치 */
  padding-top: ${props => props.theme.vh(352)};
  text-align: center;
`;

const Title = styled.h1`
  font-family: 'Pretendard', sans-serif;
  font-weight: 300; /* Light */
  font-size: ${props => props.theme.vw(88)};
  line-height: 1.2;
  color: #FFFFFF; /* 배경이 어두우므로 흰색으로 설정 */
  margin: 0;
  white-space: pre-line;

  /* C, P, U만 SemiBold(600) 처리 */
  span {
    font-weight: 600;
  }
`;

const SubDescription = styled.p`
  font-family: 'Pretendard', sans-serif;
  font-weight: 400; /* Regular */
  font-size: ${props => props.theme.vw(30)};
  color: #FFFFFF;
  margin: 0;
  /* 두 문구 사이 간격 50px */
  margin-top: ${props => props.theme.vh(50)};
`;

const HeroContent = () => {
  return (
    <HeroWrapper className="centerContent">
      <Title>
        <span>C</span>reative <span>P</span>erformance{"\n"}
        with <span>U</span>.
      </Title>
      <SubDescription>
        작은 아이디어가, 세상에 남을 결과가 되기까지 시도하는 사람들
      </SubDescription>
    </HeroWrapper>
  );
};

export default HeroContent;