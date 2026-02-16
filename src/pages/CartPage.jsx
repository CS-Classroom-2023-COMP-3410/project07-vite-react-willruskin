import ShoppingCart from '../components/ShoppingCart';

function CartPage({ cart, removeFromCart, totalPrice, onCheckout }) {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Cart Page</h1>

            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ShoppingCart
                    cart={cart}
                    removeFromCart={removeFromCart}
                    totalPrice={totalPrice}
                    onCheckout={onCheckout}
                    showCheckout={true}
                />
            )}
        </div>
    );
}

export default CartPage;