'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Settings, Zap, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { lightMechs, mediumMechs, largeMechs, siegeMechs, components, armorTypes } from '@/content';
import { MechChassis, Component, ArmorType } from '@/lib/types';

interface MechSection {
  name: string;
  hardpoints: number;
  weapons: (Component | null)[];
  equipment: Component[];
  armorTonnage: number;
  armorHP: number;
}

interface MechBuild {
  name: string;
  chassis: MechChassis | null;
  armorType: ArmorType | null;
  sections: {
    head: MechSection;
    leftTorso: MechSection;
    centerTorso: MechSection;
    rightTorso: MechSection;
    leftArm: MechSection;
    rightArm: MechSection;
    leftLeg: MechSection;
    rightLeg: MechSection;
  };
}

export default function BuilderPage(): React.JSX.Element {
  const [mechBuild, setMechBuild] = useState<MechBuild>({
    name: 'Custom Mech',
    chassis: null,
    armorType: null,
    sections: {
      head: { name: 'Head', hardpoints: 0, weapons: [], equipment: [], armorTonnage: 0, armorHP: 0 },
      leftTorso: { name: 'Left Torso', hardpoints: 0, weapons: [], equipment: [], armorTonnage: 0, armorHP: 0 },
      centerTorso: { name: 'Center Torso', hardpoints: 0, weapons: [], equipment: [], armorTonnage: 0, armorHP: 0 },
      rightTorso: { name: 'Right Torso', hardpoints: 0, weapons: [], equipment: [], armorTonnage: 0, armorHP: 0 },
      leftArm: { name: 'Left Arm', hardpoints: 0, weapons: [], equipment: [], armorTonnage: 0, armorHP: 0 },
      rightArm: { name: 'Right Arm', hardpoints: 0, weapons: [], equipment: [], armorTonnage: 0, armorHP: 0 },
      leftLeg: { name: 'Left Leg', hardpoints: 0, weapons: [], equipment: [], armorTonnage: 0, armorHP: 0 },
      rightLeg: { name: 'Right Leg', hardpoints: 0, weapons: [], equipment: [], armorTonnage: 0, armorHP: 0 },
    }
  });

  const allMechs = [...lightMechs, ...mediumMechs, ...largeMechs, ...siegeMechs];
  const weaponComponents = components.filter(c => c.projectileCount !== undefined);

  const updateChassisHardpoints = (chassis: MechChassis): void => {
    setMechBuild(prev => ({
      ...prev,
      chassis,
      sections: {
        head: { ...prev.sections.head, hardpoints: chassis.hardpoints.head, weapons: new Array(chassis.hardpoints.head).fill(null) },
        leftTorso: { ...prev.sections.leftTorso, hardpoints: chassis.hardpoints.leftTorso, weapons: new Array(chassis.hardpoints.leftTorso).fill(null) },
        centerTorso: { ...prev.sections.centerTorso, hardpoints: chassis.hardpoints.centerTorso, weapons: new Array(chassis.hardpoints.centerTorso).fill(null) },
        rightTorso: { ...prev.sections.rightTorso, hardpoints: chassis.hardpoints.rightTorso, weapons: new Array(chassis.hardpoints.rightTorso).fill(null) },
        leftArm: { ...prev.sections.leftArm, hardpoints: chassis.hardpoints.leftArm, weapons: new Array(chassis.hardpoints.leftArm).fill(null) },
        rightArm: { ...prev.sections.rightArm, hardpoints: chassis.hardpoints.rightArm, weapons: new Array(chassis.hardpoints.rightArm).fill(null) },
        leftLeg: { ...prev.sections.leftLeg, hardpoints: chassis.hardpoints.leftLeg, weapons: new Array(chassis.hardpoints.leftLeg).fill(null) },
        rightLeg: { ...prev.sections.rightLeg, hardpoints: chassis.hardpoints.rightLeg, weapons: new Array(chassis.hardpoints.rightLeg).fill(null) },
      }
    }));
  };

  // Recalculate all armor HP when armor type changes
  useEffect(() => {
    if (mechBuild.armorType) {
      setMechBuild(prev => ({
        ...prev,
        sections: Object.fromEntries(
          Object.entries(prev.sections).map(([key, section]) => [
            key,
            {
              ...section,
              armorHP: section.armorTonnage * prev.armorType!.hpPerTon
            }
          ])
        ) as typeof prev.sections
      }));
    }
  }, [mechBuild.armorType]);

  const updateArmorAllocation = (sectionKey: keyof typeof mechBuild.sections, tonnage: number): void => {
    if (!mechBuild.armorType) return;
    
    const hp = tonnage * mechBuild.armorType.hpPerTon;
    setMechBuild(prev => ({
      ...prev,
      sections: {
        ...prev.sections,
        [sectionKey]: {
          ...prev.sections[sectionKey],
          armorTonnage: tonnage,
          armorHP: hp
        }
      }
    }));
  };

  const assignWeapon = (sectionKey: keyof typeof mechBuild.sections, hardpointIndex: number, weapon: Component | null): void => {
    setMechBuild(prev => {
      const newWeapons = [...prev.sections[sectionKey].weapons];
      newWeapons[hardpointIndex] = weapon;
      return {
        ...prev,
        sections: {
          ...prev.sections,
          [sectionKey]: {
            ...prev.sections[sectionKey],
            weapons: newWeapons
          }
        }
      };
    });
  };

  const calculateUsedTonnage = (): number => {
    let total = 0;
    
    // Add armor tonnage
    Object.values(mechBuild.sections).forEach(section => {
      total += section.armorTonnage;
    });
    
    // Add weapon tonnage
    Object.values(mechBuild.sections).forEach(section => {
      section.weapons.forEach(weapon => {
        if (weapon) total += weapon.tonnage;
      });
    });
    
    // Add equipment tonnage
    Object.values(mechBuild.sections).forEach(section => {
      section.equipment.forEach(equipment => {
        total += equipment.tonnage;
      });
    });
    
    return total;
  };

  const calculateTotalArmor = (): number => {
    return Object.values(mechBuild.sections).reduce((total, section) => total + section.armorHP, 0);
  };

  const calculateTotalHardpoints = (): number => {
    return Object.values(mechBuild.sections).reduce((total, section) => total + section.hardpoints, 0);
  };

  const getUsedHardpoints = (): number => {
    return Object.values(mechBuild.sections).reduce((total, section) => {
      return total + section.weapons.filter(w => w !== null).length;
    }, 0);
  };

  const getRemainingTonnage = (): number => {
    if (!mechBuild.chassis) return 0;
    return mechBuild.chassis.tonnage - calculateUsedTonnage();
  };

  const isConfigurationValid = (): boolean => {
    return mechBuild.chassis !== null && mechBuild.armorType !== null;
  };

  const SectionCard = ({ 
    sectionKey, 
    section, 
    showHardpoints = true 
  }: { 
    sectionKey: keyof typeof mechBuild.sections; 
    section: MechSection; 
    showHardpoints?: boolean;
  }): React.JSX.Element => (
    <Card className="h-full">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg flex items-center justify-between">
          {section.name}
          {section.hardpoints > 0 && (
            <Badge variant="outline" className="ml-2">
              {section.weapons.filter(w => w !== null).length}/{section.hardpoints} HP
            </Badge>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Hardpoints */}
        {showHardpoints && section.hardpoints > 0 && (
          <div className="space-y-2">
            <Label className="text-xs font-medium text-muted-foreground">WEAPON HARDPOINTS</Label>
            {section.weapons.map((weapon, index) => (
              <div key={index} className="flex items-center gap-2">
                <Badge variant="secondary" className="w-8 h-6 flex items-center justify-center text-xs">
                  {index + 1}
                </Badge>
                <Select
                  value={weapon?.name || 'empty'}
                  onValueChange={(value: string) => {
                    const selectedWeapon = value === 'empty' ? null : weaponComponents.find(w => w.name === value) || null;
                    assignWeapon(sectionKey, index, selectedWeapon);
                  }}
                >
                  <SelectTrigger className="flex-1 h-8">
                    <SelectValue placeholder="Select weapon..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="empty">Empty</SelectItem>
                    {weaponComponents.map(weapon => (
                      <SelectItem key={weapon.name} value={weapon.name}>
                        {weapon.name} ({weapon.tonnage}t)
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            ))}
          </div>
        )}

        {/* Armor */}
        <div className="space-y-2">
          <Label className="text-xs font-medium text-muted-foreground">ARMOR ALLOCATION</Label>
          <div className="flex items-center gap-2">
            <Input
              type="number"
              value={section.armorTonnage}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateArmorAllocation(sectionKey, Number(e.target.value) || 0)}
              className="w-20 h-8 text-center"
              min="0"
              step="0.25"
              disabled={!mechBuild.armorType}
            />
            <span className="text-xs text-muted-foreground">tons</span>
            <Separator orientation="vertical" className="h-4" />
            <Badge variant="outline" className="text-xs font-mono">
              {section.armorHP} HP
            </Badge>
          </div>
          {mechBuild.armorType && (
            <div className="text-xs text-muted-foreground">
              {section.armorTonnage}t × {mechBuild.armorType.hpPerTon} HP/t = {section.armorHP} HP
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
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
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-muted/50 backdrop-blur rounded-full text-muted-foreground text-sm font-medium mb-8 border border-muted-foreground/20">
              <Settings className="w-4 h-4" />
              Mech Configuration System • Classification: RESTRICTED
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
              Mech <span className="bg-gradient-to-r from-primary via-primary/80 to-muted-foreground bg-clip-text text-transparent">Builder</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Advanced mech configuration interface for tactical deployment planning. 
              Configure chassis, weapons, armor, and equipment loadouts.
            </p>
          </div>

          {/* Configuration Panel */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                Basic Configuration
              </CardTitle>
              <CardDescription>
                Select chassis and armor type to begin mech configuration
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="mech-name">Mech Designation</Label>
                  <Input
                    id="mech-name"
                    value={mechBuild.name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMechBuild(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter mech name..."
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="chassis-select">Chassis Type *</Label>
                  <Select
                    value={mechBuild.chassis?.name || ''}
                    onValueChange={(value: string) => {
                      const chassis = allMechs.find(m => m.name === value);
                      if (chassis) updateChassisHardpoints(chassis);
                    }}
                  >
                    <SelectTrigger id="chassis-select">
                      <SelectValue placeholder="Select chassis..." />
                    </SelectTrigger>
                    <SelectContent>
                      {allMechs.map(mech => (
                        <SelectItem key={mech.name} value={mech.name}>
                          {mech.name} ({mech.tonnage}t • {mech.mechType})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="armor-select">Armor Type *</Label>
                  <Select
                    value={mechBuild.armorType?.name || ''}
                    onValueChange={(value: string) => {
                      const armor = armorTypes.find(a => a.name === value);
                      setMechBuild(prev => ({ ...prev, armorType: armor || null }));
                    }}
                  >
                    <SelectTrigger id="armor-select">
                      <SelectValue placeholder="Select armor..." />
                    </SelectTrigger>
                    <SelectContent>
                      {armorTypes.map(armor => (
                        <SelectItem key={armor.name} value={armor.name}>
                          {armor.name} ({armor.hpPerTon} HP/ton)
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Configuration Status</Label>
                  <div className="flex flex-col gap-2">
                    <Badge variant={mechBuild.chassis ? 'default' : 'destructive'}>
                      {mechBuild.chassis ? '✓ Chassis Set' : '✗ No Chassis'}
                    </Badge>
                    <Badge variant={mechBuild.armorType ? 'default' : 'destructive'}>
                      {mechBuild.armorType ? '✓ Armor Set' : '✗ No Armor'}
                    </Badge>
                  </div>
                </div>
              </div>

              {!isConfigurationValid() && (
                <div className="mt-4 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                  <p className="text-sm text-destructive font-medium">
                    ⚠️ Required: Select both chassis and armor type to proceed with configuration
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Stats Overview */}
          {isConfigurationValid() && (
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              <Card className="text-center">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold">{mechBuild.chassis!.tonnage}t</CardTitle>
                  <CardDescription>Maximum Weight</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold">{calculateUsedTonnage().toFixed(1)}t</CardTitle>
                  <CardDescription>Used Weight</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader className="pb-4">
                  <CardTitle className={`text-2xl font-bold ${getRemainingTonnage() < 0 ? 'text-destructive' : ''}`}>
                    {getRemainingTonnage().toFixed(1)}t
                  </CardTitle>
                  <CardDescription>Remaining Weight</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold">{getUsedHardpoints()}/{calculateTotalHardpoints()}</CardTitle>
                  <CardDescription>Hardpoints Used</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold">{calculateTotalArmor()}</CardTitle>
                  <CardDescription>Total Armor HP</CardDescription>
                </CardHeader>
              </Card>
            </div>
          )}

          {/* Mech Structure */}
          {isConfigurationValid() ? (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Mech Structure Configuration
                  </CardTitle>
                  <CardDescription>
                    Configure weapons and armor for each mech section • {mechBuild.armorType!.name} armor selected ({mechBuild.armorType!.hpPerTon} HP/ton)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    {/* Head */}
                    <div className="grid md:grid-cols-1 gap-4">
                      <SectionCard sectionKey="head" section={mechBuild.sections.head} />
                    </div>

                    {/* Torso Row */}
                    <div className="grid md:grid-cols-3 gap-4">
                      <SectionCard sectionKey="leftTorso" section={mechBuild.sections.leftTorso} />
                      <SectionCard sectionKey="centerTorso" section={mechBuild.sections.centerTorso} />
                      <SectionCard sectionKey="rightTorso" section={mechBuild.sections.rightTorso} />
                    </div>

                    {/* Arms Row */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <SectionCard sectionKey="leftArm" section={mechBuild.sections.leftArm} />
                      <SectionCard sectionKey="rightArm" section={mechBuild.sections.rightArm} />
                    </div>

                    {/* Legs Row */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <SectionCard sectionKey="leftLeg" section={mechBuild.sections.leftLeg} showHardpoints={false} />
                      <SectionCard sectionKey="rightLeg" section={mechBuild.sections.rightLeg} showHardpoints={false} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <Card className="text-center py-16">
              <CardContent>
                <Settings className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
                <h3 className="text-2xl font-bold mb-2">Configuration Required</h3>
                <p className="text-muted-foreground mb-6">
                  Select both a mech chassis and armor type in the configuration panel above to begin building your custom mech.
                </p>
                <div className="flex justify-center gap-4">
                  <Button asChild>
                    <Link href="/mechs">Browse Chassis Database</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/armor">View Armor Systems</Link>
                  </Button>
                  <Button variant="ghost" asChild>
                    <Link href="/components">Browse Components</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
} 