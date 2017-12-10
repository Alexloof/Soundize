import App from './components/App'
import Home from './components/Home'
import Login from './components/Login'
import Search from './components/Search'
import Callback from './components/Callback'
import Discover from './components/Discover'
import DiscoverCategory from './components/DiscoverCategory'
import PlaylistDetail from './components/PlaylistDetail'
import NewReleases from './components/NewReleases'
import Toplists from './components/Toplists'
import AlbumDetail from './components/AlbumDetail'
import ArtistDetail from './components/ArtistDetail'
import TrackDetail from './components/TrackDetail'

import React from 'react'

import { Redirect } from 'react-router'

export default [
  {
    path: '/callback',
    component: Callback,
    exact: false
  },
  {
    path: '/',
    component: Login,
    exact: true
  },
  {
    path: '/app',
    component: App,
    exact: false,
    routes: [
      {
        path: '/app',
        component: Home,
        exact: true
      },
      {
        path: '/app/discover',
        component: Discover,
        exact: true
      },
      {
        path: '/app/discover/:category',
        component: DiscoverCategory,
        exact: true
      },
      {
        path: '/app/new_releases',
        component: NewReleases,
        exact: true
      },
      {
        path: '/app/toplists',
        component: Toplists,
        exact: true
      },
      {
        path: '/app/albums/:id',
        component: AlbumDetail,
        exact: true
      },
      {
        path: '/app/artists/:id',
        component: ArtistDetail,
        exact: true
      },
      {
        path: '/app/tracks/:id',
        component: TrackDetail,
        exact: true
      },
      {
        path: '/app/playlists/:user/:id',
        component: PlaylistDetail,
        exact: true
      },
      {
        path: '/app/search',
        component: Search,
        exact: false
      }
    ]
  },
  {
    component: () => <Redirect from="*" to="/" />
  }
]
