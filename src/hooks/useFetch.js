import { useState, useEffect } from "react";

export const useFetch = (apiPath, queryTerm="") => {
    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`;

    useEffect(() => {
        async function fetchMovies(){
          const response = await fetch(url);
          const json = await response.json();
          setData(json.results);
        }
        fetchMovies();
      }, [url])

  return { data }
}

// import { useState, useEffect } from "react";

// // export const useFetch = (apiPath) => {
// const useFetch = (apiPath) => {
// const [data, setData] = useState([]);
//     // const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}`
//     //const url = "https://api.themoviedb.org/3/movie/now_playing?api_key=ce34da3e5e66dfc0b0f9035b67d7e587";
//     const url = `https://api.themoviedb.org/3/${apiPath}?api_key=ce34da3e5e66dfc0b0f9035b67d7e587`;
//     // const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}`;
    
//     useEffect(() => {
//         async function fetchMovies(){
//           const response = await fetch(url);
//           const json = await response.json();
//           setData(json.results);
//         }
//         fetchMovies();
//       }, [url])

//   return { data }
// }

// // import { useEffect, useState } from 'react';

// // const useFetch = (apiPath) => {
// //     const [data, setData] = useState([]);
// //     // const url = `https://api.themoviedb.org/3/${api}?api_key=ce34da3e66dfc0b0f9035b67d7e587`;
// //     const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}`;

// //     useEffect(() => {
// //         async function fetchMovies(){
// //           const response = await fetch(url);
// //           const json = await response.json();
// //           console.log(json.results);
// //           setData(json.results);
// //         }
// //         fetchMovies()
// //       }, [url]);

// //   return { data };
// // }

// export default useFetch;
