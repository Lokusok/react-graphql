import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./main";
import Post from "./post";
import CreatePost from "./create-post";
import UpdatePost from "./update-post";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="">
            <Route index element={<Main />} />
            <Route path="/posts/:currentPage" element={<Main />} />
            <Route path="/post/:postId" element={<Post />} />
            <Route path="/post/create" element={<CreatePost />} />
            <Route path="/post/:postId/update" element={<UpdatePost />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
