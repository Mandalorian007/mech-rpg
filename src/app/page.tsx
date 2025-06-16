import Link from 'next/link';
import { Wrench, Database, Shield, Cog, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function HomePage(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-muted-foreground bg-clip-text text-transparent">
            Mech RPG Wiki & Builder
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Your comprehensive command center for mech-focused tabletop RPG combat. 
            Design, customize, and deploy mechanical warfare units with precision.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/builder">
                <Wrench className="w-5 h-5 mr-2" />
                Start Building Your Mech
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" asChild>
              <Link href="/mechs">
                <Database className="w-5 h-5 mr-2" />
                Explore Chassis Database
              </Link>
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Cog className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">500+</CardTitle>
              <CardDescription>Combat Components</CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">10+</CardTitle>
              <CardDescription>Armor Systems</CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Database className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">50+</CardTitle>
              <CardDescription>Mech Chassis</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="transition-all hover:shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Cog className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">Components & Weapons</CardTitle>
                  <CardDescription>Advanced combat systems database</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Explore our comprehensive arsenal of weapons, equipment, and tactical systems. 
                From energy cannons to missile arrays, find the perfect loadout for your combat doctrine.
              </p>
              <Button variant="ghost" asChild className="p-0">
                <Link href="/components" className="flex items-center">
                  Browse Weapon Systems
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">Armor & Protection</CardTitle>
                  <CardDescription>Defensive system specifications</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Analyze protection ratings and HP-per-ton ratios across all armor classifications. 
                From basic composites to advanced kinetic suppression systems.
              </p>
              <Button variant="ghost" asChild className="p-0">
                <Link href="/armor" className="flex items-center">
                  View Protection Systems
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Database className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">Mech Database</CardTitle>
                  <CardDescription>Complete chassis specifications</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Access detailed specifications for all mech classifications, from agile Light scouts 
                to devastating Siege platforms. Compare tonnage, speed, and hardpoint configurations.
              </p>
              <Button variant="ghost" asChild className="p-0">
                <Link href="/mechs" className="flex items-center">
                  Explore Mech Types
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <Card className="max-w-4xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl mb-2">Ready to Deploy?</CardTitle>
            <CardDescription className="text-lg">
              Join the next generation of mech commanders. Design your perfect war machine, 
              analyze tactical specifications, and dominate the battlefield with superior engineering.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/builder">
                  <Wrench className="w-5 h-5 mr-2" />
                  Launch Builder Interface
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/mechs">
                  Browse Chassis Catalog
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 