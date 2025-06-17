// Core component interfaces based on mech-rpg-system.md

export interface Component {
  name: string;
  tonnage: number;
  projectileCount?: number;
}

export interface ArmorType {
  name: string;
  hpPerTon: number;
}

export interface MechChassis {
  name: string;
  tonnage: number;
  mechType: MechType;
  maxArmorTonnage: number;
  baseSpeed: number;
  hexSpeed: number;
  hardpoints: HardpointLayout;
  slots: SlotLayout;
  description?: string;
}

export enum MechType {
  LIGHT = "Light",
  MEDIUM = "Medium",
  LARGE = "Large",
  SIEGE = "Siege"
}

export interface HardpointLayout {
  head: number;
  leftArm: number;
  leftTorso: number;
  centerTorso: number;
  rightTorso: number;
  rightArm: number;
  leftLeg: number;
  rightLeg: number;
}

export interface SlotLayout {
  head: number;
  leftArm: number;
  leftTorso: number;
  centerTorso: number;
  rightTorso: number;
  rightArm: number;
  leftLeg: number;
  rightLeg: number;
}

// Utility types for table components
export interface TableColumn<T> {
  key: keyof T;
  label: string;
  sortable?: boolean;
  filterable?: boolean;
}

export interface FilterOption {
  label: string;
  value: string;
}

// Navigation types
export interface NavItem {
  href: string;
  label: string;
  icon?: string;
} 