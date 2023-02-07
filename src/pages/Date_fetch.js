import { useState } from "react";
import styles from "src/styles/Token.module.css";

const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

export default function Header() {
  const [showResult, setShowResult] = useState([]);
  const [result, setResult] = useState([]);
  // let address;

  const handleSubmit = async () => {
    const address = "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984";
    const chain = EvmChain.ETHEREUM;

    const topic =
      "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef";

    await Moralis.start({
      apiKey: process.env.NEXT_PUBLIC_MORALIS_API_KEY,
    });

    const abi = {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    };

    const response = await Moralis.EvmApi.events.getContractEvents({
      address,
      chain,
      topic,
      abi,
    });

    console.log(response.toJSON());
    setResult(response.toJSON());
    setShowResult(true);
    document.querySelector("#walletAddress").value = "";
  };

  return (
    <section className={styles.main}>
      <form
        className={styles.getTokenForm}
        name="create-profile-form"
        method="POST"
        action="#"
      >
        <label className={styles.label} htmlFor="walletAddress">
          Add ERC20 Wallet Address
        </label>
        <input
          className={styles.walletAddress}
          type="text"
          id="walletAddress"
          name="walletAddress"
          maxLength="120"
          required
        />
      </form>
      <button className={styles.form_btn} onClick={handleSubmit}>
        Submit
      </button>
      <section className={styles.result}>
        {showResult &&
          result.map((token) => {
            return (
              <section
                className={styles.tokenContainer}
                key={result.indexOf(3)}
              ></section>
            );
          })}
      </section>
    </section>
  );
}
