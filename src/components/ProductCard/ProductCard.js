import './ProductCard.css';

const ProductCard = ({product}) => {
  return (
    <div className="card">
      {product.isSale && <span className="card__sale-alert">Sale</span>}
      <div className="card__image-container">
        <img
          src={`/images/${product.productImage}`}
          alt={product.productName}
        />
      </div>
      <div className="card__content">
        <h3>{product.productName}</h3>
        <h2>{product.price}</h2>
      </div>
    </div>
  );
};

export default ProductCard;
