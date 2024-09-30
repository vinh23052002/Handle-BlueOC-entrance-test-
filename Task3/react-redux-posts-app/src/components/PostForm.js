import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../features/posts/postSlice";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      title,
      body,
    };

    dispatch(createPost(newPost));

    setTitle("");
    setBody("");
  };

  return (
    <div>
      <h2>Thêm bài viết mới</h2>
      <form onSubmit={onSubmit}>
        <div
          style={{
            display: "flex",
            gap: "20px",
            textAlign: "left",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <label>Tiêu đề: </label>
            <label>Nội dung</label>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              width: "20%",
            }}
          >
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              style={{ height: "50px" }}
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
            <button
              style={{
                width: "50%",
                marginLeft: "auto",
                height: "25px",
                borderRadius: "5px ",
                borderWidth: "1px",
              }}
              type="submit"
            >
              Gửi
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
