import React, { useEffect, useState } from "react";

import { createClient } from "pexels";

function App(props) {
  const [selectedimage, setSelectedimage] = useState({});
  const [imageList, setImageList] = useState([]);

  const client = createClient(
    "563492ad6f9170000100000174ec57b3e4194e439c0c429eef9d3cd4"
  );
  const query = "Car";

  useEffect(() => {
    client.photos.search({ query, per_page: 20 }).then((response) => {
      console.log("response", response);
      setImageList(response.photos);
      setSelectedimage(response.photos[0].src.landscape);
    });
  }, []);

  return (
    <div className="App">
      <div class="header">
        <h2>Cars List Header</h2>
      </div>
      <div className="container">
        <img src={selectedimage} alt="Selected" className="selected" />
        <div className="grid-container">
          {imageList.map((img) => (
            <div>
              <img
                style={{
                  border:
                    selectedimage === img.src.original
                      ? "4px solid purple"
                      : "",
                }}
                src={img.src.original}
                alt="images"
                onClick={() => setSelectedimage(img.src.original)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="footer">
        <h2>Footer</h2>
      </div>
    </div>
  );
}

export default App;
