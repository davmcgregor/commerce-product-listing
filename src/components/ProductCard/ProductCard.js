import './ProductCard.css';

const ProductCard = ({product}) => {
  return (
    <div className="card">
      {product.productName} {product.price}
    </div>
  );
};

export default ProductCard;
