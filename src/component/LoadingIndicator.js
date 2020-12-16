import React from 'react';
import styles from './LoadingIndicator.module.scss';

const LoadingIndicator = () => {
  return (
    <svg class={styles.loadingIndicator} viewBox="0 0 94 95">
      <path
        d="M93.45,30.65 L87.55,8.38 C87.3506191,7.63290741 86.7670926,7.04938093 86.02,6.85 L63.75,0.95 C63.0064134,0.752971112 62.2141521,0.96627223 61.67,1.51 L46.78,16.43 L78.01,47.65 L92.93,32.73 C93.4594868,32.1776969 93.6572869,31.3864966 93.45,30.65 L93.45,30.65 Z"
        fill="#82D170"
      ></path>
      <path
        d="M0.08,64.66 L5.98,86.92 C6.17938093,87.6670926 6.76290741,88.2506191 7.51,88.45 L29.78,94.35 C30.5235866,94.5470289 31.3158479,94.3337278 31.86,93.79 L46.79,78.87 L15.57,47.65 L0.64,62.57 C0.0927027995,63.1162153 -0.120874858,63.9133176 0.08,64.66 L0.08,64.66 Z"
        fill="#F8CF1C"
      ></path>
      <path
        d="M29.78,0.94 L7.51,6.84 C6.76290741,7.03938093 6.17938093,7.62290741 5.98,8.37 L0.08,30.64 C-0.117028888,31.3835866 0.0962722298,32.1758479 0.64,32.72 L15.57,47.65 L46.78,16.43 L31.86,1.5 C31.3158479,0.95627223 30.5235866,0.742971112 29.78,0.94 L29.78,0.94 Z"
        fill="#c6d636"
      ></path>
      <path
        d="M92.72,62.37 L78.01,47.65 L46.79,78.87 L61.5,93.57 C62.1759916,94.2497811 63.163607,94.5167042 64.09,94.27 L85.76,88.57 C86.6944211,88.3241859 87.4241859,87.5944211 87.67,86.66 L93.45,64.95 C93.6852848,64.0213395 93.4069716,63.037712 92.72,62.37 L92.72,62.37 Z"
        fill="#D57DEA"
      ></path>
      <polygon
        fill="#762A7D"
        points="15.555 47.644 46.775 16.424 77.992 47.644 46.774 78.864"
      ></polygon>
    </svg>
  );
};

export default LoadingIndicator;
