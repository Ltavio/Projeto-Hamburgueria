import { ListaProdutosDiv } from "./style";
import React from "react";
import Product from "../Product";

const ProductsList = ({
  produtos,
  handleClick,
  produtoFiltrado,
  setProdutoFiltrado,
}) => {
  /* console.log(produto); */
  return (
    <ListaProdutosDiv>
      {produtoFiltrado.length > 0
        ? produtoFiltrado.map((elemento, elementoId) => (
            <Product
              elemento={elemento}
              key={elementoId}
              handleClick={handleClick}
            />
          ))
        : produtos.map((elemento, elementoId) => (
            <Product
              elemento={elemento}
              key={elementoId}
              handleClick={handleClick}
            />
          ))}
    </ListaProdutosDiv>
  );
};

export default ProductsList;
