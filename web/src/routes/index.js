import React from 'react';
import Loadable from 'react-loadable';
import {LoadingOutlined} from "@ant-design/icons";

const LoadingComponent = ({error, pastDelay}) => {
  if (error) {
    return <div>Error!</div>;
  } else if (pastDelay) {
    return <div>Loading...</div>;
  } else {
    return null;
  }
};

export const mainRoutes = [
  {
    path: '/login',
    component: Loadable({
      loader: () => import('../pages/sign/SignIn'),
      loading: LoadingComponent,
      loadingIcon: LoadingOutlined,
      delay: 300
    })
  }
]

export const userRoutes = [
  {
    path: '/',
    component: Loadable({
      loader: () => import('../pages/article/Home'),
      loading: LoadingComponent,
      loadingIcon: LoadingOutlined,
      delay: 300
    })
  },
  {
    path: '/grammar',
    component: Loadable({
      loader: () => import('../pages/grammar/Grammar'),
      loading: LoadingComponent,
      loadingIcon: LoadingOutlined,
      delay: 300
    })
  },
  {
    path: '/:username?',
    component: Loadable({
      loader: () => import('../pages/account/Profile'),
      loading: LoadingComponent,
      loadingIcon: LoadingOutlined,
      delay: 300
    })
  },
  {
    path: '/:username?/course',
    component: Loadable({
      loader: () => import('../pages/account/Course'),
      loading: LoadingComponent,
      loadingIcon: LoadingOutlined,
      delay: 300
    })
  },
  {
    path: '/:username?/like',
    component: Loadable({
      loader: () => import('../pages/account/Like'),
      loading: LoadingComponent,
      loadingIcon: LoadingOutlined,
      delay: 300
    })
  },
  {
    path: '/:username?/comment',
    component: Loadable({
      loader: () => import('../pages/account/Comment'),
      loading: LoadingComponent,
      loadingIcon: LoadingOutlined,
      delay: 300
    })
  },
  {
    path: '/:username?/word_info',
    component: Loadable({
      loader: () => import('../pages/account/WordInfo'),
      loading: LoadingComponent,
      loadingIcon: LoadingOutlined,
      delay: 300
    })
  },
  {
    path: '/setting/account/password_change',
    component: Loadable({
      loader: () => import('../pages/setteing/PwdChange'),
      loading: LoadingComponent,
      loadingIcon: LoadingOutlined,
      delay: 300
    })
  },
  {
    path: '/setting/account/edit',
    component: Loadable({
      loader: () => import('../pages/setteing/AccountEdit'),
      loading: LoadingComponent,
      loadingIcon: LoadingOutlined,
      delay: 300
    })
  },
  {
    path: '/article',
    component: Loadable({
      loader: () => import('../pages/article/ArticleRead'),
      loading: LoadingComponent,
      loadingIcon: LoadingOutlined,
      delay: 300
    })
  },
  {
    path: '/article/edit/:article?',
    component: Loadable({
      loader: () => import('../pages/article/ArticleEdit'),
      loading: LoadingComponent,
      loadingIcon: LoadingOutlined,
      delay: 300
    })
  },
  {
    path: '/article/word_review',
    component: Loadable({
      loader: () => import('../pages/article/WordReview'),
      loading: LoadingComponent,
      loadingIcon: LoadingOutlined,
      delay: 300
    })
  }
]
