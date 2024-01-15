import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Faq from "./components/FAQ";
import Blog from "./components/Blog";
import Blog1 from "./components/Blog1";
import Blog2 from "./components/Blog2";
import Blog3 from "./components/Blog3";
import Blog4 from "./components/Blog4";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route index element={<Home />} />
        <Route path="faq" element={<Faq />} />
        <Route path="blog" element={<Blog />} />
        <Route
          path="blog/10-ways-to-improve-launch-campaign"
          element={<Blog1 />}
        />
        <Route path="blog/improving-site-seo" element={<Blog2 />} />
        <Route path="blog/building-blocks-for-website" element={<Blog3 />} />
        <Route path="blog/improve-web-design" element={<Blog4 />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
