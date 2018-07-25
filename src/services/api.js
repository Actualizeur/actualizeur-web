import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `https://actualizeur-api.herokuapp.com/`
  })
}
