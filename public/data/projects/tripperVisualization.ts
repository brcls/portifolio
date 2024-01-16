import { IVisualization } from "@/interface/IVisualization";
import SplashScreen from "../../images/projects/tripper/splashScreen.png";
import Detail from "../../images/projects/tripper/detail.png";
import Detail2 from "../../images/projects/tripper/detail2.png";
import EditField from "../../images/projects/tripper/editField.png";
import Explore from "../../images/projects/tripper/explore.png";
import Home from "../../images/projects/tripper/home.png";
import Login from "../../images/projects/tripper/login.png";
import Profile from "../../images/projects/tripper/profile.png";
import Search from "../../images/projects/tripper/search.png";

export const tripperVisualization: IVisualization[] = [
  {
    title: "Splash screen",
    images: [SplashScreen],
  },
  {
    title: "Home",
    images: [Home],
  },
  {
    title: "Search",
    images: [Search],
  },
  {
    title: "Explore",
    images: [Explore],
  },
  {
    title: "Detail",
    images: [Detail, Detail2],
  },
  {
    title: "Profile",
    images: [Profile],
  },
  {
    title: "Edit Field",
    images: [EditField],
  },
  {
    title: "Login",
    images: [Login],
  },
];
