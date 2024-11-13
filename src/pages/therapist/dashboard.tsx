import React from 'react';
import { Calendar, Users, Clock } from 'lucide-react';

export default function TherapistDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Therapist Dashboard</h2>
        <div className="flex items-center space-x-2">
          <Calendar className="h-5 w-5" />
          <span className="text-sm text-muted-foreground">
            {new Date().toLocaleDateString()}
          </span>
        </div>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5" />
            <h3 className="text-lg font-semibold">Today's Schedule</h3>
          </div>
          <p className="text-sm text-muted-foreground mt-2">No appointments scheduled for today</p>
        </div>
        
        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5" />
            <h3 className="text-lg font-semibold">Active Clients</h3>
          </div>
          <p className="text-sm text-muted-foreground mt-2">No active clients</p>
        </div>
        
        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg font-semibold">Quick Actions</h3>
          <div className="mt-2 space-y-2">
            <button className="w-full text-left px-4 py-2 text-sm rounded-md bg-secondary hover:bg-secondary/80">
              View Schedule
            </button>
            <button className="w-full text-left px-4 py-2 text-sm rounded-md bg-secondary hover:bg-secondary/80">
              Manage Clients
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}