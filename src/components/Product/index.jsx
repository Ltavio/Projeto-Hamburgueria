import { CardProduct, DetalhesProduct } from "./style";
import imgHamburguer from "../../hamburguer.png";

/* elementoName={elemento.name} 
elementoCategory={elemento.category}
elementoPrice={elemento.price}
elementoImg={elemento.img} */

const Product = ({ elemento, handleClick }) => {
  return (
    <CardProduct>
      <figure>
        <img src={elemento.img} alt="imagem produto" />
      </figure>
      <DetalhesProduct>
        <h2>{elemento.name}</h2>
        <p>{elemento.category}</p>
        <span>R$ {elemento.price.toFixed(2)}</span>
        <button onClick={() => handleClick(elemento.id)}>Adicionar</button>
      </DetalhesProduct>
    </CardProduct>
  );
};

export default Product;
