export const projects = [
  {
    id: "1",
    title: "The Glass Pavilion",
    description: "A brutalist structure softened by panoramic glass, designed to invite natural light into every interior space.",
    image: "https://images.unsplash.com/photo-1687120270050-de10bcc518e2?auto=format&fit=crop&q=80",
    year: "2025"
  },
  {
    id: "2",
    title: "Breeze Porcelain",
    description: "Minimalist residential design utilizing white porcelain facades to naturally reflect heat while maintaining striking geometry.",
    image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&q=80",
    year: "2026"
  },
  {
    id: "3",
    title: "The Timber House",
    description: "Sustainable timber construction seamlessly integrated into the surrounding forest topography to minimize environmental footprint.",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80",
    year: "2024"
  },
  {
    id: "4",
    title: "Concrete Horizon",
    description: "A commercial gallery space utilizing raw concrete forms and asymmetric skylights to manipulate interior shadow and light.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
    year: "2025"
  },
  {
    id: "5",
    title: "Terracotta Villa",
    description: "Modernizing traditional earth-based architecture with expansive central courtyards and passive natural ventilation.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80",
    year: "2023"
  },
  {
    id: "6",
    title: "Lumina Loft",
    description: "A high-altitude residential loft maximizing vertical space with floating staircases and bespoke metallic fixtures.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80",
    year: "2026"
  }
];

export async function getProjectById(id: string) {
  return projects.find(p => p.id === id) || null;
}