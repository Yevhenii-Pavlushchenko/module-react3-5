import type { Article } from "../../types/article";

interface ArticleHttpResponse {
  hits: Article[]
}

export default function ArticleList({ hits }: ArticleHttpResponse) { 
    return (
         <ul>
          {hits.map(({objectId, url, title}) => (
            <li key={objectId}>
              <a href={url} target='_blank'>{title}</a>
            </li>
          ))}
        </ul>
    )
};

