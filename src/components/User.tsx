import { Link } from "react-router-dom";
import { UserData } from "../types/user";
import { MdLocationPin } from "react-icons/md";
import UserRepository from "./UserRepository";
import { useState } from "react";

const User = ({
  name,
  avatar_url,
  bio,
  login,
  location,
  followers,
  following,
}: UserData) => {
  const [showPortfolio, setShowPortfolio] = useState(false)

  const handlePortfolioClick = () => {
    setShowPortfolio(true)
  }

  return (
    <div className="grid-cols-1 justify-items-center items-center">
      <img
        src={avatar_url}
        alt={name}
        className="p-2 w-full h-full object-cover block mx-auto rounded-full border-b border-t py-4 max-w-60"
      />
      <div className="bg-black bg-opacity-30 backdrop-blur-md py-4 px-2 border border-gray-400 my-3 mt-10 sm:mt-20 rounded-xl ">
        <h1 className="font-bold mb-3 pb-2 border-b-2 border-gray-300">
          {name}
        </h1>
        <p className="text-md my-4 font-medium">Sobre:</p>
        <p className="border-b-2 pb-2 border-gray-300">{bio}</p>
        <p className="text-md mt-4 mb-1 font-medium">Username:</p>
        <p className="border-b-2 pb-2 border-gray-300">{login}</p>
        {location && (
          <div className="mt-4">
            <span>Localização:</span>
            <div className="flex items-center justify-center gap-2 mt-2">
              <MdLocationPin />
              <span>{location}</span>
            </div>
          </div>
        )}
        <div>
          <p>Seguidores: {followers}</p>
          <p>Seguindo: {following}</p>
        </div>
      </div>
      <Link to={`/`} onClick={handlePortfolioClick} className="px-5 border border-gray-400 shadow-sm shadow-black w-10 h-8 p-1 rounded-lg bg-black bg-opacity-30 hover:bg-black hover:bg-opacity-50 transition-all duration-300">Ver melhores projetos</Link>
      {showPortfolio && (
        <UserRepository login={login}/>
      )}
    </div>
  );
};

export default User;
