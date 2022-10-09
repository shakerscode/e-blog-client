import { Route, Routes } from "react-router-dom";
import { Blog, Footer, Header} from "./Components/exporter";

function App() {
  return (
    <div className='relative'>
      <Header />
      <Routes>
        <Route path="/"element={<Blog/>}></Route> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
