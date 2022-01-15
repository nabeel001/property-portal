import { Configure, InstantSearch } from "react-instantsearch-dom";
import "./App.css";
import Map from "./components/Map";
import CustomHits from "./components/HitList";
import CustomSearchBox from "./components/SearchBar";
import searchClient from "./TypesenseConfig";
import CustomStats from "./components/CustomStats";
import ListRefinements from "./components/RefinementList";

function App() {
  return (
    <div className="App">
      <h1 className="font-title text-6xl text-center mt-10 cursor-pointer">
        Homerce
      </h1>
      <div className="mt-10 mb-32">
        <InstantSearch
          indexName="cccf0bc0-86ee-4d49-b162-609c4e85c651"
          searchClient={searchClient}
        >
          <CustomSearchBox />
          <div className="px-12 mt-3 h-10 flex justify-between items-center font-body font-semibold">
            <CustomStats />
            <ListRefinements />
          </div>

          <div className="flex justify-center my-20 w-full">
            <Map />
          </div>
          <div className="flex justify-center mt-10">
            <CustomHits />
            <Configure hitsPerPage={6} />
          </div>
        </InstantSearch>
      </div>
    </div>
  );
}

export default App;
