import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";

import ProductCard from "./index";

test("renders the ProductCard", () => {
  const initialState = {
    product: {
      theme: "dark",
      selectedArticle: null,
    },
  };
  const mockStore = configureStore();
  let store = mockStore(initialState);

  const { getByText } = render(
    <Provider store={store}>
      <ProductCard />
    </Provider>
  );
  const linkElement = getByText(/Keine/i);
  expect(linkElement).toBeInTheDocument();
});
