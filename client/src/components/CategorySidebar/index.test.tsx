import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";

import CategorySidebar from "./index";

test("renders the CategorySidebar", () => {
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
        <CategorySidebar />
      </BrowserRouter>
    </Provider>
  );
  const linkElement = getByText(/Kategorien/i);
  expect(linkElement).toBeInTheDocument();
});
