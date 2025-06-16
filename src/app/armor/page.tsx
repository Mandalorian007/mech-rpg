import Link from 'next/link';
import { ArrowLeft, Shield, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { armorTypes } from '@/content';

export default function ArmorPage(): React.JSX.Element {
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
              <Shield className="w-4 h-4" />
              Defensive Systems Database
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Armor <span className="bg-gradient-to-r from-primary to-muted-foreground bg-clip-text text-transparent">Systems</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete specifications for all armor types available for mech construction. 
              HP per ton values determine protection efficiency.
            </p>
          </div>

          {/* Info Card */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Info className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle>Armor Type Database</CardTitle>
                  <CardDescription>
                    All armor types with HP per ton specifications
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                The Mech Combat Authority maintains standardized armor specifications. 
                HP per ton values indicate the protection level provided per unit of weight, 
                critical for balancing protection with mech performance.
              </p>
            </CardContent>
          </Card>

          {/* Armor Table */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Armor Type Specifications
              </CardTitle>
              <CardDescription>
                Complete armor database with protection values
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-semibold">Armor Type</TableHead>
                      <TableHead className="text-right font-semibold">HP per Ton</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {armorTypes.map((armor) => (
                      <TableRow key={armor.name} className="hover:bg-muted/50">
                        <TableCell className="font-medium">{armor.name}</TableCell>
                        <TableCell className="text-right font-mono font-semibold">
                          {armor.hpPerTon}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/components">
                  Analyze Weapon Systems
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