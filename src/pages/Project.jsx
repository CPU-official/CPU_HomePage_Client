import { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

// 이미지 import (기존 유지)
import project_1 from '../assets/project/project_1.svg';
import project_2 from '../assets/project/project_2.svg';
import project_3 from '../assets/project/project_3.svg';
import project_4 from '../assets/project/project_4.svg';
import project_5 from '../assets/project/project_5.svg';
import project_6 from '../assets/project/project_6.svg';
import project_7 from '../assets/project/project_7.svg';
import project_8 from '../assets/project/project_8.svg';
import project_10 from '../assets/project/project_10.svg';
import project_11 from '../assets/project/project_11.svg';
import project_12 from '../assets/project/project_12.svg';
import project_13 from '../assets/project/project_13.svg';

// 1. 맨 앞 카드가 아래로 내려가며 사라지는 애니메이션
const fadeOutDown = keyframes`
    0% {
        transform: translate3d(0, 0px, 0px) scale(1);
        opacity: 1;
    }
    100% {
        transform: translate3d(0, 150px, 50px) scale(0.9);
        opacity: 0;
    }
`;

const ProjectContainer = styled.div`
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    position: relative;
    height: ${props => props.theme.vh(1100)};
    background-color: #04001B;; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start; 
    overflow: hidden;
    perspective: 1200px;
    font-family: 'NexonLv2Gothic';
`;

const TitleArea = styled.div`
    text-align: center;
    margin-top: ${props => props.theme.vh(148)};
    margin-bottom: ${props => props.theme.vh(40)};
    z-index: 20;
`;

const MainTitle = styled.h2`
    font-family: 'NexonLv2Gothic';
    font-weight: 700;
    font-size: ${props => props.theme.vw(50)};
    color: #19D0A3;
    margin-bottom: ${props => props.theme.vh(34)};
`;

const SubTitle = styled.p`
    font-family: 'NexonLv2Gothic';
    font-weight: 400;
    color: #CDCDCD;
    font-size: ${props => props.theme.vw(24)};
    line-height: 1.5;
    white-space: pre-line;
`;

const CardStack = styled.div`
    position: relative;
    width: ${props => props.theme.vw(512)};
    height: ${props => props.theme.vh(383)};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: ${props => props.theme.vh(150)};
`;

const Card = styled.div`
    position: absolute;
    width: ${props => props.theme.vw(512)};
    height: ${props => props.theme.vh(383)};
    background-image: url(${props => props.$img});
    background-size: cover;
    background-position: center;
    border-radius: ${props => props.theme.vw(20)};
    
    // 기본 전환 애니메이션: 뒷카드가 앞으로 올 때 부드럽게 이동
    transition: all 0.8s cubic-bezier(0.25, 1, 0.5, 1);
    
    // 위치 계산: offset 0이 맨 앞
    transform: ${props => `translate3d(0, ${props.$offset * -25}px, ${props.$offset * -100}px) scale(${1 - props.$offset * 0.05})`};
    
    // z-index: 숫자가 작을수록(앞에 있을수록) 높게 설정
    z-index: ${props => 20 - props.$offset};
    
    // 노출 설정: 3번째 카드까지만 보이게 처리
    opacity: ${props => {
        if (props.$isExiting) return 1; // 나가는 중에는 보이게 유지
        if (props.$offset === 0) return 1;
        if (props.$offset === 1) return 1;
        if (props.$offset === 2) return 1;
        return 0;
    }};
    
    filter: blur(${props => props.$offset * 0.3}px);

    // 나가는 애니메이션 적용
    animation: ${props => props.$isExiting ? fadeOutDown : 'none'} 0.8s ease-in forwards;

    &:hover {
        ${props => !props.$isExiting && props.$offset === 0 && `
            transform: translate3d(0, -30px, 100px) scale(1.05);
            cursor: pointer;
            transition: all 0.4s ease-out;
        `}
    }
`;

export default function Project() {
    const projectImages = [
        project_1, project_2, project_3,
        project_4, project_5, project_6, 
        project_7, project_8, 
        project_10, project_11, project_12, project_13
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [exitIdx, setExitIdx] = useState(null); // 현재 사라지는 중인 카드의 인덱스
    const timerRef = useRef(null);

    useEffect(() => {
        if (!isHovered) {
            timerRef.current = setInterval(() => {
                // 1. 현재 0번인 카드를 '나가는 상태'로 설정
                setExitIdx(currentIndex);

                // 2. 애니메이션이 절반 이상 진행되었을 때 다음 카드로 교체
                setTimeout(() => {
                    setCurrentIndex((prev) => (prev + 1) % projectImages.length);
                    setExitIdx(null);
                }, 750); // 애니메이션 총 시간(800ms)과 맞춤

            }, 1000);

            return () => clearInterval(timerRef.current);
        }
    }, [isHovered, currentIndex, projectImages.length]);

    return (
        <ProjectContainer>
            <TitleArea>
                <MainTitle>Project</MainTitle>
                <SubTitle>
                    {`CPU에서 기획부터 개발, 전시까지\n진행된 프로젝트 둘러보기`}
                </SubTitle>
            </TitleArea>

            <CardStack
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {projectImages.map((img, idx) => {
                    // 현재 인덱스를 기준으로 각 카드의 거리(offset) 계산
                    let offset = (idx - currentIndex + projectImages.length) % projectImages.length;
                    const isExiting = idx === exitIdx;

                    return (
                        <Card
                            key={idx}
                            $img={img}
                            $offset={offset}
                            $isExiting={isExiting}
                        />
                    );
                })}
            </CardStack>
        </ProjectContainer>
    );
}