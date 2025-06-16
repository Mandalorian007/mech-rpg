import Link from 'next/link';
import { ArrowLeft, Settings, Info, Zap, Target, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { components } from '@/content';

export default function ComponentsPage(): React.JSX.Element {
  // Organize components by category
  const energyWeapons = components.filter(c => 
    c.name.includes('Laser') || c.name.includes('EM Phase') || c.name.includes('ER Laser')
  );
  
  const ballisticWeapons = components.filter(c => 
    c.name.includes('Gauss') || c.name.includes('Cannon') || c.name.includes('Howitzer')
  );
  
  const missileWeapons = components.filter(c => 
    c.name.includes('DShorm') || c.name.includes('Beacon')
  );
  
  const ammunition = components.filter(c => 
    c.name.startsWith('Ammo,')
  );
  
  const supportSystems = components.filter(c => 
    c.name.includes('Heat Sink') || c.name.includes('ECM') || c.name.includes('Aegis') || c.name === 'Empty'
  );



  const ComponentTable = ({ 
    title, 
    data, 
    icon: Icon 
  }: { 
    title: string; 
    data: typeof components; 
    icon: React.ComponentType<{className?: string}>;
  }): React.JSX.Element => (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon className="w-5 h-5" />
          {title}
        </CardTitle>
        <CardDescription>
          {data.length} {title.toLowerCase()} available for deployment
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
                             <TableRow>
                 <TableHead className="font-semibold">Component Name</TableHead>
                 <TableHead className="text-right font-semibold">Tonnage</TableHead>
                 <TableHead className="text-center font-semibold">Projectile Count</TableHead>
               </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((component) => (
                                 <TableRow key={component.name} className="hover:bg-muted/50">
                   <TableCell className="font-medium">{component.name}</TableCell>
                   <TableCell className="text-right font-mono font-semibold">
                     {component.tonnage}t
                   </TableCell>
                   <TableCell className="text-center">
                     {component.projectileCount ? (
                       <span className="font-mono">{component.projectileCount}</span>
                     ) : (
                       <span className="text-muted-foreground">—</span>
                     )}
                   </TableCell>
                 </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Return to Command Center
            </Link>
          </Button>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-muted-foreground text-sm font-medium mb-6">
              <Settings className="w-4 h-4" />
              Combat Systems Database
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Weapons & <span className="bg-gradient-to-r from-primary to-muted-foreground bg-clip-text text-transparent">Equipment</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete tactical arsenal for mech warfare operations. From energy weapons to 
              ballistic systems, electronic warfare suites to defensive countermeasures.
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <Card className="text-center">
              <CardHeader className="pb-4">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Zap className="w-4 h-4 text-primary" />
                </div>
                <CardTitle className="text-lg">{energyWeapons.length}</CardTitle>
                <CardDescription className="text-sm">Energy Weapons</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader className="pb-4">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Target className="w-4 h-4 text-primary" />
                </div>
                <CardTitle className="text-lg">{ballisticWeapons.length}</CardTitle>
                <CardDescription className="text-sm">Ballistic Systems</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader className="pb-4">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-4 h-4 text-primary" />
                </div>
                <CardTitle className="text-lg">{missileWeapons.length}</CardTitle>
                <CardDescription className="text-sm">Missile Weapons</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader className="pb-4">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Settings className="w-4 h-4 text-primary" />
                </div>
                <CardTitle className="text-lg">{supportSystems.length}</CardTitle>
                <CardDescription className="text-sm">Support Systems</CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Info Card */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Info className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle>Combat Systems Classification</CardTitle>
                  <CardDescription>
                    All weapons and equipment rated by tonnage and combat effectiveness
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                The Mech Combat Authority maintains comprehensive specifications for all authorized 
                combat systems. Tonnage requirements determine deployment feasibility, while projectile 
                counts indicate sustained combat capability for ammunition-dependent systems.
              </p>
            </CardContent>
          </Card>

          {/* Component Tables */}
          <ComponentTable 
            title="Energy Weapons" 
            data={energyWeapons} 
            icon={Zap}
          />
          
          <ComponentTable 
            title="Ballistic Weapons" 
            data={ballisticWeapons} 
            icon={Target}
          />
          
          <ComponentTable 
            title="Missile Systems" 
            data={missileWeapons} 
            icon={Shield}
          />
          
          <ComponentTable 
            title="Ammunition" 
            data={ammunition} 
            icon={Target}
          />
          
          <ComponentTable 
            title="Support Systems" 
            data={supportSystems} 
            icon={Settings}
          />

          {/* Action Buttons */}
          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/armor">
                  Analyze Armor Systems
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/mechs">
                  Browse Mech Chassis
                </Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/builder">
                  Launch Builder Interface
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 