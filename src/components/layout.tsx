import { Outlet } from 'react-router-dom';
import { ThemeToggle } from './theme-toggle';

export default function Layout() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <h1 className="text-2xl font-bold">Therapy Scheduling</h1>
          <ThemeToggle />
        </div>
      </header>
      <main className="container py-8">
        <Outlet />
      </main>
    </div>
  );
}