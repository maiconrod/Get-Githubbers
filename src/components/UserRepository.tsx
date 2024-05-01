import { useState, useEffect } from "react";
import { Repository } from "../types/user";
import { BsStars } from "react-icons/bs";

const UserRepository = ({ login }: Repository) => {
  const [topProjects, setTopProjects] = useState<Repository[] | null>([]);

  const API_URL = `https://api.github.com/users/${login}/repos?sort=star`;

  useEffect(() => {
    const fetchUserRepositories = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();

        if (data && data.length > 0) {
          const sortedRepository = data.sort((a: Repository, b: Repository) => {
            if (a.stargazers_count && b.stargazers_count) {
              return b.stargazers_count - a.stargazers_count;
            } else if (a.stargazers_count) {
              return -1;
            } else if (b.stargazers_count) {
              return 1;
            } else {
              return 0;
            }
          });

          const topFiveRepository = sortedRepository.slice(0, 5);

          setTopProjects(topFiveRepository);
        }
      } catch (err) {
        console.error("Erro ao buscar os repositorios do usuário: ", err);
      }
    };

    fetchUserRepositories();
  }, [login]);

  return (
    <div className="mt-10">
      <h2 className="mb-5 text-center font-semibold text-lg animate-pulse rounded-lg">
        Repositórios Públicos de {login}
      </h2>
      <ul>
        {topProjects?.map((project) => (
          <div
            key={project.id}
            className="bg-black bg-opacity-30 my-3 py-4 rounded-xl sm:px-16 backdrop-blur-md shadow-sm shadow-gray-200 border border-gray-400"
          >
            <li>
              <a
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-400 shadow-sm shadow-black w-10 h-8 p-1 rounded-lg hover:bg-black hover:bg-opacity-30 transition-all duration-300"
              >
                {project.name}
              </a>
              <p className="my-3 text-center">{project.description}</p>
              <p className="flex items-center justify-center">
                <BsStars className="mr-2" /> {project.stargazers_count}{" "}
                Avaliações
              </p>
              <p className="mt-3 font-semibold">
                Linguagem: {project.language}
              </p>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default UserRepository;
