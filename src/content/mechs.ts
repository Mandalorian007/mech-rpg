import { MechChassis, MechType, SlotLayout } from '@/lib/types';

// Mech chassis data organized by type from Google Sheets
// Sources: 
// Light: https://docs.google.com/spreadsheets/d/1O7zMbApXr8qzbmsin-DGgWR7Qd3VWkAiumeEDgeIECg/edit?gid=523557904#gid=523557904
// Medium: https://docs.google.com/spreadsheets/d/1O7zMbApXr8qzbmsin-DGgWR7Qd3VWkAiumeEDgeIECg/edit?gid=1303703539#gid=1303703539
// Large: https://docs.google.com/spreadsheets/d/1O7zMbApXr8qzbmsin-DGgWR7Qd3VWkAiumeEDgeIECg/edit?gid=1486854281#gid=1486854281
// Siege: https://docs.google.com/spreadsheets/d/1O7zMbApXr8qzbmsin-DGgWR7Qd3VWkAiumeEDgeIECg/edit?gid=136474007#gid=136474007

// Slot configuration by mech size (as provided by user)
const getSlotsByMechType = (mechType: MechType): SlotLayout => {
  switch (mechType) {
    case MechType.LIGHT:
      return {
        head: 2,
        leftArm: 4,
        leftTorso: 7,
        centerTorso: 2,
        rightTorso: 7,
        rightArm: 4,
        leftLeg: 2,
        rightLeg: 2
      };
    case MechType.MEDIUM:
      return {
        head: 3,
        leftArm: 6,
        leftTorso: 9,
        centerTorso: 3,
        rightTorso: 9,
        rightArm: 6,
        leftLeg: 3,
        rightLeg: 3
      };
    case MechType.LARGE:
      return {
        head: 4,
        leftArm: 8,
        leftTorso: 11,
        centerTorso: 4,
        rightTorso: 11,
        rightArm: 8,
        leftLeg: 4,
        rightLeg: 4
      };
    case MechType.SIEGE:
      return {
        head: 5,
        leftArm: 10,
        leftTorso: 13,
        centerTorso: 5,
        rightTorso: 13,
        rightArm: 10,
        leftLeg: 5,
        rightLeg: 5
      };
  }
};

export const lightMechs: MechChassis[] = [
  {
    name: "Vesper",
    tonnage: 20,
    mechType: MechType.LIGHT,
    maxArmorTonnage: 10,
    baseSpeed: 1800,
    hexSpeed: 9,
    hardpoints: {
      head: 0,
      leftArm: 1,
      leftTorso: 2,
      centerTorso: 2,
      rightTorso: 2,
      rightArm: 1,
      leftLeg: 0,
      rightLeg: 0
    },
    slots: getSlotsByMechType(MechType.LIGHT)
  },
  {
    name: "Wraith II",
    tonnage: 20,
    mechType: MechType.LIGHT,
    maxArmorTonnage: 10,
    baseSpeed: 1600,
    hexSpeed: 8,
    hardpoints: {
      head: 0,
      leftArm: 1,
      leftTorso: 1,
      centerTorso: 0,
      rightTorso: 2,
      rightArm: 2,
      leftLeg: 0,
      rightLeg: 0
    },
    slots: getSlotsByMechType(MechType.LIGHT)
  },
  {
    name: "Firefly",
    tonnage: 25,
    mechType: MechType.LIGHT,
    maxArmorTonnage: 15,
    baseSpeed: 1400,
    hexSpeed: 7,
    hardpoints: {
      head: 0,
      leftArm: 3,
      leftTorso: 0,
      centerTorso: 0,
      rightTorso: 0,
      rightArm: 3,
      leftLeg: 0,
      rightLeg: 0
    },
    slots: getSlotsByMechType(MechType.LIGHT)
  },
  {
    name: "Jackdaw",
    tonnage: 25,
    mechType: MechType.LIGHT,
    maxArmorTonnage: 15,
    baseSpeed: 1600,
    hexSpeed: 8,
    hardpoints: {
      head: 0,
      leftArm: 1,
      leftTorso: 2,
      centerTorso: 1,
      rightTorso: 1,
      rightArm: 1,
      leftLeg: 0,
      rightLeg: 0
    },
    slots: getSlotsByMechType(MechType.LIGHT)
  },
  {
    name: "Kestrel",
    tonnage: 25,
    mechType: MechType.LIGHT,
    maxArmorTonnage: 15,
    baseSpeed: 1400,
    hexSpeed: 7,
    hardpoints: {
      head: 1,
      leftArm: 2,
      leftTorso: 0,
      centerTorso: 1,
      rightTorso: 0,
      rightArm: 2,
      leftLeg: 0,
      rightLeg: 0
    },
    slots: getSlotsByMechType(MechType.LIGHT)
  },
  {
    name: "Needleback",
    tonnage: 30,
    mechType: MechType.LIGHT,
    maxArmorTonnage: 15,
    baseSpeed: 1200,
    hexSpeed: 6,
    hardpoints: {
      head: 0,
      leftArm: 2,
      leftTorso: 1,
      centerTorso: 1,
      rightTorso: 1,
      rightArm: 2,
      leftLeg: 0,
      rightLeg: 0
    },
    slots: getSlotsByMechType(MechType.LIGHT)
  }
];

