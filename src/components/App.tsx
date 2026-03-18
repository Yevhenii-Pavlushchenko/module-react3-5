
import "./App.css";
// import OrderForm from './components/OrderForm/OrderForm';
import SearchForm from "./SearchForm/SearchForm";
import { useState } from "react";
import ArticleList from "./ArticleList/ArticleList";
import type { Article } from "../types/article";
import { fetchArticles } from "../services/articleService";



function App() {
  // const hadleOrder = (data: string) => {
  //   console.log("Order received from:", data);
  // }

  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

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
      {/* <h1>Order Form</h1> */}
      {/* <OrderForm onSubmit={hadleOrder} /> */}

      <h1>Search Form</h1>
      <SearchForm onSubmit={handlerSearch} />
      {isLoading && <p>Loading...</p>}
      {isError && <p>Something went wrong...</p>}
      {articles.length > 0 && <ArticleList hits={articles} />}
    </>
  );
}

export default App;
