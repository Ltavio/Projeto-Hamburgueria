import { DivButton } from "./style";

const ButtonSearch = ({ showProducts, setFilterSearch }) => {
  return (
    <DivButton>
      <form onSubmit={showProducts}>
        <input
          type="search"
          placeholder="Digitar pesquisa"
          maxLength={19}
          onChange={(e) => setFilterSearch(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </form>
    </DivButton>
  );
};

export default ButtonSearch;
