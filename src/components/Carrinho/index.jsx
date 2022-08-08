import CardProduct from "../CardProduct";
import CardTotal from "../CardTotal";
import {
  CartDiv,
  HeaderCart,
  CarrinhoCart,
  LinhaDivisao,
  CarrinhoVazio,
} from "./style";

const Cart = ({ currentSale, setCurrentSale, exclud, setExclud }) => {
  return (
    <CartDiv>
      <HeaderCart>
        <h3>Carrinho de compras</h3>
      </HeaderCart>
      {currentSale.length > 0 ? (
        <>
          <CarrinhoCart>
            {currentSale.map((elemento, elementoId) => (
              <CardProduct
                elemento={elemento}
                currentSale={currentSale}
                setCurrentSale={setCurrentSale}
                exclud={exclud}
                setExclud={setExclud}
                key={elementoId}
              />
            ))}
          </CarrinhoCart>
          <LinhaDivisao></LinhaDivisao>
          <CardTotal
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
            setExclud={setExclud}
          />
        </>
      ) : (
        <CarrinhoVazio>
          <h2>Sua sacola está vazia</h2>
          <span>Adicionar itens</span>
        </CarrinhoVazio>
      )}
    </CartDiv>
  );
};

export default Cart;
