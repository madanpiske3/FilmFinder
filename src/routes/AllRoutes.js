import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetail, Search, PageNotFound } from "../pages";
// import { ScrollRestoration } from "react-router-dom";
export const AllRoutes = () => {
  return (
    // <div className="dark:bg-#f87171">
      <div className="dark:bg-darkbg">
        {/* <ScrollRestoration /> */}
        <Routes>
            <Route path="" element={<MovieList apiPath="movie/now_playing" title="Now Playing"/>} />
            <Route path="movie/:id" element={<MovieDetail/>} />
            <Route path="movies/popular" element={<MovieList apiPath="movie/popular" title="Popular" />} />
            <Route path="movies/top" element={<MovieList apiPath="movie/top_rated" title="Top"/>} />
            <Route path="movies/upcoming" element={<MovieList apiPath="movie/upcoming" title="Upcoming" />} />
            <Route path="search" element={<Search apiPath="search/movie" />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </div>
  )
}

// import { Routes, Route } from "react-router-dom";
// import { MovieList, MovieDetail, Search, PageNotFound } from "../pages";

// export const AllRoutes = () => {
//   return (
//     <div className="dark:bg-slate-800">
//         <Routes>
//             <Route path="" element={<MovieList apiPath="movie/now_playing"/>} />
//             <Route path="movie/:id" element={<MovieDetail />} />
//             <Route path="movies/popular" element={<MovieList apiPath="movie/popular"/>} />
//             <Route path="movies/top" element={<MovieList apiPath="movie/top_rated"/>} />
//             <Route path="movies/upcoming" element={<MovieList apiPath="movie/upcoming"/>} />
//             {/* <Route path="/" element={<MovieDetail />} /> */}
//             <Route path="search" element={<Search />} />
//             <Route path="*" element={<PageNotFound />} />        
//         </Routes>
//     </div>
//   )
// }
