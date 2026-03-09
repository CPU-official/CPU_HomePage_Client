import React from 'react';
import './MainEnd.css';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

export default function Hero() {
  const navigate = useNavigate();
  return (
    <div className="hero">
      <div className="hero-overlay" />
      <ScrollReveal $duration="1.1s">
        <div className="hero-content">
          <h1 className="hero-title">CPU</h1>
          <p className="hero-subtitle">부원을 모집합니다</p>
          {/* <button className="hero-btn" onClick={() => navigate('/apply')}>
            지원하기
          </button> */}
        </div>
      </ScrollReveal>
    </div>
  );
}