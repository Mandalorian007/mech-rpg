import { Component } from '@/lib/types';

// Weapons & Equipment data from Google Sheets
// Source: https://docs.google.com/spreadsheets/d/1O7zMbApXr8qzbmsin-DGgWR7Qd3VWkAiumeEDgeIECg/edit?gid=1019336811#gid=1019336811
export const components: Component[] = [
  // Defensive Systems
  { name: "Aegis Class Barrier", tonnage: 6 },
  
  // Ammunition Types
  { name: "Ammo, Beacon", tonnage: 1, projectileCount: 200 },
  { name: "Ammo, Beacon (Half)", tonnage: 0.5, projectileCount: 100 },
  { name: "Ammo, Beacon (Quarter)", tonnage: 0.25, projectileCount: 50 },
  { name: "Ammo, DShoRM", tonnage: 1, projectileCount: 90 },
  { name: "Ammo, DShoRM (Half)", tonnage: 0.5, projectileCount: 45 },
  { name: "Ammo, DShoRM (Quarter)", tonnage: 0.25, projectileCount: 22 },
  { name: "Ammo, Gauss", tonnage: 1, projectileCount: 8 },
  { name: "Ammo, Gauss (Half)", tonnage: 0.5, projectileCount: 4 },
  { name: "Ammo, Gauss (Quarter)", tonnage: 0.25, projectileCount: 2 },
  { name: "Ammo, Heavy Cannon", tonnage: 1, projectileCount: 10 },
  { name: "Ammo, Heavy Cannon (Half)", tonnage: 0.5, projectileCount: 5 },
  { name: "Ammo, Heavy Cannon (Quarter)", tonnage: 0.25, projectileCount: 2 },
  { name: "Ammo, Heavy Chem", tonnage: 1, projectileCount: 16 },
  { name: "Ammo, Heavy Chem (Half)", tonnage: 0.5, projectileCount: 8 },
  { name: "Ammo, Heavy Chem (Quarter)", tonnage: 0.25, projectileCount: 4 },
  { name: "Ammo, Heavy Rotary", tonnage: 1, projectileCount: 16 },
  { name: "Ammo, Heavy Rotary (Half)", tonnage: 0.5, projectileCount: 8 },
  { name: "Ammo, Heavy Rotary (Quarter)", tonnage: 0.25, projectileCount: 4 },
  { name: "Ammo, Light Cannon", tonnage: 1, projectileCount: 16 },
  { name: "Ammo, Light Cannon (Half)", tonnage: 0.5, projectileCount: 8 },
  { name: "Ammo, Light Cannon (Quarter)", tonnage: 0.25, projectileCount: 4 },
  { name: "Ammo, Light Chem", tonnage: 1, projectileCount: 24 },
  { name: "Ammo, Light Chem (Half)", tonnage: 0.5, projectileCount: 12 },
  { name: "Ammo, Light Chem (Quarter)", tonnage: 0.25, projectileCount: 6 },
  { name: "Ammo, Light Rotary", tonnage: 1, projectileCount: 20 },
  { name: "Ammo, Light Rotary (Half)", tonnage: 0.5, projectileCount: 10 },
  
  // Energy Weapons - Chem Lasers
  { name: "Chem Laser, Light", tonnage: 2 },
  { name: "Chem Laser, Medium", tonnage: 4 },
  
  // Missile Systems
  { name: "DShorm 05", tonnage: 1 },
  { name: "DShorm 10", tonnage: 1.5 },
  { name: "DShorm 15", tonnage: 2 },
  { name: "DShorm 20", tonnage: 2.5 },
  
  // Electronic Warfare
  { name: "ECM, MK I", tonnage: 1 },
  { name: "ECM, MK II", tonnage: 2.5 },
  { name: "ECM, MK III", tonnage: 4 },
  
  // Energy Weapons - EM Phase Cannons
  { name: "EM Phase Cannon, Heavy", tonnage: 12 },
  { name: "EM Phase Cannon, Light", tonnage: 8 },
  { name: "EM Phase Cannon, Medium", tonnage: 10 },
  { name: "EM Phase Cannon, Snub Nose", tonnage: 8 },
  
  // Energy Weapons - ER Lasers
  { name: "ER Laser, Heavy", tonnage: 10 },
  { name: "ER Laser, Light", tonnage: 4 },
  { name: "ER Laser, Medium", tonnage: 6 },
  
  // Ballistic Weapons - Gauss Rifles
  { name: "Gauss Rifle, Heavy", tonnage: 22 },
  { name: "Gauss Rifle, Light", tonnage: 12 },
  { name: "Gauss Rifle, Medium", tonnage: 17 },
  
  // Heat Management
  { name: "Heat Sink", tonnage: 1 },
  { name: "Heat Sink, Heavy", tonnage: 2 },
  { name: "Heat Sink, Light", tonnage: 0.5 },
  
  // Artillery
  { name: "Howitzer, M24", tonnage: 16 },
  { name: "Howitzer, M48", tonnage: 22 },
  
  // Empty Slot (for builder interface)
  { name: "Empty", tonnage: 0 },
]; 