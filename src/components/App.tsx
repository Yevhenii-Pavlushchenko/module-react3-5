import "./App.css";

import ArticleList from "./ArticleList/ArticleList";

import type { Article } from "../types/article";
import { fetchArticles } from "../services/articleService";

import { useState, } from "react";

import SearchForm from "./SearchForm/SearchForm";
import Modal from "./Modal/Modal";
// import OrderForm from "./OrderForm/OrderForm";
// import SideEffects from "./SideEffects/SideEffects";
// import Timer from "./ClearEffects/ClearEffects";

function App() {
  //!States
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);
  //!Modal
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);


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

      {/* <OrderForm /> */}

      {/* <SideEffects /> */}

      {/* <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Hide Timer" : "Show Timer"}
      </button>
      {isOpen && <Timer />} */}

       <div>
        <h1>Main content of the page</h1>
        <button onClick={openModal}>Open Modal</button>
        {isOpen &&  <Modal onClose={closeModal} />}
    </div>
    </>
  );
}

export default App;
