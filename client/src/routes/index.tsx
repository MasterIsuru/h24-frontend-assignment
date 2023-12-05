import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { LOADING_MESSAGE } from "../utils/constants";
import { HomeLayout, PageLayout } from "../layouts";
import RoutePaths from "./RoutePaths";

const ProductPage = lazy(() => import("../pages/ProductPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));
const ProductListPage = lazy(() => import("../pages/ProductListPage"));

const Router = () => {
  return (
    <Suspense fallback={LOADING_MESSAGE}>
      <Routes>
        <Route
          path={RoutePaths.root}
          element={
            <HomeLayout>
              <ProductListPage />
            </HomeLayout>
          }
        />
        <Route
          path={RoutePaths.product}
          element={
            <HomeLayout>
              <ProductPage />
            </HomeLayout>
          }
        />
        <Route
          path={RoutePaths.notFound}
          element={
            <PageLayout>
              <NotFoundPage />
            </PageLayout>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default Router;
