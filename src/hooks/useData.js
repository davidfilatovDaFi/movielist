import { fetchAPI, getUrl } from '../services/serviceAPI'
import { descriptionAPI } from '../constants/constants'
import { useState } from 'react'

const useData = (id) => {

  const [movie,setMovie] = useState({})
  const [staff,setStaff] = useState({})
  const [budget,setBudget] = useState({})
  const [loading,setLoading] = useState(false)

  const getData = async () => {
    setLoading(true)
    const dataMovie = await fetchAPI(getUrl('movie',id),descriptionAPI,)
    const dataStaff = await fetchAPI(getUrl('staff',id),descriptionAPI)
    const dataBudget = await fetchAPI(getUrl('budget',id),descriptionAPI)
    setMovie(dataMovie)
    setStaff(dataStaff)
    const newBudget = {}
  
    for (let i = 0; i < dataBudget.items.length; i++) {
        newBudget[dataBudget.items[i].type] = [dataBudget.items[i].amount]
    }
  
    setBudget(newBudget)
    setLoading(false)
  }
  return [getData,movie,staff,budget,loading]
}

export default useData