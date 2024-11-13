import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { UserCircle, Stethoscope, ArrowLeft } from 'lucide-react';

export default function Register() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-8 p-8 border rounded-lg bg-card">
        <div className="space-y-2">
          <Button 
            variant="ghost" 
            className="mb-4"
            onClick={() => navigate('/login')}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Login
          </Button>
          <h2 className="text-2xl font-bold text-center">Create Account</h2>
          <p className="text-sm text-muted-foreground text-center">Choose your account type</p>
        </div>

        <div className="grid gap-4">
          <Button
            variant="outline"
            className="h-24 space-x-4"
            onClick={() => navigate('/register/client')}
          >
            <UserCircle className="h-8 w-8" />
            <div className="text-left">
              <div className="font-semibold">Register as Client</div>
              <div className="text-sm text-muted-foreground">Find and book therapy sessions</div>
            </div>
          </Button>

          <Button
            variant="outline"
            className="h-24 space-x-4"
            onClick={() => navigate('/register/professional')}
          >
            <Stethoscope className="h-8 w-8" />
            <div className="text-left">
              <div className="font-semibold">Register as Professional</div>
              <div className="text-sm text-muted-foreground">Offer therapy services</div>
            </div>
          </Button>
        </div>

        <p className="text-sm text-center text-muted-foreground">
          Already have an account?{' '}
          <Button variant="link" className="p-0" onClick={() => navigate('/login')}>
            Sign in
          </Button>
        </p>
      </div>
    </div>
  );
}