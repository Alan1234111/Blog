import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home, { loader as HomeLoader } from "./pages/Home";
import SinglePost, {
  loader as SinglePostLoader,
} from "./pages/SinglePost";
import Tags, { loader as TagsLoader } from "./pages/Tags";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ErrorBoundary from "./pages/ErrorBoundary";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        index
        element={<Home />}
        loader={HomeLoader}
        errorElement={<ErrorBoundary />}
      />
      <Route
        path="/posts/:id"
        element={<SinglePost />}
        loader={SinglePostLoader}
        errorElement={<ErrorBoundary />}
      />
      <Route
        path="/tags/:id"
        element={<Tags />}
        loader={TagsLoader}
        errorElement={<ErrorBoundary />}
      />
      <Route
        path="/login"
        element={<Login />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        path="/register"
        element={<Register />}
        errorElement={<ErrorBoundary />}
      />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
