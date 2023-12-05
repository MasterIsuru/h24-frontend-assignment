import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";

import PageLayout from "./index";

test("renders the PageLayout", () => {
  const initialState = {
    product: {
      theme: "dark",
    },
  };
  const mockStore = configureStore();
  let store = mockStore(initialState);

  const { getByText } = render(
    <Provider store={store}>
      <BrowserRouter>
        <PageLayout>page</PageLayout>
      </BrowserRouter>
    </Provider>
  );
  const linkElement = getByText(/page/i);
  expect(linkElement).toBeInTheDocument();
});
