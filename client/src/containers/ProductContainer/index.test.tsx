import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { BrowserRouter } from "react-router-dom";

import ProductContainer from "./index";

test("renders the ProductContainer", () => {
  const initialState = {
    product: {
      theme: "dark",
      selectedArticle: null,
    },
    category: {
      productCategories: [],
    },
  };
  const mockStore = configureStore();
  let store = mockStore(initialState);

  const { getByText } = render(
    <Provider store={store}>
      <BrowserRouter>
        <ProductContainer />
      </BrowserRouter>
    </Provider>
  );
  const linkElement = getByText(/Keine/i);
  expect(linkElement).toBeInTheDocument();
});
