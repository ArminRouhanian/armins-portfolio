import React from 'react';

export default function FooterAnimation() {
  return (
    <div
      className="fdeco"
      aria-hidden="true"
    >
      <div
        style={{
          position: 'absolute',
          left: '161px',
          top: '22px',
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          background: '#A259FF'
        }}
      ></div>
      <div
        className="fr1"
        style={{
          position: 'absolute',
          left: '34px',
          top: '74px',
          width: '160px',
          height: '80px',
          borderRadius: '12px',
          background: '#F24E1E'
        }}
      ></div>
      <div
        className="fs1"
        style={{
          position: 'absolute',
          left: '182px',
          top: '132px',
          width: '64px',
          height: '64px',
          borderRadius: '12px',
          background: '#1ABCFE'
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          left: '67px',
          top: '140px',
          width: '90px',
          height: '90px',
          borderRadius: '50% 50% 0 50%',
          background: '#0ACF83'
        }}
      ></div>
      <div
        className="fsb fsb2"
        style={{
          left: '182px',
          top: '132px',
          width: '64px',
          height: '64px',
          position: 'absolute'
        }}
      >
        <i
          className="fhn"
          style={{
            left: '-6px',
            top: '-6px'
          }}
        ></i>
        <i
          className="fhn"
          style={{
            right: '-6px',
            top: '-6px'
          }}
        ></i>
        <i
          className="fhn"
          style={{
            left: '-6px',
            bottom: '-6px'
          }}
        ></i>
        <i
          className="fhn"
          style={{
            right: '-6px',
            bottom: '-6px'
          }}
        ></i>
      </div>
      <div
        className="fsb fsb1"
        style={{
          left: '34px',
          top: '74px',
          width: '160px',
          height: '80px'
        }}
      >
        <i
          className="fhn"
          style={{
            left: '-6px',
            top: '-6px'
          }}
        ></i>
        <i
          className="fhn"
          style={{
            right: '-6px',
            top: '-6px'
          }}
        ></i>
        <i
          className="fhn"
          style={{
            left: '-6px',
            bottom: '-6px'
          }}
        ></i>
        <i
          className="fhn"
          style={{
            right: '-6px',
            bottom: '-6px'
          }}
        ></i>
      </div>
      <div
        className="fcu"
        style={{
          position: 'absolute',
          zIndex: '2'
        }}
      >
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
        <span
          style={{
            position: 'absolute',
            left: '12px',
            top: '16px',
            whiteSpace: 'nowrap',
            background: '#8A3FF0',
            color: '#fff',
            fontSize: '12px',
            fontWeight: '700',
            padding: '4px 10px',
            borderRadius: '99px'
          }}
        >
          Armin Rouhanian
        </span>
      </div>
    </div>
  );
}
