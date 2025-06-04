import { useState } from 'react';

export default function LinkForm() {
  const [url, setUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url })
    });
    const data = await res.json();
    alert(data.message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Enter a link" />
      <button type="submit">Submit</button>
    </form>
  );
}
