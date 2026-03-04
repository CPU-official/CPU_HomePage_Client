import React from "react";
import styled, { keyframes } from "styled-components";
import banner1 from "../assets/gallery/glass.svg";
import banner2 from "../assets/gallery/CPU_Banner2.svg";
import banner3 from "../assets/gallery/CPU_Banner3.svg";
import banner4 from "../assets/gallery/CPU_Banner4.svg";
import banner5 from "../assets/gallery/CPU_Banner5.svg";
import banner6 from "../assets/gallery/CPU_Banner6.svg";
import banner7 from "../assets/gallery/CPU_Banner7.svg";
import banner8 from "../assets/gallery/CPU_Banner8.svg";
import banner9 from "../assets/gallery/CPU_Banner9.svg";

// 1. 애니메이션 정의
const scrollLeft = keyframes`
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
`;

const scrollRight = keyframes`
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0); }
`;

const GalleryContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    padding: ${props => props.theme.vh(80)} 0;
    overflow: hidden;
    background-color: #04001B;
    color: white;
    
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    height: ${props => props.theme.vh(1100)};
`;

// 2. 왼쪽 소개 문구 섹션 (반응형 수치 적용)
const IntroSection = styled.div`
    margin-left: ${props => props.theme.vw(182)};
    flex: 1;
    z-index: 10;
    font-family: 'NexonLv2Gothic', sans-serif;

    h3 {
        color: #19D0A3;
        font-size: ${props => props.theme.vw(24)};
        font-weight: bold;
        margin-bottom: ${props => props.theme.vh(10)};
    }
    h1 {
        font-size: ${props => props.theme.vw(52)};
        font-weight: 500;
        margin-bottom: ${props => props.theme.vh(30)};
    }
    p {
        font-size: ${props => props.theme.vw(20)};
        font-weight: 400;
        line-height: 1.8;
        opacity: 0.8;
    }
`;

// 3. 오른쪽 이미지 슬라이더 영역 (반응형 수치 적용)
const SliderWrapper = styled.div`
    width: ${props => props.theme.vw(1120)};
    display: flex;
    flex-direction: column;
    gap: ${props => props.theme.vh(24)};
    overflow: hidden;
    position: relative;
`;

const ImageRow = styled.div`
    display: flex;
    width: max-content;
    gap: ${props => props.theme.vw(24)};
    /* 애니메이션 속도를 30s -> 50s로 늦췄습니다 */
    animation: ${props => (props.direction === "left" ? scrollLeft : scrollRight)} 50s linear infinite;
`;

const ImageBlock = styled.img`
    width: ${props => props.theme.vw(767)};
    height: ${props => props.theme.vh(400)};
    object-fit: cover;
    border-radius: ${props => props.theme.vw(20)};
    background-color: #333;
    filter: blur(0.4px);
`;

export default function Gallery() {
    const topRowImages = [banner1, banner2, banner3, banner4];
    const bottomRowImages = [banner5, banner6, banner7, banner8, banner9];

    return (
        <GalleryContainer>
            <IntroSection>
                <h3>코딩프로젝트반</h3>
                <h1>CPU</h1>
                <p>
                    공모전, 프로젝트, IT쇼를 통해 함께 공부하고 나누며<br />
                    세상에 없어서는 안 될 중요한 사람으로 성장하는 동아리입니다.
                </p>
            </IntroSection>

            <SliderWrapper>
                <ImageRow direction="left">
                    {[...topRowImages, ...topRowImages].map((src, i) => (
                        <ImageBlock key={`top-${i}`} src={src} alt="CPU activity" />
                    ))}
                </ImageRow>

                <ImageRow direction="right">
                    {[...bottomRowImages, ...bottomRowImages].map((src, i) => (
                        <ImageBlock key={`bottom-${i}`} src={src} alt="CPU activity" />
                    ))}
                </ImageRow>
            </SliderWrapper>
        </GalleryContainer>
    );
}