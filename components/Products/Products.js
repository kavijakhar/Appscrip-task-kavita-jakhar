import { productItems } from '@/data';
import React, { useState } from 'react';
import { CiHeart } from 'react-icons/ci';
import { FaHeart } from 'react-icons/fa';

const Products = ({ filtersVisible }) => {
    const [likedProducts, setLikedProducts] = useState({});

    const toggleLike = (id) => {
        setLikedProducts((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    return (
        <section className={filtersVisible ? "products-section" : "products-section-full"}>
            <div className={filtersVisible ? "products-grid" : "products-grid-full"}>
                {productItems.map((product) => (
                    <div key={product.id} className="product-item">
                        <div className="product-image-wrapper">
                            <img src={product.imageUrl} alt={product.title} className="product-image" />
                            {product.newProduct && <div className="new-product-label">New Product</div>}
                            {product.outOfStock && <div className="out-of-stock-label">Out of Stock</div>}
                        </div>
                        <div className="product-info">
                            <h3 className="product-title">{product.title.slice(0, 25)}. . .</h3>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <p className="product-price">{product.price}</p>
                                <div onClick={() => toggleLike(product.id)} style={{ cursor: 'pointer' }}>
                                    {likedProducts[product.id] ? <FaHeart size={24} color="red" /> : <CiHeart size={24} />}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Products;
