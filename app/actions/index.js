export const searchMovie = (draftMessage, id) => {
  return {
    type: 'SEARCH_MOVIE',
    draftMessage,
    id
  }
}
