import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";

import HomeLayout from "./index";

test("renders the HomeLayout", () => {
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
        <HomeLayout>home</HomeLayout>
      </BrowserRouter>
    </Provider>
  );
  const linkElement = getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});
