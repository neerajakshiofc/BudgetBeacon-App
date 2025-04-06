import { useState } from 'react';
import axios from 'axios';

function AIChatbot() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!query.trim()) return;
    setLoading(true);

    try {
      const res = await axios.post('http://localhost:5000/api/chat', { prompt: query });
      setResponse(res.data.reply);
    } catch (err) {
      setResponse("Error: Unable to get response from assistant.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 border rounded">
      <h2 className="text-xl font-bold mb-2">Ask Financial Assistant</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ask anything..."
        className="border px-2 py-1 w-full"
      />
      <button
        onClick={handleAsk}
        className="mt-2 bg-blue-500 text-white px-4 py-1 rounded"
        disabled={loading}
      >
        {loading ? 'Thinking...' : 'Ask'}
      </button>
      {response && <p className="mt-3 text-gray-700 whitespace-pre-line">{response}</p>}
    </div>
  );
}

export default AIChatbot;
