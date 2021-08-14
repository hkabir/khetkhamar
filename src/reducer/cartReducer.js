export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      if (!state.cartItems.find((item) => item.id === action.payload.id)) {
        state.cartItems.push({
          ...action.payload,
          quantity: state.quantity,
        });
      }

      return {
        ...state,

        cartItems: [...state.cartItems],
      };
    case "INCREMENTITEM":
      const updatedCart = state.cartItems.map((curElem) => {
        if (curElem.id === action.payload) {
          return { ...curElem, quantity: curElem.quantity + 1 };
        }
        return curElem;
      });

      return { ...state, cartItems: updatedCart };

    case "DECREMENTITEM":
      const updatedCartd = state.cartItems
        .map((curElem) => {
          if (curElem.id === action.payload) {
            return { ...curElem, quantity: curElem.quantity - 1 };
          }
          return curElem;
        })
        .filter((curElem) => curElem.quantity !== 0);
      return { ...state, cartItems: updatedCartd };

    case "REMOVE_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter((curElem) => {
          return curElem.id !== action.payload;
        }),
      };

    case "GET_TOTAL":
      let { totalAmount } = state.cartItems.reduce(
        (accum, curVal) => {
          let { productprice, quantity } = curVal;

          let updatedTotalAmount = productprice * quantity;
          accum.totalAmount += updatedTotalAmount;
          return accum;
        },
        {
          totalAmount: 0,
        }
      );
      return { ...state, totalAmount };
    default:
      return state;
  }
};
