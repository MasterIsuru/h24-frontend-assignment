import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";

import Footer from "./index";

test("renders the Footer", () => {
  const initialState = {
    product: {
      theme: "dark",
    },
  };
  const mockStore = configureStore();
  let store = mockStore(initialState);

  const { getByText } = render(
    <Provider store={store}>
      <Footer />
    </Provider>
  );
  const linkElement = getByText(/Euro/i);
  expect(linkElement).toBeInTheDocument();
});
