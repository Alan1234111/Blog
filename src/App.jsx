import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home, { loader as HomeLoader } from "./pages/Home";
// import Post from "./pages/Post";
import Layout from "./components/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} loader={HomeLoader} />
      {/* <Route path="/post/:id" element={<Post />} /> */}
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
