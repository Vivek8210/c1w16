
// keep the add to cart component here
const CartButton = () => {
    //manage state of the count 
  return <>
  {/* add to cart button */}
  {/* count with - and  + button */}
  <div>
      <button>-</button>
      <p className="count-item">{count}</p>
      <button>+=Add to Cart</button>
  </div>
  </>;
};
export default CartButton
