import { lazy } from "react";

export const allRoutes = [
  {
    key: "home",
    path: "/",
    component: lazy(() => import("../../pages/Home")),
  },
  {
    key: "profile",
    path: "/profile",
    component: lazy(() => import("../../pages/Profile")),
  },
  {
    key: "about",
    path: "/about",
    component: lazy(() => import("../../pages/About")),
  },
  {
    key: "services",
    path: "/services",
    component: lazy(() => import("../../pages/Services")),
  },
  {
    key: "contact",
    path: "/contact",
    component: lazy(() => import("../../pages/Contact")),
  },
  {
    key: "gallery",
    path: "/gallery",
    component: lazy(() => import("../../pages/Gallery")),
  },
  {
    key: "portfolio",
    path: "/portfolio",
    component: lazy(() => import("../../pages/Portfolio")),
  },
  {
    key: "team",
    path: "/team",
    component: lazy(() => import("../../pages/Team")),
  },
  {
    key: "faq",
    path: "/faq",
    component: lazy(() => import("../../pages/FAQ")),
  },
  {
    key: "projects",
    path: "/projects",
    component: lazy(() => import("../../pages/Projects")),
  },
  {
    key: "events",
    path: "/events",
    component: lazy(() => import("../../pages/Events")),
  },
  {
    key: "shop",
    path: "/shop",
    component: lazy(() => import("../../pages/Shop")),
  },
  {
    key: "news",
    path: "/news",
    component: lazy(() => import("../../pages/News")),
  },
  {
    key: "blog",
    path: "/blog",
    component: lazy(() => import("../../pages/Blog")),
  },
];
