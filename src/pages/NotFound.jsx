import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

function Catalogue() {
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState("Tous");

    useEffect(() => {
        setProducts([
            { id: 1, name: "Adidas Samba Denim", price: 120, image: "/samba-denim-1.png", category: "Chaussures" },
            { id: 2, name: "Adidas Samba Denim V2", price: 130, image: "/samba-denim-2.png", category: "Chaussures" },
            { id: 3, name: "Adidas Samba Pink", price: 150, image: "/samba-pink.png", category: "Chaussures" },
        ]);
    }, []);

    const filteredProducts = filter === "Tous"
        ? products
        : products.filter(p => p.category === filter);

    return (
        <div>
            <h1>Catalogue</h1>
            <div>
                <button onClick={() => setFilter("Tous")}>Tous</button>
                <button onClick={() => setFilter("Chaussures")}>Chaussures</button>
                <button onClick={() => setFilter("Vêtements")}>Vêtements</button>
            </div>
            <div>
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