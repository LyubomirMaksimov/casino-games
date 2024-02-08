import React, { useState } from "react";
import styles from "./Coin.module.scss";

interface CoinProps {
  winner: string;
}

const Coin: React.FC<CoinProps> = ({ winner }) => {
  return (
    <div className={styles.container}>
      {winner && (
        <div className={`${styles.coin} ${styles[winner]}`}>
          <div className={styles.side}></div>
          <div className={styles.side}></div>
        </div>
      )}
      <p>VS</p>
    </div>
  );
};

export default Coin;
