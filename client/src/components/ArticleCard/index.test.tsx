import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";

import ArticleCard from "./index";

const data = {
  name: "Schminktisch „Sherry“ Weiß Hochglanz mit",
  variantName: "Weiß - Holz teilmassiv - 120 x 75 x 55 cm",
  prices: {
    currency: "EUR",
    regular: {
      value: 36990,
    },
  },
  images: [
    {
      path: "https://cdn1.home24.net/images/media/catalog/product/200x200/png/b/f/bf4bfa1334da4f2d859661c9bcc82fff.cropped-99-30-770-944.processed.webp",
    },
  ],
};

test("renders the ArticleCard", () => {
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
        <ArticleCard article={data} />
      </BrowserRouter>
    </Provider>
  );
  const linkElement = getByText(/Schminktisch/i);
  expect(linkElement).toBeInTheDocument();
});
