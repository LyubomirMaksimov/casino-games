import React, { useEffect, useState } from "react";
import Player from "../components/CoinFlip/Player";
import styles from "./CoinFlip.module.scss";
import Coin from "../components/CoinFlip/Coin";
import { FidgetSpinner } from "react-loader-spinner";
const DUMMY_DATA = {
  player1: {
    name: "Player1",
    image:
      "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1707335725~exp=1707336325~hmac=70ac83625b855cece28a5e6411b2a5fcd711bbd4ce29c607c9065969d61a6ae3",
  },
  player2: {
    name: "Player2",
    image:
      "https://img.freepik.com/free-vector/scary-little-blue-monster-cartoon-illustration_1284-64093.jpg?w=740&t=st=1707335767~exp=1707336367~hmac=8b406693252b55ee4c9301b58ea1ba6806a9e865d90a9e32d61ef9e7619020f1",
  },
};

type CoinSide = "heads" | "tails";

const CoinFlip: React.FC = () => {
  const [winner, setWinner] = useState<CoinSide>("");
  const [loading, setLoading] = useState<boolean>(false);

  const [p1ItemsCount, setp1ItemsCount] = useState<number>(0);
  const [p1ItemsValue, setp1ItemsValue] = useState<number>(0);
  const [p1WinChance, setp1WinChance] = useState<number>(0);

  const [p2ItemsCount, setp2ItemsCount] = useState<number>(0);
  const [p2ItemsValue, setp2ItemsValue] = useState<number>(0);
  const [p2WinChance, setp2WinChance] = useState<number>(0);

  const startNewGame = () => {
    // Generate random values for p1ItemsCount and p2ItemsCount between 1 and 5
    const randomP1ItemsCount = Math.floor(Math.random() * 5) + 1;
    const randomP2ItemsCount = Math.floor(Math.random() * 5) + 1;

    // Generate random values for p1ItemsValue and p2ItemsValue between 1 and 10 with two decimal places
    const randomP1ItemsValue = parseFloat((Math.random() * 10 + 1).toFixed(2));
    const randomP2ItemsValue = parseFloat((Math.random() * 10 + 1).toFixed(2));

    // Update the state with the random values
    setp1ItemsCount(randomP1ItemsCount);
    setp2ItemsCount(randomP2ItemsCount);
    setp1ItemsValue(randomP1ItemsValue);
    setp2ItemsValue(randomP2ItemsValue);

    // Calculate winning chances
    const totalItemsValue = randomP1ItemsValue + randomP2ItemsValue;
    const p1WinningChance = parseFloat(
      ((randomP1ItemsValue / totalItemsValue) * 100).toFixed(2)
    );
    const p2WinningChance = parseFloat(
      ((randomP2ItemsValue / totalItemsValue) * 100).toFixed(2)
    );

    // Update the state with the winning chances
    setp1WinChance(p1WinningChance);
    setp2WinChance(p2WinningChance);
  };

  const deferFn = (callback: () => void, ms: number) => {
    setTimeout(callback, ms);
  };

  const processResult = (result: CoinSide) => {
    if (result === "heads") {
      // setHeadsCount((prev) => prev + 1);
    } else {
      // setTailsCount((prev) => prev + 1);
    }

    setLoading(false);
  };

  const flipCoin = () => {
    setWinner("");
    const random = parseFloat((Math.random() * 100).toFixed(2));
    console.log(random);
    const result: CoinSide = random <= p2WinChance ? "heads" : "tails";

    deferFn(() => {
      setLoading(true);
      deferFn(() => processResult(result), 2900);
      setWinner(result);
    }, 100);
  };

  useEffect(() => {
    startNewGame();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.playersInfo}>
        <Player
          name={DUMMY_DATA.player1.name}
          image={DUMMY_DATA.player1.image}
          itemsCount={p1ItemsCount}
          itemsValue={p1ItemsValue}
          winChance={p1WinChance}
        />
        <Coin winner={winner} />
        <Player
          name={DUMMY_DATA.player2.name}
          image={DUMMY_DATA.player2.image}
          itemsCount={p2ItemsCount}
          itemsValue={p2ItemsValue}
          winChance={p2WinChance}
        />
      </div>
      <div className={styles.buttonsContainer}>
        {loading && (
          <div className={styles.spinner}>
            {/* <FidgetSpinner
              visible={true}
              height="37px"
              width="37px"
              ariaLabel="fidget-spinner-loading"
              wrapperStyle={{}}
              wrapperClass="fidget-spinner-wrapper"
            /> */}
          </div>
        )}
        {!loading && (
          <>
            <button className={styles.buttonLeave}>LEAVE</button>
            <button className={styles.buttonStart} onClick={flipCoin}>
              START
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CoinFlip;
