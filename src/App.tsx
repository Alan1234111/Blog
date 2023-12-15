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
import TagPosts, { loader as TagsLoader } from "./pages/TagPosts";
import AllPosts, { loader as allPostsLoader } from "./pages/AllPosts";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ErrorBoundary from "./pages/ErrorBoundary";
import NotFound from "./pages/NotFound";

type ParamsType = {
  params: {
    [key: string]: string;
  };
};

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
        // loader={SinglePostLoader}
        loader={(args: ParamsType) => SinglePostLoader(args)}
        errorElement={<ErrorBoundary />}
      />
      <Route
        path="/posts"
        element={<AllPosts />}
        loader={allPostsLoader}
        errorElement={<ErrorBoundary />}
      />
      <Route
        path="/tags/:id"
        element={<TagPosts />}
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
        element={<SignUp />}
        errorElement={<ErrorBoundary />}
      />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
