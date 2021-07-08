import './ProductCard.css';

const ProductCard = ({product}) => {
  return (
    <div className="card">
      <div className="card__image-container">
        <img
          src={`/images/${product.productImage}`}
          alt={product.productName}
        />
      </div>
      <div className="card__content">
        <h3>
          {product.productName} {product.price}
        </h3>
      </div>
    </div>
  );
};

export default ProductCard;
