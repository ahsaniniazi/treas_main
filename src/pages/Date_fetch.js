import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const handleSubmit = async (id) => {
  const query = new URLSearchParams({ pageSize: "50", offset: 4 }).toString();
  // const address = "0xbe0eb53f46cd790cd13851d5eff43d12404d33e8";

  let address = id;
  const resp = await fetch(
    `https://api.tatum.io/v3/ethereum/account/transaction/internal/${address}?${query}`,
    {
      method: "GET",
      headers: {
        "x-api-key": "32813fbc-a6c7-40c7-b71e-e53d0eef4fd8",
      },
    }
  );

  const jsonn = await resp.json();
  const result = await jsonn;
  console.log(result);
  const arr = [];
  // console.log(arr);
  const getValues = (data, month) => {
    console.log({ month });
    const idx = arr.findIndex((item) => item.month === month);
    const add = Number(address);
    // console.log(add);
    if (idx === -1) {
      arr.push({
        inflow: Number(data.to) === add ? Number(data.value) : 0,
        outflow: Number(data.from) === add ? Number(data.value) : 0,
        balance: Number(data.balance === add) ? Number(data.value) : 0,
        month,
        value: Number(data.value),
        fees: Number(data.gas),
      });
      // 0xE0b4dE18fc0AEB769Fcc438B74109e1c62C5B23A
      // console.log(outflow);
    } else {
      if (arr.length) {
        // console.log(data.from, Number(data.to) === add);
        // console.log("outflow");
        if (Number(data.from) === add) arr[idx].outflow += Number(data.value);
        else if (Number(data.to) === add) {
          // console.log(address);
          arr[idx].inflow += Number(data.value);
          // console.log("inflow");
        } else {
          // console.log(address);
          arr[idx].fees += Number(data.value);
          // console.log("vLUE");
        }
      }
    }
  };
  const monthNames = [
    "January ",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  result?.forEach((data) => {
    const time = data.timeStamp;
    const d = new Date();

    d.setTime(time * 1000);

    const month = monthNames[d.getMonth()];
    // console.log(d);
    // console.log(day);
    // console.log(month);
    getValues(data, month);
  });

  return arr;
  // console.loga(arr);
  // console.log(response);
};

export default function Fetch() {
  const [showResult, setShowResult] = useState([]);
  const [result, setResult] = useState([]);

  const router = useRouter();

  useEffect(() => {
    console.log(router?.query.id);
    if (router.query.id) {
      handleSubmit(router.query.id);
    }
  }, [router?.query.id]);

  return (
    <></>
    // <section className={styles.main}>
    //   {/* <form
    //     className={styles.getTokenForm}
    //     name="create-profile-form"
    //     method="POST"
    //     action="#"
    //   >
    //     <label className={styles.label} htmlFor="walletAddress">
    //       Add ERC20 Wallet Address
    //     </label>
    //     <input
    //       className={styles.walletAddress}
    //       type="text"
    //       id="walletAddress"
    //       name="walletAddress"
    //       maxLength="120"
    //       required
    //     />
    //   </form>
    //   <button className={styles.form_btn} onClick={handleSubmit}>
    //     Submit
    //   </button> */}
    //   <section className={styles.result}>
    //     {showResult &&
    //       result.map((token) => {
    //         return (
    //           <section
    //             className={styles.tokenContainer}
    //             key={result.indexOf(3)}
    //           ></section>
    //         );
    //       })}
    //   </section>
    // </section>
  );
}
