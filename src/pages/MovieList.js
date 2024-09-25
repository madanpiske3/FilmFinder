import { useFetch } from "../hooks/useFetch";
import { Card } from "../components";
import { useTitle } from "../hooks/useTitle";

export const MovieList = ({apiPath, title}) => {
  const { data: movies } = useFetch(apiPath);

  useTitle(title);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">       
          { movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          )) }          
        </div>
      </section>
    </main>
  )
}


// // import { Link } from "react-router-dom";
// // import logo from "../assets/logo.png"
// //import { useState } from "react";
// //import { useEffect } from "react";
// import { Card } from "../components/Card";
// import useFetch from "../hooks/useFetch";
// // import { useFetch } from "../hooks/useFetch";
// export const MovieList = ({apiPath}) => {
//   // console.log(api);

//   // const [movies, setMovies] = useState([]);
//   // const { data: movies } = useFetch("https://api.themoviedb.org/3/movie/now_playing?api_key=ce34da3e66dfc0b0f9035b67d7e587")

//   const { data: movies } = useFetch({apiPath});
//   // console.log(api);

//   return (
//     <main>
//       <section className="max-w-7xl mx-auto py-7">
//         <div className="flex justify-start flex-wrap">       
//           { movies.map((movie) => (
//             <Card key={movie.id} movie={movie}/>
//           ))} 
//         </div>
//       </section>
//     </main>
//   )
// }
