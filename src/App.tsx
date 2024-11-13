import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from './components/theme-provider';
import { Toaster } from './components/ui/toaster';
import Layout from './components/layout';
import ClientDashboard from './pages/client/dashboard';
import TherapistDashboard from './pages/therapist/dashboard';
import AdminDashboard from './pages/admin/dashboard';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import { AuthProvider } from './contexts/auth-context';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="therapy-theme">
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/" element={<Layout />}>
                <Route path="client" element={<ClientDashboard />} />
                <Route path="therapist" element={<TherapistDashboard />} />
                <Route path="admin" element={<AdminDashboard />} />
              </Route>
            </Routes>
          </BrowserRouter>
          <Toaster />
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;