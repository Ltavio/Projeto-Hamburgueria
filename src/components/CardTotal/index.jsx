import { toast } from "react-toastify";
import { CardTotalDiv } from "./style";

const CardTotal = ({ currentSale, setCurrentSale, setExclud }) => {
  const valorTotal = currentSale.reduce((acc, act) => acc + act.price, 0);
  const excluirTodos = () => {
    setCurrentSale([]);
    setExclud([]);
    toast.success("Produtos removidos com sucesso!");
  };
  return (
    <CardTotalDiv>
      <div>
        <span>Total</span>
        <p>R$ {valorTotal.toFixed(2)}</p>
      </div>
      <button onClick={excluirTodos}>Remover todos</button>
    </CardTotalDiv>
  );
};

export default CardTotal;
