import { useState } from "react"
import { descriptionAPI, movieListUrl } from "../constants/constants"
import { fetchAPI } from "../services/serviceAPI"

const useMovies = (search) => {
  const [movies,setMovies] = useState([])
  const [loading,setLoading] = useState(false)
  const [currentPage,setCurrentPage] = useState(1)
  const [pagesCount,setPagesCount] = useState(5)
  const [fetching,setFetching] = useState(true)

  const getMovies = async () => {
    setLoading(true)
    const data = await fetchAPI(movieListUrl+currentPage,descriptionAPI)
    setMovies([...data.films])
    setPagesCount(data.pagesCount)
    setLoading(false)
    setCurrentPage(currentPage + 1)
  }

  const addMovies = async () => {
    if (fetching && search === '') {
      const data = await fetchAPI(movieListUrl+currentPage,descriptionAPI)
      setMovies([...movies, ...data.films])
      setCurrentPage(currentPage + 1)
      setFetching(false)
    }
  }

  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100 && currentPage < pagesCount) {
      setFetching(true)
    }
  }

  return [getMovies,addMovies,scrollHandler,movies,loading,currentPage,pagesCount,fetching]

}

export default useMovies