import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, searchStringChanged } from "../features/posts/postSlice";

const PostList = () => {
  const dispatch = useDispatch();
  const { posts, searchString, loading, error } = useSelector(
    (state) => state.posts
  );

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="post-list" style={{ textAlign: "left" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Danh sách bài viết
      </h2>
      <input
        type="text"
        placeholder="Tìm kiếm bài viết"
        value={searchString}
        onChange={(event) => {
          dispatch(searchStringChanged(event.target.value));
        }}
        style={{ width: "30%", height: "30px", borderRadius: "5px" }}
      />
      {posts
        .filter((post) =>
          post.title
            .trim()
            .toLowerCase()
            .includes(searchString.trim().toLowerCase())
        )
        .map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
    </div>
  );
};

export default PostList;
