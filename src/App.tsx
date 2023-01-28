import { FC } from "react"
import "./style.css";

import MovieHeader from "./smart-components/MovieHeader";
import MoviePage from "./pages/MoviePage";

const App: FC<{}> = () => {
  return (
    <div className="App">
      <MovieHeader />
      <MoviePage />
    </div>
  )
}

export default App