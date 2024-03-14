import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Layout} from "./components/layout";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import React from "react";
function App() {
  return (
      <BrowserRouter basename='/'>
          <Layout>
              <Routes>
                  <Route path="/" element={<Posts />} />
                  <Route path="*" element={<Posts />} />
                  <Route path="posts" element={<Posts />} />
                  <Route path="post/:id" element={<Post />} />
              </Routes>
          </Layout>
      </BrowserRouter>
  );
}

export default App;
