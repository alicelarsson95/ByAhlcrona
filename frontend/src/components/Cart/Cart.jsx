import { useCart } from "../../context/CartContext";
import styles from "./Cart.module.css";

const Cart = () => {
  const { items, removeFromCart, updateQty, isOpen, setIsOpen, totalPrice } = useCart();

  const fmt = (n) => n.toLocaleString("sv-SE") + " kr";

  return (
    <>
      {isOpen && <div className={styles.overlay} onClick={() => setIsOpen(false)} />}

      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>Cart</h2>
          <button className={styles.close} onClick={() => setIsOpen(false)} aria-label="Close">✕</button>
        </div>

        {items.length === 0 ? (
          <p className={styles.empty}>Your cart is empty.</p>
        ) : (
          <>
            <ul className={styles.list}>
              {items.map((item) => (
                <li key={item.id} className={styles.item}>
                  <div className={styles.itemImage} />
                  <div className={styles.itemInfo}>
                    <p className={styles.itemTitle}>{item.title}</p>
                    <p className={styles.itemCategory}>{item.category}</p>
                    <p className={styles.itemPrice}>{fmt(item.price)}</p>
                    <div className={styles.qtyRow}>
                      <button className={styles.qtyBtn} onClick={() => updateQty(item.id, -1)}>−</button>
                      <span className={styles.qty}>{item.qty}</span>
                      <button className={styles.qtyBtn} onClick={() => updateQty(item.id, 1)}>+</button>
                      <button className={styles.remove} onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className={styles.footer}>
              <div className={styles.totalRow}>
                <span>Total</span>
                <span className={styles.totalPrice}>{fmt(totalPrice)}</span>
              </div>
              <button className={styles.checkout}>Checkout</button>
              <button className={styles.continueShopping} onClick={() => setIsOpen(false)}>
                Continue shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
};

export default Cart;
