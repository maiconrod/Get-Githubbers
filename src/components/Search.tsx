import { KeyboardEvent } from "react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { SearchProps } from "../types/user";

const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState("");

  const handleKeyDown = (ev: KeyboardEvent) => {
    if (ev.key === "Enter") {
      loadUser(userName);
      setUserName('')
    }
  };

  return (
    <div>
      <h2 className="p-3 text-center text-sm">Busque por um usuário e conheça seus melhores repositórios</h2>
      <div className="flex items justify-center mb-10">
        <input
          value={userName}
          type="text"
          placeholder="Digite um usuário"
          onChange={(ev) => setUserName(ev.target.value)}
          onKeyDown={handleKeyDown}
          className=" border border-gray-400 rounded-lg p-1 bg-transparent hover:bg-black hover:bg-opacity-30 hover:text-white focus:outline-none transition-all duration-300 0 mr-2"
        />
        <button onClick={() => loadUser(userName)} className="border border-gray-400 shadow-sm shadow-black w-10 h-8 p-1 rounded-lg flex items-center justify-center hover:bg-black hover:bg-opacity-30 transition-all duration-300">
          <BsSearch/>
        </button>
      </div>
    </div>
  );
};

export default Search;
