export type UserData = {
    name: string;
    avatar_url: string;
    bio: string;
    login: string;
    location: string;
    followers: number;
    following: number;
  };
  
  export type SearchProps = {
    loadUser: (userName: string) => Promise<void>;
  };
  
  export type Repository = {
    login?: string,
    id?: number,
    name?: string,
    html_url?: string,
    description?: string,
    stargazers_count?: number,
    language?: string
  }