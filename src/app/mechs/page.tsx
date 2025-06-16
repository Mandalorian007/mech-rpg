import Link from 'next/link';
import { ArrowLeft, Database, Info, Zap, Target, Shield, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

import { lightMechs, mediumMechs, largeMechs, siegeMechs } from '@/content';
import { HardpointLayout } from '@/lib/types';

export default function MechsPage(): React.JSX.Element {
  const calculateTotalHardpoints = (hardpoints: HardpointLayout): number => {
    return Object.values(hardpoints).reduce((sum: number, count) => sum + (count as number), 0);
  };

  const formatHardpointBreakdown = (hardpoints: HardpointLayout): React.JSX.Element => {
    const sections = [
      { label: 'Head', value: hardpoints.head, color: 'text-blue-400' },
      { label: 'L Arm', value: hardpoints.leftArm, color: 'text-green-400' },
      { label: 'L Torso', value: hardpoints.leftTorso, color: 'text-yellow-400' },
      { label: 'C Torso', value: hardpoints.centerTorso, color: 'text-red-400' },
      { label: 'R Torso', value: hardpoints.rightTorso, color: 'text-yellow-400' },
      { label: 'R Arm', value: hardpoints.rightArm, color: 'text-green-400' },
      { label: 'L Leg', value: hardpoints.leftLeg, color: 'text-purple-400' },
      { label: 'R Leg', value: hardpoints.rightLeg, color: 'text-purple-400' },
    ];

    const activeSections = sections.filter(section => section.value > 0);
    
    if (activeSections.length === 0) {
      return <span className="text-muted-foreground italic">No hardpoints configured</span>;
    }

    return (
      <div className="space-y-1">
        <div className="text-xs font-medium text-muted-foreground mb-2">Hardpoint Distribution</div>
        <div className="grid grid-cols-2 gap-2 text-sm">
          {activeSections.map((section) => (
            <div key={section.label} className="flex justify-between items-center">
              <span className="text-muted-foreground">{section.label}:</span>
              <span className={`font-mono font-semibold ${section.color}`}>
                {section.value}
              </span>
            </div>
          ))}
        </div>
                 <div className="border-t border-muted-foreground/20 pt-2 mt-2">
           <div className="flex justify-between items-center font-semibold">
             <span className="text-foreground">Total:</span>
             <span className="text-primary">{calculateTotalHardpoints(hardpoints)}</span>
           </div>
         </div>
      </div>
    );
  };



  const MechTable = ({ 
    title, 
    data, 
    icon: Icon,
    description 
  }: { 
    title: string; 
    data: typeof lightMechs; 
    icon: React.ComponentType<{className?: string}>;
    description: string;
  }): React.JSX.Element => (
    <Card className="mb-8 shadow-lg border-muted-foreground/10">
      <CardHeader className="bg-muted/30">
        <CardTitle className="flex items-center gap-3 text-xl">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon className="w-5 h-5 text-primary" />
          </div>
          {title}
        </CardTitle>
        <CardDescription className="text-base">
          {data.length} {title.toLowerCase()} chassis available • {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        {data.length > 0 ? (
          <div className="overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="border-muted-foreground/20 bg-muted/20">
                  <TableHead className="font-semibold text-foreground py-4 px-6">Chassis Designation</TableHead>
                  <TableHead className="text-right font-semibold text-foreground py-4 px-4">Mass</TableHead>
                  <TableHead className="text-right font-semibold text-foreground py-4 px-4">Armor Capacity</TableHead>
                  <TableHead className="text-center font-semibold text-foreground py-4 px-4">Mobility</TableHead>
                  <TableHead className="text-center font-semibold text-foreground py-4 px-4">Hardpoints</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                                 {data.map((mech, index) => (
                    <TableRow 
                      key={mech.name} 
                      className={`border-muted-foreground/10 hover:bg-muted/30 transition-colors group ${
                        index % 2 === 0 ? 'bg-background' : 'bg-muted/5'
                      }`}
                    >
                                             <TableCell className="py-4 px-6">
                         <span className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                           {mech.name}
                         </span>
                       </TableCell>
                       
                       <TableCell className="text-right py-4 px-4">
                         <span className="font-mono font-bold text-lg text-foreground">
                           {mech.tonnage}t
                         </span>
                       </TableCell>
                       
                       <TableCell className="text-right py-4 px-4">
                         <span className="font-mono font-semibold text-foreground">
                           {mech.maxArmorTonnage}t
                         </span>
                       </TableCell>
                       
                       <TableCell className="text-center py-4 px-4">
                         <span className="font-mono font-semibold text-foreground">
                           {mech.hexSpeed} hex
                         </span>
                       </TableCell>
                       
                       <TableCell className="text-center py-4 px-4">
                         <Tooltip delayDuration={200}>
                           <TooltipTrigger asChild>
                             <button className="group/button p-2 rounded-lg hover:bg-primary/10 transition-all duration-200">
                               <span className="font-mono font-bold text-xl text-primary group-hover/button:text-primary-foreground transition-colors">
                                 {calculateTotalHardpoints(mech.hardpoints)}
                               </span>
                             </button>
                           </TooltipTrigger>
                           <TooltipContent side="top" className="max-w-xs p-4 bg-background border border-muted-foreground/20">
                             {formatHardpointBreakdown(mech.hardpoints)}
                           </TooltipContent>
                         </Tooltip>
                                              </TableCell>
                     </TableRow>
                 ))}
              </TableBody>
            </Table>
          </div>
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            <Database className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <h3 className="text-lg font-semibold mb-2">Tactical Database Loading</h3>
            <p>Chassis specifications are being retrieved from central command...</p>
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <TooltipProvider delayDuration={200} skipDelayDuration={100}>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <Button variant="ghost" asChild className="hover:bg-muted/50">
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Return to Command Center
              </Link>
            </Button>
          </div>

          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-muted/50 backdrop-blur rounded-full text-muted-foreground text-sm font-medium mb-8 border border-muted-foreground/20">
                <Database className="w-4 h-4" />
                Tactical Chassis Database • Classification: RESTRICTED
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
                Mech <span className="bg-gradient-to-r from-primary via-primary/80 to-muted-foreground bg-clip-text text-transparent">Chassis</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Complete tactical specifications for all authorized combat chassis. 
                From agile reconnaissance platforms to devastating siege engines.
              </p>
            </div>

            {/* Enhanced Stats Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {[
                { data: lightMechs, icon: Zap, label: 'Light Mechs', color: 'text-green-400', description: 'Fast Strike' },
                { data: mediumMechs, icon: Target, label: 'Medium Mechs', color: 'text-blue-400', description: 'Balanced' },
                { data: largeMechs, icon: Shield, label: 'Large Mechs', color: 'text-yellow-400', description: 'Heavy Assault' },
                { data: siegeMechs, icon: Truck, label: 'Siege Mechs', color: 'text-red-400', description: 'Maximum Firepower' }
              ].map(({ data, icon: Icon, label, color, description }) => (
                <Card key={label} className="text-center border-muted-foreground/20 hover:border-primary/30 transition-colors group">
                  <CardHeader className="pb-4">
                    <div className={`w-12 h-12 bg-muted/50 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/10 transition-colors`}>
                      <Icon className={`w-6 h-6 ${color}`} />
                    </div>
                    <CardTitle className="text-2xl font-bold">{data.length}</CardTitle>
                    <CardDescription className="font-medium">{label}</CardDescription>
                    <div className="text-xs text-muted-foreground mt-1">{description}</div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            {/* Enhanced Info Card */}
            <Card className="mb-12 border-muted-foreground/20 bg-muted/20">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Info className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">Advanced Chassis Analysis System</CardTitle>
                    <CardDescription className="text-base">
                      Comprehensive tactical specifications with real-time performance metrics
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
                  <div>
                    <p className="leading-relaxed">
                      The Mech Combat Authority maintains strict chassis classifications based on tactical deployment parameters. 
                      Mass distribution, mobility ratings, and hardpoint configurations determine battlefield effectiveness.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-foreground mb-3">Interactive Features:</div>
                    <div className="text-sm space-y-1">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>Hover hardpoint totals for detailed breakdown</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>Color-coded efficiency ratings</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span>Real-time performance metrics</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Enhanced Mech Tables */}
            <MechTable 
              title="Light Reconnaissance Chassis" 
              data={lightMechs} 
              icon={Zap}
              description="High-mobility platforms for reconnaissance and fast strike operations"
            />
            
            <MechTable 
              title="Medium Combat Chassis" 
              data={mediumMechs} 
              icon={Target}
              description="Versatile multi-role platforms for balanced engagement profiles"
            />
            
            <MechTable 
              title="Large Assault Chassis" 
              data={largeMechs} 
              icon={Shield}
              description="Heavy combat platforms for sustained battlefield dominance"
            />
            
            <MechTable 
              title="Siege Warfare Platforms" 
              data={siegeMechs} 
              icon={Truck}
              description="Maximum firepower chassis for fortress assault and area denial"
            />

            {/* Enhanced Action Buttons */}
            <Card className="mt-16 bg-muted/20 border-muted-foreground/20">
              <CardContent className="pt-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Next Phase: Tactical Deployment</h3>
                  <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Access comprehensive weapons databases and armor specifications, or proceed to the advanced mech builder interface.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                      <Link href="/components">
                        <Target className="w-5 h-5 mr-2" />
                        Weapons Database
                      </Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild className="border-muted-foreground/30">
                      <Link href="/armor">
                        <Shield className="w-5 h-5 mr-2" />
                        Armor Systems
                      </Link>
                    </Button>
                    <Button variant="ghost" size="lg" asChild>
                      <Link href="/builder">
                        <Database className="w-5 h-5 mr-2" />
                        Launch Builder
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
} 