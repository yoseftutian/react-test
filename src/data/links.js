import About from "../screens/about";
import Contact from "../screens/contact";
import Generators from "../screens/generators";
import Home from "../screens/home";
import Speakers from "../screens/speakers";

export const links = [
  {
    title: "Home",
    href: "/",
    element: <Home />,
  },
  {
    title: "Speakers",
    href: "/speakers",
    element: <Speakers />,
  },
  {
    title: "Generators",
    href: "/generators",
    element: <Generators />,
  },
  {
    title: "About",
    href: "/about",
    element: <About />,
  },
  {
    title: "Contact",
    href: "/contact",
    element: <Contact />,
  },
];
