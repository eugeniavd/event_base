import "../App.css";
import axios from "axios";
import { useEffect, useState } from "react";

const Feed = () => {
  const [feedContent, setFeedContent] = useState();

  const getAtomFeed = async () => {
    try {
      //ENDPOINT FOR RSS FEED GOES HERE!
      const res = await axios.get("https://www.joshwcomeau.com/rss.xml");
      setFeedContent(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAtomFeed();
  }, []);

  return (
    <div className="container">
      <div className="feedContainer">
        <button onClick={getAtomFeed}>Fetch ATOM Feed</button>
        {feedContent ? (
          <div
            dangerouslySetInnerHTML={{ __html: feedContent }}
            style={{ whiteSpace: "pre-line" }}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Feed;
