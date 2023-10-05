import React, { useEffect, useState } from 'react';

function DisplayQuotes() {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.api-ninjas.com/v1/quotes?category=dreams',
      {
        headers: { 'X-Api-Key': 'vkwnFBG8qqMMKrgc74EHuQ==5Fewj66r2fKW1KKj' },
      })

      .then((response) => {
        if (!response.ok) {
          throw new Error('Network was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        setQuote(data[randomIndex].quote);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <p>
        Error: Sorry there is an error
        {error.message}
      </p>
    );
  }

  return (
    <div className="display-quotes">
      <h2>This is your days quote:</h2>
      <p>{quote}</p>
    </div>
  );
}
export default DisplayQuotes;
