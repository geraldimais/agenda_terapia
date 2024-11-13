import React from 'react';
import { Users, Activity, Settings } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Admin Dashboard</h2>
        <div className="flex items-center space-x-2">
          <Activity className="h-5 w-5" />
          <span className="text-sm text-muted-foreground">System Status: Online</span>
        </div>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5" />
            <h3 className="text-lg font-semibold">User Management</h3>
          </div>
          <div className="mt-2 space-y-2">
            <button className="w-full text-left px-4 py-2 text-sm rounded-md bg-secondary hover:bg-secondary/80">
              Manage Therapists
            </button>
            <button className="w-full text-left px-4 py-2 text-sm rounded-md bg-secondary hover:bg-secondary/80">
              Manage Clients
            </button>
          </div>
        </div>
        
        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center space-x-2">
            <Settings className="h-5 w-5" />
            <h3 className="text-lg font-semibold">System Settings</h3>
          </div>
          <div className="mt-2 space-y-2">
            <button className="w-full text-left px-4 py-2 text-sm rounded-md bg-secondary hover:bg-secondary/80">
              General Settings
            </button>
            <button className="w-full text-left px-4 py-2 text-sm rounded-md bg-secondary hover:bg-secondary/80">
              Security Settings
            </button>
          </div>
        </div>
        
        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg font-semibold">Analytics</h3>
          <p className="text-sm text-muted-foreground mt-2">System analytics will appear here</p>
        </div>
      </div>
    </div>
  );
}