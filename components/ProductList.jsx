import styles from "../styles/ProductList.module.css";
import ProductCard from "./ProductCard";

function ProductList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.text}>THE BEST PİZZA İN TOWN</h1>

      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        perspiciatis temporibus ullam facere qui, repellendus placeat dolor,
        praesentium voluptas ipsa odio quae deleniti magni beatae? Voluptatem
        m facere qui, repellendus placeat dolor,
        praesentium voluptas qui impedit odit?
      </p>
      <div className={styles.wrapper}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default ProductList;
