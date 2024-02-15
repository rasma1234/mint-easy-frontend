import "./news.scss";
import { useEffect, useState } from "react";
import axios from "axios";

interface NewsItem {
  title: string;
  description: string;
  url: string;
}

interface NewsProps {
  interval: number; // in milliseconds
}

const News: React.FC<NewsProps> = ({ interval }) => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const fetchNews = () => {
      axios
        .get(
          `https://newsapi.org/v2/everything?q=finance&apiKey=${import.meta.env.VITE_REACT_APP_NEWS_API_KEY}`,
        )
        .then((response) => setNews(response.data.articles))
        .catch((error) => console.error("Error fetching news:", error));
    };

    fetchNews();
  }, []);

  useEffect(() => {
    if (news.length === 0) {
      return; // Do nothing if news array is empty
    }

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % news.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [news, interval]);

  if (news.length === 0) {
    return <div>Loading...</div>;
  }

  const currentNews = news[currentIndex];

  return (
    <div>
      <h2>{currentNews?.title || "No Title"}</h2>
      <p>{currentNews?.description || "No Description"}</p>
      <a href={currentNews?.url} target="_blank" rel="noopener noreferrer">
        Read more
      </a>
    </div>
  );
};

export default News;
