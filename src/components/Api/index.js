import axios from'axios'

const API_URL = 'http://localhost:8000';

//Get All Movies
export async function GetMovieList() {
  const { data } = await axios.get( `${API_URL}/api/v1/movies`);
  return data;
}

//Get Movie By ID
export async function GetMovieListByID({id}) {
  const { data } = await axios.get( `${API_URL}/api/v1/movies/${id}`);
  return data;
}

//Get Questions By Movie
export async function GetQuesionByMovies({id}) {
  const { data } = await axios.get( `${API_URL}/api/v1/movies/quesAns/${id}`);
  return data;
}

//LeaderBoard 

export async function LeaderBoard() {
  const { data } = await axios.get(`/api/v1/leaderboard`,{
    headers: {
      'Access-Control-Allow-Origin': true,
    },
  });
  return data;
}