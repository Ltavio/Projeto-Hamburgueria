import { CardProductDiv } from "./style";
import imgHamburguer from "../../hamburguer.png";
import { BsFillTrashFill } from "react-icons/bs";

const CardProduct = ({
  elemento,
  currentSale,
  setCurrentSale,
  exclud,
  setExclud,
}) => {
  const excluirElemento = (elementoExclud) => {
    setExclud(
      currentSale.filter(
        (elemento, elementoId) =>
          elementoId !== currentSale.indexOf(elementoExclud)
      )
    );
    setCurrentSale([...exclud]);
  };
  return (
    <CardProductDiv>
      <div>
        <figure>
          <img src={elemento.img} alt="" />
        </figure>
        <div>
          <h3>{elemento.name}</h3>
          <p>{elemento.category}</p>
        </div>
      </div>
      <button onClick={() => excluirElemento(elemento)}>remover</button>
    </CardProductDiv>
  );
};

export default CardProduct;
