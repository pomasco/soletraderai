'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Facebook } from 'lucide-react';

export default function TestPage() {
  const [viewPages, setViewPages] = useState<string | undefined>();

  return (
    <div className="container mx-auto max-w-2xl py-12">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight mb-4">Facebook Pages Test</h1>
          <p className="text-muted-foreground">
            Connect with Facebook to manage your pages
          </p>
        </div>

        <div className="card">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-4">
                Would you like to view a list of your Facebook Pages?
              </h3>
              <RadioGroup
                value={viewPages}
                onValueChange={setViewPages}
                className="flex flex-col space-y-3"
              >
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="yes" id="yes" />
                  <Label htmlFor="yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="no" id="no" />
                  <Label htmlFor="no">No</Label>
                </div>
              </RadioGroup>
            </div>

            <Button className="w-full" size="lg">
              <Facebook className="w-5 h-5 mr-2" />
              Login with Facebook
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}