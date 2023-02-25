import { useState } from "react";
import styles from "src/styles/Token.module.css";

export default function Header() {
  const [showResult, setShowResult] = useState([]);
  const [result, setResult] = useState([]);

  const handleSubmit = async () => {
    // Unixtimestamp
    var unixtimestamp = document.getElementById("timestamp").value;

    // Months array
    var months_arr = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    // Convert timestamp to milliseconds
    var date = new Date(unixtimestamp * 1000);

    // Year
    var year = date.getFullYear();

    // Month
    var month = months_arr[date.getMonth()];

    // Day
    var day = date.getDate();

    // Hours
    var hours = date.getHours();

    // Minutes
    var minutes = "0" + date.getMinutes();

    // Seconds
    var seconds = "0" + date.getSeconds();

    // Display date time in MM-dd-yyyy h:m:s format
    var convdataTime =
      month +
      "-" +
      day +
      "-" +
      year +
      " " +
      hours +
      ":" +
      minutes.substr(-2) +
      ":" +
      seconds.substr(-2);

    document.getElementById("datetime").innerHTML = convdataTime;
  };

  return (
    <>
      <section className={styles.main}>
        <form
          className={styles.getTokenForm}
          name="create-profile-form"
          method="POST"
          action="#"
        >
          <input
            className={styles.walletAddress}
            type="text"
            id="walletAddress"
            name="walletAddress"
            maxLength="120"
            value="1490028077"
            required
          />
        </form>
        <button className={styles.form_btn} onClick={handleSubmit}>
          Submit
        </button>
      </section>
    </>
  );
}
