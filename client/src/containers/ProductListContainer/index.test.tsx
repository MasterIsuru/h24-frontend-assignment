import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { BrowserRouter } from "react-router-dom";

import ProductListContainer from "./index";

test("renders the ProductListContainer", () => {
  const initialState = {
    product: {
      theme: "dark",
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
        <ProductListContainer />
      </BrowserRouter>
    </Provider>
  );
  const linkElement = getByText(/Kategorien/i);
  expect(linkElement).toBeInTheDocument();
});
