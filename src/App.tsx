import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './stores/authStore';

// Layouts & Pages
import { AdminLayout, PublicLayout } from './layouts';
import { LoginPage } from './pages';
import {
  Dashboard, Navbar, Hero, Products, About, 
  Quality, CTA, Footer, Toaster
} from './components';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
};

const WarningBanner: React.FC = () => (
  <div className="fixed bottom-0 w-full bg-red-50/95 backdrop-blur-sm border-t 
                  border-red-200 p-3 text-center text-sm text-red-700 z-50
                  shadow-lg animate-fade-in-up">
    警語：本公司僅提供產品銷售，不提供醫療相關諮詢與服務
  </div>
);

const MainContent: React.FC = () => (
  <div className="min-h-screen bg-white">
    <Navbar />
    <main className="relative z-10">
      <Hero />
      <Products />
      <About />
      <Quality />
      <CTA />
    </main>
    <Footer />
    <WarningBanner />
  </div>
);

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<MainContent />} />
      </Route>

      <Route path="/login" element={<LoginPage />} />

      <Route path="/admin" element={
        <ProtectedRoute>
          <AdminLayout />
        </ProtectedRoute>
      }>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
    <Toaster />
  </BrowserRouter>
);

export default App;