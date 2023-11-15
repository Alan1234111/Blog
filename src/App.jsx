import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home, { loader as HomeLoader } from "./pages/Home";
import Post, { loader as PostLoader } from "./pages/Post";
import Tags, { loader as TagsLoader } from "./pages/Tags";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} loader={HomeLoader} />
      <Route
        path="/posts/:id"
        element={<Post />}
        loader={PostLoader}
      />
      <Route
        path="/tags/:id"
        element={<Tags />}
        loader={TagsLoader}
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
