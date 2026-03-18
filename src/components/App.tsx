import "./App.css";

import SearchForm from "./SearchForm/SearchForm";
import ArticleList from "./ArticleList/ArticleList";

import type { Article } from "../types/article";
import { fetchArticles } from "../services/articleService";

import { useState, } from "react";
import OrderForm from "./OrderForm/OrderForm";

function App() {
  //!States
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  //!env
  // const myEnv = import.meta.env.VITE_API_KEY;
  // console.log("My env variable:", myEnv);

  //!hendlers
  const handlerSearch = async (topic: string) => {
    try {
      setIsLoading(true);
      setIsError(false);

      const data = await fetchArticles(topic);

      setArticles(data);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

 

  return (
    <>
      <h1>Search Form</h1>
      <SearchForm onSubmit={handlerSearch} />
      {isLoading && <p>Loading...</p>}
      {isError && <p>Something went wrong...</p>}
      {articles.length > 0 && <ArticleList hits={articles} />}

    
      <OrderForm/>
    </>
  );
}

export default App;
