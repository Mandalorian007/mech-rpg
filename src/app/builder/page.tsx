'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { lightMechs, mediumMechs, largeMechs, siegeMechs, components, armorTypes } from '@/content';
import { MechChassis, Component, ArmorType } from '@/lib/types';

interface SlotData {
  type: 'hardpoint' | 'equipment';
  component: Component | null;
}

interface MechSection {
  name: string;
  totalSlots: number;
  hardpoints: number;
  slots: SlotData[];
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
      head: { name: 'Head', totalSlots: 0, hardpoints: 0, slots: [], armorTonnage: 0, armorHP: 0 },
      leftTorso: { name: 'Left Torso', totalSlots: 0, hardpoints: 0, slots: [], armorTonnage: 0, armorHP: 0 },
      centerTorso: { name: 'Center Torso', totalSlots: 0, hardpoints: 0, slots: [], armorTonnage: 0, armorHP: 0 },
      rightTorso: { name: 'Right Torso', totalSlots: 0, hardpoints: 0, slots: [], armorTonnage: 0, armorHP: 0 },
      leftArm: { name: 'Left Arm', totalSlots: 0, hardpoints: 0, slots: [], armorTonnage: 0, armorHP: 0 },
      rightArm: { name: 'Right Arm', totalSlots: 0, hardpoints: 0, slots: [], armorTonnage: 0, armorHP: 0 },
      leftLeg: { name: 'Left Leg', totalSlots: 0, hardpoints: 0, slots: [], armorTonnage: 0, armorHP: 0 },
      rightLeg: { name: 'Right Leg', totalSlots: 0, hardpoints: 0, slots: [], armorTonnage: 0, armorHP: 0 },
    }
  });

  const allMechs = [...lightMechs, ...mediumMechs, ...largeMechs, ...siegeMechs];
  const allComponents = components; // Show all components in every dropdown

  const createSlots = (totalSlots: number, hardpoints: number): SlotData[] => {
    const slots: SlotData[] = [];
    
    // First N slots are marked as hardpoints (visual indicator only)
    for (let i = 0; i < hardpoints; i++) {
      slots.push({ type: 'hardpoint', component: null });
    }
    
    // Remaining slots are marked as equipment (visual indicator only)
    for (let i = hardpoints; i < totalSlots; i++) {
      slots.push({ type: 'equipment', component: null });
    }
    
    return slots;
  };

  const updateChassisHardpoints = (chassis: MechChassis): void => {
    console.log('Selected chassis:', chassis.name);
    console.log('Chassis slots:', chassis.slots);
    console.log('Chassis hardpoints:', chassis.hardpoints);
    
    setMechBuild(prev => ({
      ...prev,
      chassis,
      sections: {
        head: { 
          ...prev.sections.head, 
          totalSlots: chassis.slots.head,
          hardpoints: chassis.hardpoints.head,
          slots: createSlots(chassis.slots.head, chassis.hardpoints.head)
        },
        leftTorso: { 
          ...prev.sections.leftTorso, 
          totalSlots: chassis.slots.leftTorso,
          hardpoints: chassis.hardpoints.leftTorso,
          slots: createSlots(chassis.slots.leftTorso, chassis.hardpoints.leftTorso)
        },
        centerTorso: { 
          ...prev.sections.centerTorso, 
          totalSlots: chassis.slots.centerTorso,
          hardpoints: chassis.hardpoints.centerTorso,
          slots: createSlots(chassis.slots.centerTorso, chassis.hardpoints.centerTorso)
        },
        rightTorso: { 
          ...prev.sections.rightTorso, 
          totalSlots: chassis.slots.rightTorso,
          hardpoints: chassis.hardpoints.rightTorso,
          slots: createSlots(chassis.slots.rightTorso, chassis.hardpoints.rightTorso)
        },
        leftArm: { 
          ...prev.sections.leftArm, 
          totalSlots: chassis.slots.leftArm,
          hardpoints: chassis.hardpoints.leftArm,
          slots: createSlots(chassis.slots.leftArm, chassis.hardpoints.leftArm)
        },
        rightArm: { 
          ...prev.sections.rightArm, 
          totalSlots: chassis.slots.rightArm,
          hardpoints: chassis.hardpoints.rightArm,
          slots: createSlots(chassis.slots.rightArm, chassis.hardpoints.rightArm)
        },
        leftLeg: { 
          ...prev.sections.leftLeg, 
          totalSlots: chassis.slots.leftLeg,
          hardpoints: chassis.hardpoints.leftLeg,
          slots: createSlots(chassis.slots.leftLeg, chassis.hardpoints.leftLeg)
        },
        rightLeg: { 
          ...prev.sections.rightLeg, 
          totalSlots: chassis.slots.rightLeg,
          hardpoints: chassis.hardpoints.rightLeg,
          slots: createSlots(chassis.slots.rightLeg, chassis.hardpoints.rightLeg)
        },
      }
    }));
    
    console.log('Updated sections will have:');
    console.log('Head: totalSlots =', chassis.slots.head, 'hardpoints =', chassis.hardpoints.head);
    console.log('Left Arm: totalSlots =', chassis.slots.leftArm, 'hardpoints =', chassis.hardpoints.leftArm);
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

  const assignSlotComponent = (sectionKey: keyof typeof mechBuild.sections, slotIndex: number, component: Component | null): void => {
    setMechBuild(prev => {
      const newSlots = [...prev.sections[sectionKey].slots];
      newSlots[slotIndex] = { ...newSlots[slotIndex], component };
      return {
        ...prev,
        sections: {
          ...prev.sections,
          [sectionKey]: {
            ...prev.sections[sectionKey],
            slots: newSlots
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
    
    // Add component tonnage from all slots
    Object.values(mechBuild.sections).forEach(section => {
      section.slots.forEach(slot => {
        if (slot.component) total += slot.component.tonnage;
      });
    });
    
    return total;
  };

  const calculateTotalArmor = (): number => {
    return Object.values(mechBuild.sections).reduce((total, section) => total + section.armorHP, 0);
  };

  const calculateTotalSlots = (): number => {
    return Object.values(mechBuild.sections).reduce((total, section) => total + section.totalSlots, 0);
  };

  const getUsedSlots = (): number => {
    return Object.values(mechBuild.sections).reduce((total, section) => {
      return total + section.slots.filter(slot => slot.component !== null).length;
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
    section
  }: { 
    sectionKey: keyof typeof mechBuild.sections; 
    section: MechSection;
  }): React.JSX.Element => {
    const usedSlots = section.slots.filter(slot => slot.component !== null).length;
    
    return (
      <Card className="h-full">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm flex items-center justify-between">
            {section.name}
            <Badge variant="secondary" className="text-xs">
              {usedSlots}/{section.totalSlots}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 pb-3">
          {/* Slots */}
          {section.slots.length > 0 && (
            <div className="space-y-1">
              <Label className="text-xs font-medium text-muted-foreground">
                SLOTS
              </Label>
              <div className="space-y-1">
                {section.slots.map((slot, index) => {
                  const isHardpoint = slot.type === 'hardpoint';
                  
                  return (
                    <div key={index} className="flex items-center gap-1">
                      <Badge 
                        variant={isHardpoint ? "destructive" : "outline"} 
                        className="w-6 h-5 flex items-center justify-center text-xs flex-shrink-0"
                      >
                        {index + 1}
                      </Badge>
                      <Select
                        value={slot.component?.name || 'empty'}
                        onValueChange={(value: string) => {
                          const selectedComponent = value === 'empty' ? null : allComponents.find(c => c.name === value) || null;
                          assignSlotComponent(sectionKey, index, selectedComponent);
                        }}
                      >
                        <SelectTrigger className="flex-1 h-6 text-xs">
                          <SelectValue placeholder="Empty" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="empty">Empty</SelectItem>
                          {allComponents.map(component => (
                            <SelectItem key={component.name} value={component.name}>
                              {component.name} ({component.tonnage}t)
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Compact Armor */}
          <div className="space-y-1">
            <Label className="text-xs font-medium text-muted-foreground">ARMOR</Label>
            <div className="flex items-center gap-1">
              <Input
                type="number"
                value={section.armorTonnage}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateArmorAllocation(sectionKey, Number(e.target.value) || 0)}
                className="w-12 h-6 text-xs text-center p-1"
                min="0"
                step="0.25"
                disabled={!mechBuild.armorType}
              />
              <span className="text-xs text-muted-foreground">t</span>
              <Badge variant="outline" className="text-xs font-mono h-5">
                {section.armorHP}hp
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-4">
        {/* Compact Header */}
        <div className="flex items-center justify-between mb-4">
          <Button variant="ghost" asChild className="hover:bg-muted/50">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Return
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">Mech Builder</h1>
          <div className="w-20"></div>
        </div>

        {/* Horizontal Configuration & Stats */}
        <div className="grid grid-cols-12 gap-4 mb-4">
          {/* Configuration */}
          <div className="col-span-8">
            <Card className="h-fit">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  Configuration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="mech-name" className="text-xs">Designation</Label>
                    <Input
                      id="mech-name"
                      value={mechBuild.name}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMechBuild(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Mech name..."
                      className="h-8"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="chassis-select" className="text-xs">Chassis *</Label>
                    <Select
                      value={mechBuild.chassis?.name || ''}
                      onValueChange={(value: string) => {
                        const chassis = allMechs.find(m => m.name === value);
                        if (chassis) updateChassisHardpoints(chassis);
                      }}
                    >
                      <SelectTrigger id="chassis-select" className="h-8">
                        <SelectValue placeholder="Select chassis..." />
                      </SelectTrigger>
                      <SelectContent>
                        {allMechs.map(mech => (
                          <SelectItem key={mech.name} value={mech.name}>
                            {mech.name} ({mech.tonnage}t)
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="armor-select" className="text-xs">Armor *</Label>
                    <Select
                      value={mechBuild.armorType?.name || ''}
                      onValueChange={(value: string) => {
                        const armor = armorTypes.find(a => a.name === value);
                        setMechBuild(prev => ({ ...prev, armorType: armor || null }));
                      }}
                    >
                      <SelectTrigger id="armor-select" className="h-8">
                        <SelectValue placeholder="Select armor..." />
                      </SelectTrigger>
                      <SelectContent>
                        {armorTypes.map(armor => (
                          <SelectItem key={armor.name} value={armor.name}>
                            {armor.name} ({armor.hpPerTon}/t)
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-xs">Status</Label>
                    {!isConfigurationValid() ? (
                      <div className="p-2 bg-destructive/10 border border-destructive/20 rounded text-xs text-destructive font-medium">
                        ⚠️ Select chassis & armor
                      </div>
                    ) : (
                      <div className="p-2 bg-green-500/10 border border-green-500/20 rounded text-xs text-green-700 font-medium">
                        ✓ Ready to configure
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats */}
          <div className="col-span-4">
            {isConfigurationValid() && (
              <Card className="h-fit">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Weight:</span>
                      <span className="font-mono">{calculateUsedTonnage().toFixed(1)}/{mechBuild.chassis!.tonnage}t</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Remaining:</span>
                      <span className={`font-mono ${getRemainingTonnage() < 0 ? 'text-destructive' : ''}`}>
                        {getRemainingTonnage().toFixed(1)}t
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Armor HP:</span>
                      <span className="font-mono">{calculateTotalArmor()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Slots:</span>
                      <span className="font-mono">{getUsedSlots()}/{calculateTotalSlots()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Full-Width Mech Sections */}
        {isConfigurationValid() && (
          <div className="grid grid-cols-4 gap-4 h-[calc(100vh-280px)]">
            {Object.entries(mechBuild.sections).map(([key, section]) => (
              <SectionCard 
                key={key} 
                sectionKey={key as keyof typeof mechBuild.sections} 
                section={section} 
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 