import { Route, Routes } from "react-router-dom";
import "./App.css";
import ArticlePage from "./pages/Article";
import EditorPage from "./pages/Editor";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ArticlePage />} />
      <Route path="/editor" element={<EditorPage />} />
    </Routes>
  );
}

export default App;
