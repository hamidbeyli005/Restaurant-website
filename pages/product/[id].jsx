import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/Product.module.css";

const Product = () => {
  const [size, setsize] = useState(0);
  const pizza = {
    id: 1,
    img: "/images/pizza.png",
    name: "COMPAGNOLA",
    price: [19.9, 23.9, 27.9],
    desc: " Lorem ipsum, dolor sit amet inventore recusandae in perspiciatis quo, sapiente voluptate, reprehenderit assumenda fugiat aperiam autem. Fuga illum temporibus id ad.",
  };
  return (
    <div className={styles.container}>

      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image
            src={pizza.img}
            objectFit="contain"
            layout="fill"
            alt=""
          ></Image>
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.header}>{pizza.name} </h1>
        <span className={styles.price}>$ {pizza.price[size]} </span>
        <p className={styles.desc}>{pizza.desc} </p>
        <h2 className={styles.choosePizza}>Choose the size</h2>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setsize(0)}>
            <Image
              src="/images/size.png"
              objectFit="contain"
              alt=""
              layout="fill"
            ></Image>
            <span className={styles.number}>small</span>
          </div>
          <div className={styles.size} onClick={() => setsize(1)}>
            <Image
              src="/images/size.png"
              objectFit="contain"
              alt=""
              layout="fill"
            ></Image>
            <span className={styles.number}>medium</span>
          </div>
          <div className={styles.size} onClick={() => setsize(2)}>
            <Image
              src="/images/size.png"
              objectFit="contain"
              alt=""
              layout="fill"
            ></Image>
            <span className={styles.number}>Large</span>
          </div>
          
        </div>
        <div className={styles.add}>
          <input type="number" className={styles.quantity} defaultValue={1} />
          <button className={styles.button}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
