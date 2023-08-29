import Home from "../pages/Home";
import About from "../pages/About";
import BitsAndBytes from "../pages/BitsAndBytes";
import Post from "../pages/Post";
import Contact from "../pages/Contact";
import Redirect from "./Redirect";

const routes = [
  {
    path: "",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/bits-and-bytes",
    component: BitsAndBytes,
  },
  {
    path: "/post",
    component: Post,
  },
  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "*",
    component: Redirect,
  },
];

export default routes;
