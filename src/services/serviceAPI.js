export async function fetchAPI (url,description) {
  try {
    const response = await fetch(url,description)
    const data = await response.json()
    return data
  } catch (error) {
    return error
  }
}

export const getUrl = (type,id) => {
  switch (type) {
    case 'movie' : return `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`
    case 'budget' : return `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/box_office`
    case 'staff' : return `https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=${id}`
  }
}