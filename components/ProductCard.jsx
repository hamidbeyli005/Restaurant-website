import Image from "next/image";
import styles from "../styles/ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src="/images/pizza.png"
          alt=""
          width="190rem"
          height="190rem"
        ></Image>
      </div>
      <h2 className={styles.productName}>FIORI DI ZUCCA</h2>
      <h2 className={styles.price}>$19.90</h2>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
      </p>
    </div>
  );
};

export default ProductCard;
