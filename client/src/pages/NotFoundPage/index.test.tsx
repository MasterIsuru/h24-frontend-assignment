import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";

import NotFoundPage from "./index";

test("renders the NotFoundPage", () => {
  const initialState = {
    product: {
      theme: "dark",
    },
  };
  const mockStore = configureStore();
  let store = mockStore(initialState);

  const { getByText } = render(
    <Provider store={store}>
      <NotFoundPage />
    </Provider>
  );
  const linkElement = getByText(/Oops/i);
  expect(linkElement).toBeInTheDocument();
});
