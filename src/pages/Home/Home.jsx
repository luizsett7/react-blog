import styles from "./Home.module.css";

import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import PostDetail from "../../components/PostDetail";

const Home = () => {
  const [query, setQuery] = useState("");
  const { documents: posts, loading } = useFetchDocuments("posts");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.home}>
      <h1>View our most recent posts</h1>
      <form onSubmit={handleSubmit} className={styles.search_form}>
        <input
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for tags"
        />
        <button className="btn btn-dark">Search</button>
      </form>
      <div>
        <h1>Posts...</h1>
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Não foram encontrados posts</p>
            <Link to="/posts/create" className="btn">
              Create first post
            </Link>
          </div>
        )}
        {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default Home;
