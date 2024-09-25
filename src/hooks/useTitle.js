import { useEffect } from "react";

export const useTitle = (title) => {
    
    useEffect(() => {
        document.title = `${title} - FilmFinder`;
    })
  
    return null;
}

// export default useTitle;
