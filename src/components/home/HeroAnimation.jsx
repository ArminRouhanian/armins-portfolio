import React from 'react';

export default function HeroAnimation() {
  return (
    <div
      className="sh"
      aria-hidden="true"
      style={{
        right: '61px',
        bottom: '170px',
        position: 'absolute',
        height: '281px',
        width: '346px'
      }}
    >
      <div
        style={{
          left: '166px',
          top: '10px',
          width: '147px',
          height: '143px',
          borderRadius: '50%',
          background: '#A259FF',
          position: 'absolute'
        }}
      ></div>
      <div
        className="sb sb1"
        style={{
          left: '44px',
          top: '79px',
          width: '165px',
          height: '115px'
        }}
      >
        <i
          className="hn"
          style={{
            left: '-6px',
            top: '-6px'
          }}
        ></i>
        <i
          className="hn"
          style={{
            right: '-6px',
            top: '-6px'
          }}
        ></i>
        <i
          className="hn"
          style={{
            left: '-6px',
            bottom: '-6px'
          }}
        ></i>
        <i
          className="hn"
          style={{
            right: '-6px',
            bottom: '-6px'
          }}
        ></i>
      </div>
      <div
        className="sb sb2"
        style={{
          left: '166px',
          top: '133px',
          width: '167px',
          height: '131px'
        }}
      >
        <i
          className="hn"
          style={{
            left: '-6px',
            top: '-6px'
          }}
        ></i>
        <i
          className="hn"
          style={{
            right: '-6px',
            top: '-6px'
          }}
        ></i>
        <i
          className="hn"
          style={{
            left: '-6px',
            bottom: '-6px'
          }}
        ></i>
        <i
          className="hn"
          style={{
            right: '-6px',
            bottom: '-6px'
          }}
        ></i>
      </div>
      <div
        className="sb sb3"
        style={{
          left: '15px',
          top: '172px',
          width: '93px',
          height: '88px'
        }}
      >
        <i
          className="hn"
          style={{
            left: '-6px',
            top: '-6px'
          }}
        ></i>
        <i
          className="hn"
          style={{
            right: '-6px',
            top: '-6px'
          }}
        ></i>
        <i
          className="hn"
          style={{
            left: '-6px',
            bottom: '-6px'
          }}
        ></i>
        <i
          className="hn"
          style={{
            right: '-6px',
            bottom: '-6px'
          }}
        ></i>
      </div>
      <div className="ac">
        <svg
          width="16"
          height="18"
          viewBox="0 0 16 18"
        >
          <path
            d="M1 1 L1 15.5 L5 12 L11.5 12 Z"
            fill="#8A3FF0"
            stroke="#fff"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
        <span>
          Armin Rouhanian
        </span>
      </div>
      <div
        className="rc"
        style={{
          left: '44px',
          top: '79px',
          width: '165px',
          height: '115px',
          background: '#F24E1E',
          borderRadius: '8px',
          position: 'absolute'
        }}
      ></div>
      <div
        className="sq"
        style={{
          left: '15px',
          top: '172px',
          width: '93px',
          height: '88px',
          borderRadius: '20px',
          background: '#1ABCFE',
          position: 'absolute'
        }}
      ></div>
      <div
        className="ar"
        style={{
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          width: '167px',
          height: '131px',
          backgroundColor: '#0acf83',
          borderRadius: '8px',
          position: 'absolute',
          left: '166px',
          top: '133px',
          borderTopLeftRadius: '100px',
          borderTopRightRadius: '100px'
        }}
      ></div>
    </div>
  );
}
