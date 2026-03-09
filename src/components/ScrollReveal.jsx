import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useInView } from '../hooks/useInView';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AnimatedWrapper = styled.div`
  opacity: 0;
  transform: translateY(30px);
  animation-name: ${({ $visible }) => ($visible ? fadeInUp : 'none')};
  animation-duration: ${({ $duration }) => $duration};
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  animation-delay: ${({ $delay }) => $delay};
`;

/**
 * 스크롤 시 뷰포트에 들어오면 fade-in-up 애니메이션 적용
 * @param {React.ReactNode} children
 * @param {string} $delay - CSS animation-delay (예: '0.2s')
 * @param {string} $duration - CSS animation-duration (예: '1s')
 */
const ScrollReveal = ({ children, $delay = '0s', $duration = '1s', ...rest }) => {
  const [ref, isInView] = useInView({ rootMargin: '0px 0px -60px 0px', threshold: 0.1 });

  return (
    <AnimatedWrapper
      ref={ref}
      $visible={isInView}
      $delay={$delay}
      $duration={$duration}
      {...rest}
    >
      {children}
    </AnimatedWrapper>
  );
};

export default ScrollReveal;
