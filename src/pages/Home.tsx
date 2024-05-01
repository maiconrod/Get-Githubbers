import { UserData } from "../types/user";
import Search from "../components/Search";
import React from "react";

import { useState } from "react";
import User from "../components/User";
import Error from "../components/Error";
import { Link } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useState<UserData | null>(null);
  const [error, setError] = useState(false);

  const handleHomeLinkCick = () => {
    setUser(null);
  };

  const loadUser = async (userName: string) => {
    setError(false);
    setUser(null);

    const res = await fetch(`https://api.github.com/users/${userName}`);

    const data = await res.json();

    if (res.status === 404) {
      setError(true);
      return;
    }

    const { name, avatar_url, bio, login, location, followers, following } =
      data;

    const userData: UserData = {
      name,
      avatar_url,
      bio,
      login,
      location,
      followers,
      following,
    };

    setUser(userData);
  };

  return (
    <div className="p-5 sm:p-20 bg-transparent bg-opacity-25 backdrop-blur-md shadow-lg shadow-gray-500 border border-gray-400 text-center flex justify-center items-center rounded-2xl">
      <div>
        <Link
          to={"/"}
          className="text-2xl font-bold pb-4 pt-2 animate-bounce"
          onClick={() => handleHomeLinkCick()}
        >
          Get Githubbers
        </Link>
        <h3>E aí, bora saber sobre os GitHubbers?</h3>
        <Search loadUser={loadUser} />
        {user && <User {...user} />}
        {error && <Error />}
      </div>
    </div>
  );
};

export default Home;
