import Image from "next/image";
import { notFound } from "next/navigation";
import { getProjectById, projects } from "@/lib/data";
import styles from "./project.module.css";

// Define the exact Next.js 15 Promise structure
interface PageProps {
  params: Promise<{ projectId: string }>;
}

// Generate static routes at build time
export async function generateStaticParams() {
  return projects.map((project) => ({
    projectId: project.id,
  }));
}

// The main page component must be defined here
export default async function ProjectDetail({ params }: PageProps) {
  // 1. Await and destructure the params IMMEDIATELY
  const { projectId } = await params;
  
  // 2. Fetch the data using the awaited ID
  const project = await getProjectById(projectId);

  // 3. Return notFound() explicitly if it fails
  if (!project) {
    return notFound();
  }

  // 4. Render the UI
  return (
    <main className={styles.projectMain}>
      <header className={styles.projectHeader}>
        <h1 className={styles.projectTitle}>{project.title}</h1>
        <div className={styles.projectMeta}>
          <span>{project.year}</span>
        </div>
      </header>

      <div className={styles.imageContainer}>
        <Image 
          src={project.image}
          alt={project.title}
          fill
          className={styles.heroImage}
          priority
        />
      </div>

      <article className={styles.projectBrief}>
        <h2>Brief</h2>
        <p>{project.description}</p>
      </article>
    </main>
  );
}