export const mediumMechs: MechChassis[] = [
  {
    name: "Centurion",
    tonnage: 40,
    mechType: MechType.MEDIUM,
    maxArmorTonnage: 20,
    baseSpeed: 1000,
    hexSpeed: 5,
    hardpoints: {
      head: 1,
      leftArm: 2,
      leftTorso: 2,
      centerTorso: 3,
      rightTorso: 2,
      rightArm: 2,
      leftLeg: 0,
      rightLeg: 0
    },
    slots: getSlotsByMechType(MechType.MEDIUM)
  },
  {
    name: "Griffin",
    tonnage: 45,
    mechType: MechType.MEDIUM,
    maxArmorTonnage: 25,
    baseSpeed: 1200,
    hexSpeed: 6,
    hardpoints: {
      head: 0,
      leftArm: 1,
      leftTorso: 3,
      centerTorso: 2,
      rightTorso: 3,
      rightArm: 1,
      leftLeg: 0,
      rightLeg: 0
    },
    slots: getSlotsByMechType(MechType.MEDIUM)
  },
  {
    name: "Wolverine",
    tonnage: 50,
    mechType: MechType.MEDIUM,
    maxArmorTonnage: 30,
    baseSpeed: 1000,
    hexSpeed: 5,
    hardpoints: {
      head: 1,
      leftArm: 3,
      leftTorso: 1,
      centerTorso: 2,
      rightTorso: 1,
      rightArm: 3,
      leftLeg: 0,
      rightLeg: 0
    },
    slots: getSlotsByMechType(MechType.MEDIUM)
  },
  {
    name: "Catapult",
    tonnage: 55,
    mechType: MechType.MEDIUM,
    maxArmorTonnage: 35,
    baseSpeed: 800,
    hexSpeed: 4,
    hardpoints: {
      head: 0,
      leftArm: 2,
      leftTorso: 4,
      centerTorso: 1,
      rightTorso: 4,
      rightArm: 2,
      leftLeg: 0,
      rightLeg: 0
    },
    slots: getSlotsByMechType(MechType.MEDIUM)
  },
  {
    name: "Trebuchet",
    tonnage: 60,
    mechType: MechType.MEDIUM,
    maxArmorTonnage: 40,
    baseSpeed: 1000,
    hexSpeed: 5,
    hardpoints: {
      head: 1,
      leftArm: 1,
      leftTorso: 2,
      centerTorso: 3,
      rightTorso: 2,
      rightArm: 1,
      leftLeg: 1,
      rightLeg: 1
    },
    slots: getSlotsByMechType(MechType.MEDIUM)
  }
];

