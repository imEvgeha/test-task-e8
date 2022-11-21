import React from "react";

export default function ModeIcon({ isDarkMode }) {
  return isDarkMode ? (
    <svg
      width="39"
      height="38"
      viewBox="0 0 39 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_ddd_1043_53387)">
        <ellipse cx="19.5" cy="17.5" rx="14.5" ry="13.5" fill="white" />
      </g>
      <path
        d="M19.5 19.9545C20.1818 19.9545 20.7614 19.7159 21.2386 19.2386C21.7159 18.7614 21.9545 18.1818 21.9545 17.5C21.9545 16.8182 21.7159 16.2386 21.2386 15.7614C20.7614 15.2841 20.1818 15.0455 19.5 15.0455C18.8182 15.0455 18.2386 15.2841 17.7614 15.7614C17.2841 16.2386 17.0455 16.8182 17.0455 17.5C17.0455 18.1818 17.2841 18.7614 17.7614 19.2386C18.2386 19.7159 18.8182 19.9545 19.5 19.9545ZM19.5 21.5909C18.3682 21.5909 17.4035 21.1919 16.6061 20.3939C15.8081 19.5965 15.4091 18.6318 15.4091 17.5C15.4091 16.3682 15.8081 15.4033 16.6061 14.6053C17.4035 13.8078 18.3682 13.4091 19.5 13.4091C20.6318 13.4091 21.5967 13.8078 22.3947 14.6053C23.1922 15.4033 23.5909 16.3682 23.5909 17.5C23.5909 18.6318 23.1922 19.5965 22.3947 20.3939C21.5967 21.1919 20.6318 21.5909 19.5 21.5909ZM10.5 18.3182V16.6818H13.7727V18.3182H10.5ZM25.2273 18.3182V16.6818H28.5V18.3182H25.2273ZM18.6818 11.7727V8.5H20.3182V11.7727H18.6818ZM18.6818 26.5V23.2273H20.3182V26.5H18.6818ZM14.8773 14.0227L12.8523 11.9977L13.9977 10.8523L16.0227 12.8773L14.8773 14.0227ZM25.0023 24.1477L22.9773 22.1227L24.1227 20.9773L26.1477 23.0023L25.0023 24.1477ZM24.1227 14.0227L22.9773 12.8773L25.0023 10.8523L26.1477 11.9977L24.1227 14.0227ZM13.9977 24.1477L12.8523 23.0023L14.8773 20.9773L16.0227 22.1227L13.9977 24.1477Z"
        fill="black"
      />
      <defs>
        <filter
          id="filter0_ddd_1043_53387"
          x="0"
          y="0"
          width="39"
          height="38"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1043_53387"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_1043_53387"
            result="effect2_dropShadow_1043_53387"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="2.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow_1043_53387"
            result="effect3_dropShadow_1043_53387"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect3_dropShadow_1043_53387"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  ) : (
    <svg
      width="39"
      height="38"
      viewBox="0 0 39 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_ddd_1043_33303)">
        <ellipse cx="19.5" cy="17.5" rx="14.5" ry="13.5" fill="black" />
      </g>
      <path
        d="M20 26C17.5 26 15.375 25.125 13.625 23.375C11.875 21.625 11 19.5 11 17C11 14.5 11.875 12.375 13.625 10.625C15.375 8.875 17.5 8 20 8C20.2333 8 20.4627 8.00833 20.688 8.025C20.9127 8.04167 21.1333 8.06667 21.35 8.1C20.6667 8.58333 20.121 9.21233 19.713 9.987C19.3043 10.7623 19.1 11.6 19.1 12.5C19.1 14 19.625 15.275 20.675 16.325C21.725 17.375 23 17.9 24.5 17.9C25.4167 17.9 26.2583 17.6957 27.025 17.287C27.7917 16.879 28.4167 16.3333 28.9 15.65C28.9333 15.8667 28.9583 16.0873 28.975 16.312C28.9917 16.5373 29 16.7667 29 17C29 19.5 28.125 21.625 26.375 23.375C24.625 25.125 22.5 26 20 26Z"
        fill="#83859C"
      />
      <defs>
        <filter
          id="filter0_ddd_1043_33303"
          x="0"
          y="0"
          width="39"
          height="38"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1043_33303"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_1043_33303"
            result="effect2_dropShadow_1043_33303"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="2.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow_1043_33303"
            result="effect3_dropShadow_1043_33303"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect3_dropShadow_1043_33303"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
