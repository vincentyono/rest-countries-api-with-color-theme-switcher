import Header from "../../components/header";
import SearchBox from "../../components/search";
import Filter from "../../components/filter";
import { Main, FilterContainer, CountryContainer } from "./style";

export default function HomePage() {
  return (
    <>
      <Header />
      <Main>
        <FilterContainer>
          <SearchBox />
          <Filter />
        </FilterContainer>
        <CountryContainer></CountryContainer>
      </Main>
    </>
  );
}
