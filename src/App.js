import { Route, Routes } from "react-router-dom";
import BlobPost from "./Components/Blog/BlobPost";
import { Blog, Footer, Header} from "./Components/exporter";

function App() {
  return (
    <div className='relative'>
      <Header />
      <Routes>
        <Route path="/" element={<Blog/>}></Route> 
        <Route path="/blog/:title" element={<BlobPost/>}></Route> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
