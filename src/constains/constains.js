export const movieListUrl = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page='

export const descriptionAPI = {
  method: 'GET',
  headers: {
      'X-API-KEY': '30d403ff-e11b-4650-8973-c33043daef63',
      'Content-Type': 'application/json',
  },
}

export const getUrl = (type,id) => {
  switch (type) {
    case 'movie' : return `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`
    case 'budget' : return `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/box_office`
    case 'staff' : return `https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=${id}`
  }
}