import Image from "next/image";
import styles from "../../styles/Order.module.css";

const Order = () => {
    const status= 0
    const statusClass=(index)=>{
        if(index-status<1) return styles.done
        if(index-status===1) return styles.inProgess
        if(index-status>1) return styles.undone

    }
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tr className={styles.tr}>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Address</th>
            <th>Total</th>
          </tr>
          <tr>
            <td>
              <span>156985648</span>
            </td>
            <td>
              <span>John Doe</span>
            </td>
            <td>
              <span>Elton st.156-22 LA</span>
            </td>
            <td>
              <span>$ 39.80</span>
            </td>
          </tr>
        </table>
        <div className={styles.iconContainer}>
          <div className={statusClass(0)}>
            <Image height={55} width={55} src="/images/paid.png" alt=""></Image>
            <span>Payment</span>
            <div className={styles.checked} >
              <Image
                height={25}
                width={25}
                src="/images/checked.png"
                alt=""
              ></Image>
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image height={55} width={55} src="/images/bake.png" alt=""></Image>
            <span>Preparing</span>
            <div className={styles.checked}>
              <Image
                height={25}
                width={25}
                src="/images/checked.png"
                alt=""
              ></Image>
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image height={55} width={55} src="/images/bike.png" alt=""></Image>
            <span>On the way</span>
            <div className={styles.checked}>
              <Image
                height={25}
                width={25}
                src="/images/checked.png"
                alt=""
              ></Image>
            </div>
          </div>
          <div className={statusClass(3)}>
            <Image
              height={55}
              width={55}
              src="/images/delivered.png"
              alt=""
            ></Image>
            <span>Delivered</span>
            <div className={styles.checked}>
              <Image
                height={25}
                width={25}
                src="/images/checked.png"
                alt=""
              ></Image>
            </div>
          </div>
        </div>
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
          <button className={styles.cardButton}>paid</button>
        </div>
      </div>
    </div>
  );
};

export default Order;
