import { HeaderPage, Button } from "./style";
import logoHamburg from "../../logo.png";
import ButtonSearch from "../ButtonSearch";

const Header = ({ showProducts, setFilterSearch }) => {
  return (
    <HeaderPage>
      <img src={logoHamburg} alt="logo" />
      <ButtonSearch
        showProducts={showProducts}
        setFilterSearch={setFilterSearch}
      />
    </HeaderPage>
  );
};

export default Header;
