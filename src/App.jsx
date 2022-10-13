import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Carrinho";
import { useEffect, useState } from "react";
import { Toast } from "./components/toast/index";
import { toast } from "react-toastify";

function App() {
  const [produtos, setProdutos] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [exclud, setExclud] = useState([]);
  const [filterSearch, setFilterSearch] = useState("");
  const [produtoFiltrado, setProdutoFiltrado] = useState([]);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((resp) => resp.json())
      .then((resp) => setProdutos(resp))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    setCurrentSale(exclud);
  }, [exclud]);

  const showProducts = (e, elementoPesquisado) => {
    e.preventDefault();

    setProdutoFiltrado(
      produtos.filter((element) =>
        element.name.toLowerCase().includes(filterSearch.toLowerCase())
      )
    );
  };
  const handleClick = (idProduto) => {
    console.log();
    if (!currentSale.find((element) => element.id === idProduto)) {
      setCurrentSale((oldItem) => [
        ...oldItem,
        produtos.find((elem) => elem.id === idProduto),
      ]);

      setExclud((oldItem) => [
        ...oldItem,
        produtos.find((elem) => elem.id === idProduto),
      ]);
    } else {
      toast.error("Não pode adicionar produto duplicado!");
    }
  };

  return (
    <div className="App">
      <Toast />
      <Header showProducts={showProducts} setFilterSearch={setFilterSearch} />
      <div className="main">
        <ProductsList
          produtos={produtos}
          handleClick={handleClick}
          produtoFiltrado={produtoFiltrado}
          setProdutoFiltrado={setProdutoFiltrado}
        />
        <Cart
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
          exclud={exclud}
          setExclud={setExclud}
        />
      </div>
    </div>
  );
}

export default App;
