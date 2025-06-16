import { ArmorType } from '@/lib/types';

// Armor types data from Google Sheets
// Source: https://docs.google.com/spreadsheets/d/1O7zMbApXr8qzbmsin-DGgWR7Qd3VWkAiumeEDgeIECg/edit?gid=561668990#gid=561668990
export const armorTypes: ArmorType[] = [
  // Basic Armor Types
  { name: "MACM", hpPerTon: 30 },
  { name: "Composite Standard", hpPerTon: 40 },
  { name: "Reactive Plating", hpPerTon: 45 },
  
  // Intermediate Armor Types  
  { name: "Ablative Ceramic", hpPerTon: 50 },
  { name: "Ferro-Carbide", hpPerTon: 60 },
  { name: "Layered Composite", hpPerTon: 65 },
  
  // Advanced Armor Types
  { name: "Ballistic Mesh", hpPerTon: 70 },
  { name: "Kinetic Absorber", hpPerTon: 80 },
  { name: "Adaptive Plating", hpPerTon: 90 },
  
  // Superior Protection
  { name: "KS MIV", hpPerTon: 100 },
]; 