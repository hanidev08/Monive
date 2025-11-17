export type DetailItem = {
  label: string;
  date: string;
};

export interface Project {
  slug: string;
  title: string;
  image: string;
  description?: string;
  details?: {
    sectionImage: string;
    items: DetailItem[];
  };
}

export const projects: Project[] = [
  {
    slug: "neon-dreams",
    title: "Neon Dreams",
    image: "/section1.png",
    description: "Urban energy captured in Tokyo's vibrant alleys",
    details: {
      sectionImage: "/section2.png",
      items: [
        { label: "Experiment 001", date: "Live" },
        { label: "Experiment 002", date: "Live" },
        { label: "Experiment 003", date: "Incoming" },
        { label: "Experiment 004", date: "Incoming" },
        { label: "Experiment 005", date: "Incoming" },
        { label: "Experiment 006", date: "Incoming" },
        { label: "Experiment 007", date: "Incoming" },
        { label: "Experiment 008", date: "Incoming" },
        { label: "Experiment 009", date: "Incoming" },
        { label: "Experiment 010", date: "Incoming" },
        { label: "Experiment 011", date: "Incoming" },
        { label: "Experiment 012", date: "Incoming" },
        { label: "Experiment 013", date: "Incoming" },
        { label: "Experiment 014", date: "Incoming" },
        { label: "Experiment 015", date: "Incoming" },
        { label: "Experiment 016", date: "Incoming" },
      ],
    },
  },
  {
    slug: "slient-streets",
    title: "Slient Streets",
    image: "/section3.png",
    description: "The quiet beauty of Tokoyo after hours",
    details: {
      sectionImage: "/section4.png",
      items: [
        { label: "Experiment 001", date: "Live" },
        { label: "Experiment 002", date: "Live" },
        { label: "Experiment 003", date: "Incoming" },
        { label: "Experiment 004", date: "Incoming" },
        { label: "Experiment 005", date: "Incoming" },
        { label: "Experiment 006", date: "Incoming" },
        { label: "Experiment 007", date: "Incoming" },
        { label: "Experiment 008", date: "Incoming" },
        { label: "Experiment 009", date: "Incoming" },
        { label: "Experiment 010", date: "Incoming" },
        { label: "Experiment 011", date: "Incoming" },
        { label: "Experiment 012", date: "Incoming" },
        { label: "Experiment 013", date: "Incoming" },
        { label: "Experiment 014", date: "Incoming" },
        { label: "Experiment 015", date: "Incoming" },
        { label: "Experiment 016", date: "Incoming" },
      ],
    },
  },
  {
    slug: "urban-reflections",
    title: "Urban Reflections",
    image: "/section5.png",
    description: "Exploring neon reflections across modern architecture",
    details: {
      sectionImage: "/section6.png",
      items: [
        { label: "Experiment 001", date: "Live" },
        { label: "Experiment 002", date: "Live" },
        { label: "Experiment 003", date: "Incoming" },
        { label: "Experiment 004", date: "Incoming" },
        { label: "Experiment 005", date: "Incoming" },
        { label: "Experiment 006", date: "Incoming" },
        { label: "Experiment 007", date: "Incoming" },
        { label: "Experiment 008", date: "Incoming" },
        { label: "Experiment 009", date: "Incoming" },
        { label: "Experiment 010", date: "Incoming" },
        { label: "Experiment 011", date: "Incoming" },
        { label: "Experiment 012", date: "Incoming" },
        { label: "Experiment 013", date: "Incoming" },
        { label: "Experiment 014", date: "Incoming" },
        { label: "Experiment 015", date: "Incoming" },
        { label: "Experiment 016", date: "Incoming" },
      ],
    },
  },
  {
    slug: "night-vibes",
    title: "Night Vibes",
    image: "/section7.png",
    description: "A cinematic journey into the pulse of the night",
    details: {
      sectionImage: "/section8.png",
      items: [
        { label: "Experiment 001", date: "Live" },
        { label: "Experiment 002", date: "Live" },
        { label: "Experiment 003", date: "Incoming" },
        { label: "Experiment 004", date: "Incoming" },
        { label: "Experiment 005", date: "Incoming" },
        { label: "Experiment 006", date: "Incoming" },
        { label: "Experiment 007", date: "Incoming" },
        { label: "Experiment 008", date: "Incoming" },
        { label: "Experiment 009", date: "Incoming" },
        { label: "Experiment 010", date: "Incoming" },
        { label: "Experiment 011", date: "Incoming" },
        { label: "Experiment 012", date: "Incoming" },
        { label: "Experiment 013", date: "Incoming" },
        { label: "Experiment 014", date: "Incoming" },
        { label: "Experiment 015", date: "Incoming" },
        { label: "Experiment 016", date: "Incoming" },
      ],
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(currentSlug: string): Project | undefined {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
  if (currentIndex === -1) return undefined;
  const nextIndex = (currentIndex + 1) % projects.length;
  return projects[nextIndex];
}
