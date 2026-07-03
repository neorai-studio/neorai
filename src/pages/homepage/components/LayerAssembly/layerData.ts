export interface LayerData {
  index: number;
  label: string;
  title: string;
  description: string;
  cardDescription: string;
}

export const LAYERS: LayerData[] = [
  {
    index: 0,
    label: "01",
    title: "Outer shell",
    description: "500g Heavyweight Fleece Blend",
    cardDescription:
      "A premium 65% Polyester / 35% Cotton blend. Wind-resistant, breathable, and offers a stealthy, non-bulky silhouette that resists shrinking",
  },
  {
    index: 1,
    label: "02",
    title: "The Shield",
    description: "100% DuPont™ Kevlar®",
    cardDescription:
      "Woven into the high-impact zones (shoulders, elbows, and back). This military-grade material provides exceptional tear and abrasion resistance to protect against road rash",
  },
  {
    index: 2,
    label: "03",
    title: "Impact core",
    description: "CE-Rated Armor Anchors",
    cardDescription:
      "Strategically reinforced internal mesh pockets designed to lock the protective armor securely in place, preventing shifting during a ride or a slide",
  },
  {
    index: 3,
    label: "04",
    title: "Base lining",
    description: "Moisture-Wicking Micro-Mesh",
    cardDescription:
      "Pulls sweat away from your body and allows air circulation, keeping you cool at traffic lights and comfortable at highway speeds",
  },
];
