"use client";

import { useState, useEffect } from "react";
// import components here

export default function Home() {

  // define stateful variables here
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    const url = 'https://api.artsearch.io/artworks/random';
    const key = process.env.NEXT_PUBLIC_API_KEY;

    fetch(url, {
      method: 'GET',
      headers: {
        'api-key': key!
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('There was a problem with the fetch operation:', error));

  }, [])

  return (
    <div>

    </div>
  );
}
