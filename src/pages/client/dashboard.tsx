import React from 'react';
import { Calendar } from 'lucide-react';

export default function ClientDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Client Dashboard</h2>
        <div className="flex items-center space-x-2">
          <Calendar className="h-5 w-5" />
          <span className="text-sm text-muted-foreground">
            {new Date().toLocaleDateString()}
          </span>
        </div>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg font-semibold">Upcoming Sessions</h3>
          <p className="text-sm text-muted-foreground mt-2">No upcoming sessions scheduled</p>
        </div>
        
        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg font-semibold">Recent Activity</h3>
          <p className="text-sm text-muted-foreground mt-2">No recent activity</p>
        </div>
        
        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg font-semibold">Quick Actions</h3>
          <div className="mt-2 space-y-2">
            <button className="w-full text-left px-4 py-2 text-sm rounded-md bg-secondary hover:bg-secondary/80">
              Schedule New Session
            </button>
            <button className="w-full text-left px-4 py-2 text-sm rounded-md bg-secondary hover:bg-secondary/80">
              View History
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}