import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { BrowserRouter } from "react-router-dom";

import ProductPage from "./index";

test("renders the ProductPage", () => {
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
        <ProductPage />
      </BrowserRouter>
    </Provider>
  );
  const linkElement = getByText(/Keine/i);
  expect(linkElement).toBeInTheDocument();
});
