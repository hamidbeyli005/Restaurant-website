import styles from "../styles/Slider.module.css";
import Image from "next/image";
import { useState } from "react";

const Slider = () => {
  const [index, setIndex] = useState(0);

  const images = [
    "/images/wrapper1.jpg",
    "/images/wrapper2.jpg",
    "/images/wrapper3.jpg",
  ];

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{ left: 0 }}>
        <Image
          onClick={() => handleArrow("l")}
          src="/images/arrowl.png"
          alt=""
          layout="fill"
          objectfit="contain"
        ></Image>
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((img, index) => (
          <div className={styles.imgContainer} key={index}>
            <Image src={img} alt="" layout="fill" objectfit="contain" />
          </div>
        ))}
      </div>
      <div className={styles.arrowContainer} style={{ right: 0 }}>
        <Image
          onClick={() => handleArrow("r")}
          src="/images/arrowr.png"
          alt=""
          layout="fill"
          objectfit="contain"
        ></Image>
      </div>
    </div>
  );
};

export default Slider;
