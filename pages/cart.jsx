import Image from "next/image";
import styles from "../styles/cart.module.css";

const cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tr className={styles.tr}>
            <th>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          <tr>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src="/images/pizza.png"
                  objectFit="cover"
                  layout="fill"
                  alt=""
                ></Image>
              </div>
            </td>
            <td>
              <span className={styles.name}>coralzo</span>
            </td>
            <td>
              <span>Double ingredient spice sauce</span>
            </td>
            <td>
              <span>$ 19.90</span>
            </td>
            <td>
              <span>2</span>
            </td>
            <td>
              <span className={styles.total}>$ 39.80</span>
            </td>
          </tr>
           <tr>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src="/images/pizza.png"
                  objectFit="cover"
                  layout="fill"
                  alt=""
                ></Image>
              </div>
            </td>
            <td>
              <span className={styles.name}>coralzo</span>
            </td>
            <td>
              <span>Double ingredient spice sauce</span>
            </td>
            <td>
              <span>$ 19.90</span>
            </td>
            <td>
              <span>2</span>
            </td>
            <td>
              <span className={styles.total}>$ 39.80</span>
            </td>
          </tr>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.card}>
          <h2 className={styles.cardHeader}>cart total</h2>
          <p className={styles.cardItem}>
            Subtotal: <span className={styles.span}> $79.60</span>
          </p>
          <p className={styles.cardItem}>
            Discount: <span className={styles.span}> $0.00</span>
          </p>
          <p className={styles.cardItem}>
            Total: <span className={styles.span}> $79.60</span>
          </p>
          <button className={styles.cardButton}>checkout  now!</button>
        </div>
      </div>
    </div>
  );
};

export default cart;
