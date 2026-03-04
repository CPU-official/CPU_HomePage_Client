import React from 'react';
import './MainEnd.css';
import { useNavigate } from 'react-router-dom';



export default function Hero() {
  const navigate = useNavigate();
  return (
    <div className="hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="hero-title">CPU</h1>
        <p className="hero-subtitle">부원을 모집합니다</p>
        {/* <button className="hero-btn" onClick={() => navigate('/apply')}>
          지원하기
        </button> */}
      </div>
    </div>
  );
}