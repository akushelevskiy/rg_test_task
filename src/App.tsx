import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Layout} from "./components/Layout";
import PostsPage from "./pages/Posts";
import PostPage from "./pages/Post";
import React from "react";
function App() {
  return (
      <BrowserRouter basename='/'>
          <Layout>
              <Routes>
                  <Route path="/" element={<PostsPage />} />
                  <Route path="*" element={<PostsPage />} />
                  <Route path="posts" element={<PostsPage />} />
                  <Route path="post/:id" element={<PostPage />} />
              </Routes>
          </Layout>
      </BrowserRouter>
  );
}

export default App;
