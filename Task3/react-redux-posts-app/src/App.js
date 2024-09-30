import "./App.css";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

function App() {
  return (
    <div className="App" style={{ marginLeft: "150px", marginRight: "150px" }}>
      <PostForm />
      <hr />
      <PostList />
    </div>
  );
}

export default App;
