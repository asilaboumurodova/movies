import Home from "@/pages/Home";
import Movie from "@/pages/Movie";
import Tv from "@/pages/Tv";
import Search from "@/pages/Search";
import searchImg from "@i/search.svg"
import CurrentPage from "../pages/CurrentPage";

export const router = [
  {
    path: "/",
    element: <Home />,
    name: "Главная",
  },
  {
    path: "/movie",
    element: <Movie />,
    name: "Фильмы",
  },
  {
    path: "/tv",
    element: <Tv />,
    name: "Сериалы",
  },
  {
    path: "/search",
    element: <Search />,
    name: <img src={searchImg} alt="" />,
  },
  {
    path: "/watch/:type/:id",
    element: <CurrentPage />,
  },
];
