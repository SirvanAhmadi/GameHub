import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools/production'
import { Provider } from './components/ui/provider.tsx'
import { BrowserRouter, Routes , Route } from "react-router";
import Layout from './pages/Layout.tsx'
import GameDetailPage from './pages/GameDetailPage.tsx'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
          <Provider>
            <Routes>
              <Route path="/" element={<Layout />}  >
                <Route path="" element={<App />} />
                <Route path=":game-slug" element={<GameDetailPage />}  />
              </Route>
            </Routes>
          </Provider>
      </QueryClientProvider>
    </StrictMode>
  </BrowserRouter>
)

{/* <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="dashboard" element={<Dashboard />}>
        <Route index element={<RecentActivity />} />
        <Route path="project/:id" element={<Project />} />
      </Route>
    </Routes>
  </BrowserRouter> */}