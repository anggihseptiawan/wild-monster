import React, { useState, ChangeEvent } from "react";
import { Cardlist } from "./components/CardList";
import { SearchBox } from "./components/SearchBox";
import { useGetFilteredMonsters } from "./hooks/useGetFilteredMonsters";
import { useFetch } from "./hooks/useFetch";

const App = () => {
  const [searchField, setSearchField] = useState("");

  const {
    data: monsters,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/users");
  const filteredMonsters = useGetFilteredMonsters(monsters, searchField);

  const handleInputChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setSearchField(target.value);
  };

  if (error.status) return <p>{error.msg}</p>;

  return (
    <div className="bg-teal-200 min-h-screen">
      <div className="container mx-auto px-4 pt-6 pb-14">
        <h1 className="text-center font-bold text-2xl">Wild Monster</h1>
        <SearchBox
          placeholder="search monster.."
          handleChange={handleInputChange}
        />
        {loading ? <p>Loading...</p> : <Cardlist monsters={filteredMonsters} />}
      </div>
    </div>
  );
};

export default App;
