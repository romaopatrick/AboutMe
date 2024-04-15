import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Career } from './components/aboutme/index.tsx'
import { JobExperiences } from './components/job-experiences/index.tsx'
import { TechnologyStack } from './components/technology-stack/index.tsx'
import { Contact } from './components/contact/index.tsx'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/',
          element: <Career />
        },
        {
          path: '/aboutme',
          element: <Career />
        },
        {
          path: '/jobexperiences',
          element: <JobExperiences />
        },
        {
          path: '/technologystack',
          element: <TechnologyStack />
        },
        {
          path: '/contact',
          element: <Contact />
        }
      ]
    },

  ], { basename: "/AboutMe" }
)
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
