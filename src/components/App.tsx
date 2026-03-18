
import axios from 'axios';
import './App.css'
// import OrderForm from './components/OrderForm/OrderForm';
import SearchForm from './SearchForm/SearchForm';
import { useState } from 'react';
import ArticleList from './ArticleList/ArticleList';
import type { Article } from '../types/article';


interface ArticleHttpResponse {
  hits: Article[]
}


function App() {

// const hadleOrder = (data: string) => {
//   console.log("Order received from:", data);
  // }
  
  const [articles, setArticles] = useState<Article[]>([]);

  const [isLoading, setIsLoading] = useState(false);
  
  const handlerSearch = async (topic: string) => {
    setIsLoading(true);
    
    const responce = await axios.get<ArticleHttpResponse>(`https://hn.algolia.com/api/v1/search?query=${topic}`)
    
    setIsLoading(false);
    setArticles(responce.data.hits);
  }

  return (
    <>
      {/* <h1>Order Form</h1> */}
      {/* <OrderForm onSubmit={hadleOrder} /> */}

      <h1>Search Form</h1>
      <SearchForm onSubmit={handlerSearch} />
      {isLoading && <p>Loading...</p>}
      {articles.length > 0 && <ArticleList hits={articles} />}

    </>
  )
}

export default App