export const largeMechs: MechChassis[] = [
  {
    name: "Stalker",
    tonnage: 70,
    mechType: MechType.LARGE,
    maxArmorTonnage: 45,
    baseSpeed: 600,
    hexSpeed: 3,
    hardpoints: {
      head: 1,
      leftArm: 3,
      leftTorso: 4,
      centerTorso: 2,
      rightTorso: 4,
      rightArm: 3,
      leftLeg: 1,
      rightLeg: 1
    },
    slots: getSlotsByMechType(MechType.LARGE)
  },
  {
    name: "Marauder",
    tonnage: 75,
    mechType: MechType.LARGE,
    maxArmorTonnage: 50,
    baseSpeed: 800,
    hexSpeed: 4,
    hardpoints: {
      head: 2,
      leftArm: 2,
      leftTorso: 3,
      centerTorso: 4,
      rightTorso: 3,
      rightArm: 2,
      leftLeg: 0,
      rightLeg: 0
    },
    slots: getSlotsByMechType(MechType.LARGE)
  },
  {
    name: "Warhammer",
    tonnage: 80,
    mechType: MechType.LARGE,
    maxArmorTonnage: 55,
    baseSpeed: 600,
    hexSpeed: 3,
    hardpoints: {
      head: 1,
      leftArm: 4,
      leftTorso: 2,
      centerTorso: 3,
      rightTorso: 2,
      rightArm: 4,
      leftLeg: 1,
      rightLeg: 1
    },
    slots: getSlotsByMechType(MechType.LARGE)
  },
  {
    name: "Battlemaster",
    tonnage: 85,
    mechType: MechType.LARGE,
    maxArmorTonnage: 60,
    baseSpeed: 800,
    hexSpeed: 4,
    hardpoints: {
      head: 2,
      leftArm: 3,
      leftTorso: 3,
      centerTorso: 2,
      rightTorso: 3,
      rightArm: 3,
      leftLeg: 2,
      rightLeg: 2
    },
    slots: getSlotsByMechType(MechType.LARGE)
  },
  {
    name: "Cyclops",
    tonnage: 90,
    mechType: MechType.LARGE,
    maxArmorTonnage: 65,
    baseSpeed: 600,
    hexSpeed: 3,
    hardpoints: {
      head: 3,
      leftArm: 2,
      leftTorso: 4,
      centerTorso: 5,
      rightTorso: 4,
      rightArm: 2,
      leftLeg: 1,
      rightLeg: 1
    },
    slots: getSlotsByMechType(MechType.LARGE)
  }
];

export const siegeMechs: MechChassis[] = [
  {
    name: "Atlas",
    tonnage: 100,
    mechType: MechType.SIEGE,
    maxArmorTonnage: 70,
    baseSpeed: 400,
    hexSpeed: 2,
    hardpoints: {
      head: 2,
      leftArm: 4,
      leftTorso: 5,
      centerTorso: 6,
      rightTorso: 5,
      rightArm: 4,
      leftLeg: 2,
      rightLeg: 2
    },
    slots: getSlotsByMechType(MechType.SIEGE)
  },
  {
    name: "King Crab",
    tonnage: 100,
    mechType: MechType.SIEGE,
    maxArmorTonnage: 75,
    baseSpeed: 400,
    hexSpeed: 2,
    hardpoints: {
      head: 1,
      leftArm: 6,
      leftTorso: 3,
      centerTorso: 4,
      rightTorso: 3,
      rightArm: 6,
      leftLeg: 2,
      rightLeg: 2
    },
    slots: getSlotsByMechType(MechType.SIEGE)
  },
  {
    name: "Banshee",
    tonnage: 95,
    mechType: MechType.SIEGE,
    maxArmorTonnage: 70,
    baseSpeed: 600,
    hexSpeed: 3,
    hardpoints: {
      head: 2,
      leftArm: 3,
      leftTorso: 4,
      centerTorso: 5,
      rightTorso: 4,
      rightArm: 3,
      leftLeg: 3,
      rightLeg: 3
    },
    slots: getSlotsByMechType(MechType.SIEGE)
  },
  {
    name: "Highlander",
    tonnage: 90,
    mechType: MechType.SIEGE,
    maxArmorTonnage: 65,
    baseSpeed: 600,
    hexSpeed: 3,
    hardpoints: {
      head: 1,
      leftArm: 2,
      leftTorso: 3,
      centerTorso: 4,
      rightTorso: 3,
      rightArm: 2,
      leftLeg: 4,
      rightLeg: 4
    },
    slots: getSlotsByMechType(MechType.SIEGE)
  }
];

// Combined array of all mechs for the main table
export const allMechs: MechChassis[] = [
  ...lightMechs,
  ...mediumMechs,
  ...largeMechs,
  ...siegeMechs
]; 