import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import styles from './Catalogue.module.css';

function Catalogue() {
    const [filter, setFilter] = useState("Robes");
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts([
            { id: 1, name: "Adidas Samba Denim", price: 120, image: "/chaussure1.jpg", category: "Chaussures" },
            { id: 2, name: "Adidas Samba Beige", price: 130, image: "/chaussure2.jpg", category: "Chaussures" },
            { id: 3, name: "Adidas Samba Pink", price: 150, image: "/chaussure3.jpg", category: "Chaussures" },
            { id: 4, name: "Adidas Samba Black", price: 140, image: "/chaussure4.jpg", category: "Chaussures" },
            { id: 5, name: "Puma Suede Black", price: 89, image: "/chaussure5.jpg", category: "Chaussures" },
            { id: 6, name: "Puma Suede Red", price: 75, image: "/chaussure6.jpg", category: "Chaussures" },
            { id: 7, name: "New Balance Green", price: 45, image: "/chaussure7.jpg", category: "Chaussures" },
            { id: 8, name: "New Balance Pink", price: 95, image: "/chaussure8.jpg", category: "Chaussures" },
            { id: 9, name: "Sneaker Brown", price: 110, image: "/chaussure9.jpg", category: "Chaussures" },
            { id: 10, name: "Sneaker Vintage", price: 65, image: "/chaussure10.jpg", category: "Chaussures" },
            { id: 11, name: "Sneaker Urban", price: 85, image: "/chaussure11.jpg", category: "Chaussures" },
            { id: 12, name: "Sneaker Street", price: 99, image: "/chaussure12.jpg", category: "Chaussures" },
            { id: 13, name: "Robe Cargo", price: 79, image: "https://i.pinimg.com/1200x/42/8a/68/428a688a910b8f821b925d8b792be7aa.jpg", category: "Robes" },
            { id: 14, name: "Robe Oversized", price: 85, image: "https://i.pinimg.com/736x/be/09/e5/be09e5fea9c19b6d63326786569b196e.jpg", category: "Robes" },
            { id: 15, name: "Robe Denim", price: 90, image: "https://i.pinimg.com/736x/36/5d/a3/365da3c096e88847acc550bf90c6e9d2.jpg", category: "Robes" },
            { id: 16, name: "Robe Hoodie", price: 75, image: "https://i.pinimg.com/736x/69/66/75/69667504e4f3209247cec06d75f5f494.jpg", category: "Robes" },
            { id: 17, name: "Robe Vintage", price: 95, image: "https://i.pinimg.com/736x/b6/99/8f/b6998fd7eed64bfc949335b13d4266bd.jpg", category: "Robes" },
            { id: 18, name: "Robe Urban", price: 80, image: "https://i.pinimg.com/736x/c8/12/67/c8126789e1512594c224384f530f5f6d.jpg", category: "Robes" },
            { id: 19, name: "Robe Casual", price: 70, image: "https://i.pinimg.com/736x/d8/fa/1d/d8fa1de8c9e11010b5c27c7b3d735a0c.jpg", category: "Robes" },
            { id: 20, name: "Robe Chic", price: 110, image: "https://i.pinimg.com/736x/26/1f/a9/261fa97d830f36471218bdb3ae08089c.jpg", category: "Robes" },
            { id: 21, name: "Robe Florale", price: 75, image: "https://i.pinimg.com/736x/b2/42/7c/b2427c8002c7afedf7ee57a2ac4128ba.jpg", category: "Robes" },
            { id: 22, name: "Robe Élégante", price: 95, image: "https://i.pinimg.com/736x/a8/c1/96/a8c196ed88ada11258b8b5dd96c0ada3.jpg", category: "Robes" },
            { id: 23, name: "Robe Moderne", price: 85, image: "https://i.pinimg.com/1200x/c5/5b/65/c55b65a0e3f6e3d8be2ebe403509568c.jpg", category: "Robes" },
            { id: 24, name: "Robe Street", price: 80, image: "https://i.pinimg.com/736x/54/a1/d9/54a1d9e4f2859cf7c13ed2c55874428a.jpg", category: "Robes" },
            { id: 25, name: "Robe Tendance", price: 90, image: "https://i.pinimg.com/736x/37/a9/5c/37a95c84309ef3861903199ed329d48f.jpg", category: "Robes" },
            { id: 26, name: "Robe Mode", price: 100, image: "https://i.pinimg.com/736x/ec/f6/67/ecf667ee2b760ae96829e574923310c3.jpg", category: "Robes" },
            { id: 27, name: "Robe Satin", price: 95, image: "https://i.pinimg.com/736x/e8/ef/80/e8ef80549bdefefd2aa5159717407803.jpg", category: "Robes" },
            { id: 28, name: "Robe Luxe", price: 120, image: "https://i.pinimg.com/1200x/e6/8c/8a/e68c8abaecea5360dd0bb7f900a41bc6.jpg", category: "Robes" },
        ]);
    }, []);

    const filteredProducts = products.filter(p => p.category === filter);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Catalogue</h1>
            <div className={styles.filters}>
                <button
                    onClick={() => setFilter("Chaussures")}
                    className={filter === "Chaussures" ? styles.active : styles.button}
                >Chaussures</button>
                <button
                    onClick={() => setFilter("Robes")}
                    className={filter === "Robes" ? styles.active : styles.button}
                >Robes</button>
            </div>
            <div className={styles.grid}>
                {filteredProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                        category={product.category}
                    />
                ))}
            </div>
        </div>
    );
}

export default Catalogue;