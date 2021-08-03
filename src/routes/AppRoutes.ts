import React, { ComponentType } from 'react';
import { RouteComponentProps } from "react-router";
import { withAuthRedirect } from "../utils/hoc/withAuthRedirect";

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
    component: Home,
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
    component: withAuthRedirect(Profile),
  },
];
