import styles from "./ProductCard.module.css";

function ProductCard({ name, price, image, category }) {
    return (
        <div className={styles.card}>
            <img src={image} alt={name} className={styles.image} />
            <div className={styles.info}>
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.category}>{category}</p>
                <p className={styles.price}>{price} €</p>
                <button 
                    className={styles.button}
                    onClick={() => alert(`${name} ajouté au panier ! 🛒`)}
                >Ajouter au panier</button>
            </div>
        </div>
    );
}

export default ProductCard;