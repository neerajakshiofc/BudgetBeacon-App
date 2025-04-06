import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FinancialNews = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/financial-news');
        setNews(res.data);
      } catch (err) {
        console.error(err);
        setError('Failed to load financial news.');
      }
    };

    fetchNews();
  }, []);

  if (error) return <div className="text-red-600">{error}</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">📰 Financial News</h2>
      <ul className="space-y-4">
        {news.map((item, index) => (
          <li key={index} className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium hover:underline">
              {item.title}
            </a>
            <p className="text-sm text-gray-500">
              {item.source} • {new Date(item.pubDate).toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FinancialNews;
