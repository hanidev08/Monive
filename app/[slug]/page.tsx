import { projects } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

const ProjectPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className=" min-h-screen flex flex-col items-center justify-center p-8">
      <div className=" max-w-4xl w-full">
        <Link href="/" className=" inline-block mb-8 text-sm hover:underline">
          &larr; Retour
        </Link>

        <div className=" space-y-6">
          <div className=" flex items-baseline gap-4">
            <h1 className=" text-4xl font-bold">{project.number}</h1>
            <span className=" text-xl italic font-medium text-gray-600">
              {project.date}
            </span>
          </div>

          <div className=" relative w-full aspect-video">
            <Image
              src={project.image}
              alt={project.slug}
              fill
              className=" object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 80vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;

// import { projects } from "@/data/data";
// import Image from "next/image";
// import Link from "next/link";
// import { notFound } from "next/navigation";
// import React from "react";

// interface PageProps {
//   params: Promise<{
//     slug: string;
//   }>;
// }

// export async function generateStaticParams() {
//   return projects.map((project) => ({
//     slug: project.slug,
//   }));
// }

// const ProjectPage = async ({ params }: PageProps) => {
//   const { slug } = await params;

//   const project = projects.find((p) => p.slug === slug);

//   if (!project) {
//     notFound();
//   }
//   return (
//     <div className=" min-h-screen flex flex-col items-center justify-center p-8">
//       <div className=" max-w-xl w-full">
//         <Link href="/" className=" inline-block mb-8 text-sm hover:underline">
//           &larr; Retour
//         </Link>

//         <div className=" space-y-6">
//           <div className="flex items-baseline gap-4">
//             <h1 className=" text-4xl font-bold">{project.number}</h1>
//             <span className=" text-4xl italic font-medium text-gray-600">
//               {project.date}
//             </span>
//           </div>
//           <div className=" relative w-full aspect-video">
//             <Image
//               src={project.image}
//               alt={project.slug}
//               fill
//               className=" object-cover"
//               priority
//               sizes="(max-width:1024px) 100vw, 80vw"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectPage;
