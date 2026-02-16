import { useState } from 'react';
import Card from '../components/Card';

function ProductsPage({ products, addToCart }) {
    const [sortBy, setSortBy] = useState('default');

    // Sort products based on selected option
    const sortedProducts = [...products].sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'name') return a.title.localeCompare(b.title);
        return a.id - b.id; // default sort by id
    });

    return (
        <div style={{ padding: '20px' }}>
            <h1>Products Page</h1>

            {/* Sort Dropdown */}
            <div style={{ marginBottom: '20px' }}>
                <label htmlFor="sort-select" style={{ marginRight: '10px' }}>
                    Sort by:
                </label>

                <select
                    id="sort-select"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    style={{ padding: '5px' }}
                >
                    <option value="default">Default</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="name">Name</option>
                </select>
            </div>

            {/* Products Listing */}
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '15px'
            }}>
                {sortedProducts.map(product => (
                    <Card
                        key={product.id}
                        title={product.title}
                        description={`${product.description} - $${product.price}`}
                        imageUrl={product.imageUrl}
                        actions={[
                            {
                                label: `Add to Cart ($${product.price})`,
                                onClick: () => addToCart(product),
                                variant: product.stock > 0 ? 'primary' : 'secondary',
                                disabled: product.stock <= 0
                            }
                        ]}
                    >
                        <p>In stock: {product.stock}</p>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default ProductsPage;
