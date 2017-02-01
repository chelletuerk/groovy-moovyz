import fetch from 'isomorphic-fetch'

// export const searchMovie = (draftMessage, payload) => {
//   return (dispatch) => {
//     return Promise.all([
//       dispatch(fetchData({draftMessage, payload, action: SEARCH_MOVIE}))
//     ])
//    }
//   }

export const searchMovie = (draftMessage, payload) => {
  return {
    type: 'SEARCH_MOVIE',
    payload,
    draftMessage
  }
}

export const fetchData = (draftMessage) => {
      return (dispatch) => {
    fetch('https://api.themoviedb.org/3/movie/550?api_key=5cfdb8d0915ecb8d60d107cef74a22e8')
        .then(response => {
          return response.json()
        })
        // .then(json => {
        //
        //   dispatch({type: action, json})
        // })
        .then( json => {
          console.log(json)
          dispatch(searchMovie(draftMessage, json))
        })

        .catch(err => console.log('err'))
      }
    // .then(payload => dispatch(searchMovie(draftMessage, payload)))
}
