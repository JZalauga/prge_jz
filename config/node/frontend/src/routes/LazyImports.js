import { lazy } from "react";


export const Home = lazy(() => import("../pages/Home"));
export const Services = lazy(() => import("../pages/Services"));
export const Map = lazy(() => import("../pages/Map"));
export const Cemetery = lazy(() => import("../pages/Cemetery"));
export const Worker = lazy(() => import("../pages/Worker"));
export const Client = lazy(() => import("../pages/Client"));
export const ListOfCemeteries = lazy(() => import("../pages/ListOfCemeteries"));
export const NewCemetery = lazy(() => import("../pages/NewCemetery"));