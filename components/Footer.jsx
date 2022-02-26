import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/images/bg.png" alt="" layout="fill"></Image>
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h1>OH YES,WE DID,THE LAMA PIZZA,WELL BAKED SLICE OF PIZZA.</h1>
        </div>
        <div className={styles.card}>
          <h2 className={styles.headerText}>FIND OUR RESTAURANTS</h2>
          <div className={styles.cardDescription}>
            1565 K.Lequie Rd #236
            <br />
            NewYork,84023
            <br />
            (506) 598-2201
          </div>
          <div className={styles.cardDescription}>
            1354 R.Don Road #302
            <br />
            NewYork,86013
            <br />
            (706) 598-1010
          </div>
          <div className={styles.cardDescription}>
            1514 E.Ervin St #302
            <br />
            NewYork,73698
            <br />
            (605) 867-1098
          </div>
          <div className={styles.cardDescription}>
            1514 W.Caroll St #125
            <br />
            NewYork,85002
            <br />
            (601) 856-1013
          </div>
        </div>
        <div className={styles.card}>
          <h2 className={styles.headerText}>WORKING HOURS</h2>
          <div className={styles.cardDescription}>
            MONDAY UNTIL FRIDAY
            <br />
            9:00-22:00
          </div>
          <div className={styles.cardDescription}>
            SATURDAY - SUNDAY
            <br />
            12:00-24:00
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
