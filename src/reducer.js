export const initialState = {
  favorites: [],
  user: null,
};

const reducer = (state, action) => {
  console.log(action, "action");
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.favorites],
      };

    case "REMOVE_FROM_FAVORITE":
      // this.setState((preState) => ({
      //   ...preState,
      //   favorites: preState.favorites.filter(
      //     (res) => res.imdbID !== fav.imdbID
      //   ),
      // }));
      const initialFavorites = state.favorites;
      const newFavorites = initialFavorites.filter(
        (res) => res.imdbID !== action.favorites.imdbID
      );

      return { ...state, favorites: newFavorites };

    default:
      return state;
  }
};

export default reducer;
