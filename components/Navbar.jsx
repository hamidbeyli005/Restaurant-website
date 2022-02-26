import Image from "next/image";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image 
            src="/images/telephone.png"
            alt=""
            width="50"
            height="50"
          ></Image>
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>060 331 28 04</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Hompage</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <li className={styles.listItem}>
            <Image 
              src="/images/logo.png"
              height="65px"
              width="150px"
              alt=""
            ></Image>
          </li>
          <li className={styles.listItem}>Evenets</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
        <Image 
          src="/images/cart.png"
          width="30rem"
          height="30rem"
          alt=""
        ></Image>
        <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
