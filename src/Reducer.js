export const initialState = {
  basket: [
    // {
    //   id: 11212,
    //   title:
    //     "SYSTEMES DECISIONNELS ET MODELISTATION M (Français) Livre broché – 1 novembre 2018",
    //   image:
    //     "https://images-na.ssl-images-amazon.com/images/I/51eyRXOfx0L._AC_SY200_.jpg",
    //   price: 15,
    //   rating: 3,
    // },
    // {
    //   id: 11213,
    //   title:
    //     "SYSTEMES DECISIONNELS ET MODELISTATION M (Français) Livre broché – 1 novembre 2018",
    //   image:
    //     "https://images-na.ssl-images-amazon.com/images/I/51eyRXOfx0L._AC_SY200_.jpg",
    //   price: 15,
    //   rating: 3,
    // },
    // {
    //   id: 11214,
    //   title:
    //     "SYSTEMES DECISIONNELS ET MODELISTATION M (Français) Livre broché – 1 novembre 2018",
    //   image:
    //     "https://images-na.ssl-images-amazon.com/images/I/51eyRXOfx0L._AC_SY200_.jpg",
    //   price: 15,
    //   rating: 3,
    // },
  ],
};
function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };

    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];
      var index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      newBasket.splice(index, 1);

      return { ...state, basket: newBasket };

    default:
      return state;
  }
}
export default reducer;
