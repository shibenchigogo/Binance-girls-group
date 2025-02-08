// components/TeamAvatar.js
import React from 'react';

const TeamAvatar = ({ seed }) => {
  // Generate random pastel background colors
  const bgColors = [
    '#FFB6C1', // pink
    '#FFD1DC', // lighter pink
    '#E6E6FA', // lavender
    '#B2DFDB', // mint
    '#FFECB3', // light yellow
  ];

  const randomBg = bgColors[Math.floor(seed.charCodeAt(0) % bgColors.length)];
  const randomHair = Math.floor(seed.charCodeAt(1) % 3);
  const randomSmile = Math.floor(seed.charCodeAt(2) % 3);
  const randomAccessory = Math.floor(seed.charCodeAt(3) % 3);

  return (
    <svg
      viewBox="0 0 100 100"
      className="w-full h-full rounded-full"
    >
      {/* Background Circle */}
      <defs>
        <radialGradient id={`grad-${seed}`}>
          <stop offset="0%" stopColor={randomBg} />
          <stop offset="100%" stopColor={randomBg} stopOpacity="0.7" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="50" fill={`url(#grad-${seed})`} />

      {/* Face Base */}
      <path
        d="M30 45 Q50 65 70 45"
        fill="none"
        stroke="#333"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Eyes - Different styles */}
      {randomSmile === 0 ? (
        <>
          <ellipse cx="40" cy="40" rx="3" ry="4" fill="#333" />
          <ellipse cx="60" cy="40" rx="3" ry="4" fill="#333" />
          <circle cx="41" cy="39" r="1" fill="white" />
          <circle cx="61" cy="39" r="1" fill="white" />
        </>
      ) : randomSmile === 1 ? (
        <>
          <path d="M37 40 Q40 44 43 40" fill="none" stroke="#333" strokeWidth="1.5" />
          <path d="M57 40 Q60 44 63 40" fill="none" stroke="#333" strokeWidth="1.5" />
        </>
      ) : (
        <>
          <path d="M37 38 Q40 42 43 38" fill="#333" />
          <path d="M57 38 Q60 42 63 38" fill="#333" />
        </>
      )}

      {/* Hair Styles */}
      {randomHair === 0 ? (
        // Long straight hair
        <path
          d="M20 30 Q50 25 80 30 L75 90 Q50 95 25 90 Z"
          fill="#333"
          opacity="0.9"
        />
      ) : randomHair === 1 ? (
        // Wavy medium hair
        <>
          <path
            d="M25 30 Q50 25 75 30 Q73 50 75 70 Q50 75 25 70 Q27 50 25 30"
            fill="#333"
            opacity="0.9"
          />
          <path
            d="M30 40 Q40 35 35 50 Q45 45 40 60"
            fill="none"
            stroke="#333"
            strokeWidth="2"
            opacity="0.6"
          />
          <path
            d="M70 40 Q60 35 65 50 Q55 45 60 60"
            fill="none"
            stroke="#333"
            strokeWidth="2"
            opacity="0.6"
          />
        </>
      ) : (
        // Short styled hair
        <>
          <path
            d="M30 30 Q50 25 70 30 Q68 45 70 60 Q50 65 30 60 Q32 45 30 30"
            fill="#333"
            opacity="0.9"
          />
          <path
            d="M35 35 Q45 30 40 45"
            fill="none"
            stroke="#333"
            strokeWidth="2"
            opacity="0.6"
          />
        </>
      )}

      {/* Blush */}
      <circle cx="30" cy="45" r="4" fill="#FFB6C1" opacity="0.5" />
      <circle cx="70" cy="45" r="4" fill="#FFB6C1" opacity="0.5" />

      {/* Accessories */}
      {randomAccessory === 0 && (
        // Hair bow
        <path
          d="M45 20 Q50 15 55 20 Q50 25 45 20"
          fill="#FF69B4"
          opacity="0.8"
        />
      )}
      {randomAccessory === 1 && (
        // Star accessory
        <path
          d="M50 15 L52 20 L57 20 L53 23 L55 28 L50 25 L45 28 L47 23 L43 20 L48 20 Z"
          fill="#FFD700"
          opacity="0.8"
        />
      )}
      {randomAccessory === 2 && (
        // Heart accessory
        <path
          d="M45 20 Q50 15 55 20 Q60 15 55 25 L50 30 L45 25 Q40 15 45 20"
          fill="#FF69B4"
          opacity="0.8"
        />
      )}
    </svg>
  );
};

export default TeamAvatar;