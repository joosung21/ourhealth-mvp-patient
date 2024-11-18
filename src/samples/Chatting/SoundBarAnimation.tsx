import React from 'react';
import styles from './SoundBarAnimation.module.scss';

export const SoundBarAnimation: React.FC = () => {
  return (
    <div className={styles.soundBarWrapper}>
      <div className={styles.soundBar} style={{ animationDelay: '-0.4s' }}></div>
      <div className={styles.soundBar} style={{ animationDelay: '-0.2s' }}></div>
      <div className={styles.soundBar} style={{ animationDelay: '0s' }}></div>
      <div className={styles.soundBar} style={{ animationDelay: '-0.2s' }}></div>
      <div className={styles.soundBar} style={{ animationDelay: '-0.4s' }}></div>
    </div>
  );
};
