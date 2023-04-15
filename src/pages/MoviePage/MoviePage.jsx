import React, { useEffect, useState } from 'react'
import { fetchAPI } from '../../services/serviceAPI'
import { descriptionAPI, movieListUrl, movieUrl } from '../../constains/constains'

export default function MoviePage() {

  const [movie,setMovie] = useState({})

  const getMovie = async () => {
    const data = await fetchAPI(movieUrl+'434',descriptionAPI)
    console.log(data)
    setMovie(data)
  }

  useEffect(() => {
    getMovie()
  }, [])
  
  return (
    <div>
      {movie.nameRu}
    </div>
  )
}
