import React, { ComponentType } from 'react';
import { RouteComponentProps } from "react-router";
import { withRedirectToHome } from "../utils/hoc/withRedirectToHome";
import { withRedirectToProfile } from "../utils/hoc/withRedirectToProfile";

const Home = React.lazy(() =>
  import(/* webpackChunkName: "views-home" */ '../views/Home')
);

const Participants = React.lazy(() =>
  import(/* webpackChunkName: "views-participants" */ '../views/Participants')
);

const Profile = React.lazy(() =>
  import(/* webpackChunkName: "views-profile" */ '../views/Profile')
);

interface IRoute {
  link: string
  title: string
  exact: boolean
  component: ComponentType<RouteComponentProps<any>> | ComponentType<any>
}

export const AppRoutes: IRoute[] = [
  {
    link: '/',
    title: 'Home',
    exact: true,
    component: withRedirectToProfile(Home),
  },
  {
    link: "/participants",
    title: "Participants",
    exact: false,
    component: Participants,
  },
  {
    link: "/profile",
    title: "Profile",
    exact: false,
    component: withRedirectToHome(Profile),
  },
];
