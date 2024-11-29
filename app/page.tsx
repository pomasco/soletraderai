export default function Home() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold font-heading tracking-tight">Welcome to Sole Trader AI</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover and integrate AI-powered Make.com scenarios to automate your business
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card">
          <h3 className="text-xl font-heading font-semibold mb-3">Discover</h3>
          <p className="text-muted-foreground mb-4">
            Browse through our curated collection of AI-powered automation scenarios.
          </p>
          <button className="btn-primary">Browse Marketplace</button>
        </div>
        
        <div className="card">
          <h3 className="text-xl font-heading font-semibold mb-3">Create</h3>
          <p className="text-muted-foreground mb-4">
            Build and share your own automation scenarios with the community.
          </p>
          <button className="btn-secondary">Start Creating</button>
        </div>
        
        <div className="card">
          <h3 className="text-xl font-heading font-semibold mb-3">Connect</h3>
          <p className="text-muted-foreground mb-4">
            Join our community of automation enthusiasts and share your expertise.
          </p>
          <button className="btn-primary">Join Community</button>
        </div>
      </div>
    </div>
  );
}
