import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Store, Zap, Users } from 'lucide-react';

export function FeaturesSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="relative overflow-hidden group">
        <div className="p-6">
          <div className="mb-4 p-3 bg-primary/10 w-fit rounded-lg">
            <Store className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-heading font-semibold mb-3">Discover</h3>
          <p className="text-muted-foreground mb-4">
            Browse through our curated collection of AI-powered automation scenarios.
          </p>
          <Button className="group-hover:translate-x-1 transition-transform">
            Browse Marketplace
          </Button>
        </div>
      </Card>
      
      <Card className="relative overflow-hidden group">
        <div className="p-6">
          <div className="mb-4 p-3 bg-secondary/10 w-fit rounded-lg">
            <Zap className="h-6 w-6 text-secondary" />
          </div>
          <h3 className="text-xl font-heading font-semibold mb-3">Create</h3>
          <p className="text-muted-foreground mb-4">
            Build and share your own automation scenarios with the community.
          </p>
          <Button variant="secondary" className="group-hover:translate-x-1 transition-transform">
            Start Creating
          </Button>
        </div>
      </Card>
      
      <Card className="relative overflow-hidden group">
        <div className="p-6">
          <div className="mb-4 p-3 bg-accent/10 w-fit rounded-lg">
            <Users className="h-6 w-6 text-accent" />
          </div>
          <h3 className="text-xl font-heading font-semibold mb-3">Connect</h3>
          <p className="text-muted-foreground mb-4">
            Join our community of automation enthusiasts and share your expertise.
          </p>
          <Button variant="outline" className="group-hover:translate-x-1 transition-transform">
            Join Community
          </Button>
        </div>
      </Card>
    </div>
  );
}