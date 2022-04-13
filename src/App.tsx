import { useState, useEffect, ChangeEvent } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";
import { getData } from "./utils/fetch.utils";

export type Hero = {
  id: string;
  name: string;
  email: string;
};
const App = () => {
  const [searchField, setSearchField] = useState(""); //[Value,setValue]
  const [heros, setHeros] = useState<Hero[]>([]);
  const [filteredHeros, setFillterHeros] = useState(heros);

  // First argument is effect that we want to happen within the component
  //Second array contains the state or values
  //Whenever the value inside changes is when it will be run
  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((users) => setHeros(users));
    const fetchUsers = async () => {
      const users = await getData<Hero[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setHeros(users);
    };
    fetchUsers();
  }, []); // The only time to ca ll the function is when it Mount

  useEffect(() => {
    const newFilteredHeros = heros.filter((hero) => {
      return hero.name.toLocaleLowerCase().includes(searchField);
    });
    setFillterHeros(newFilteredHeros);
  }, [heros, searchField]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Cat-Hero Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="Search Heros"
        className="heros-search-Box"
      />
      <CardList heros={filteredHeros} />
    </div>
  );
};

export default App;
