import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";

import Header from "./index";

test("renders the Header", () => {
  const initialState = {
    product: {
      theme: "dark",
    },
  };
  const mockStore = configureStore();
  let store = mockStore(initialState);

  const { getByPlaceholderText } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Header hasActions={true} />
      </BrowserRouter>
    </Provider>
  );
  const linkElement = getByPlaceholderText(/Wonach/i);
  expect(linkElement).toBeInTheDocument();
});
