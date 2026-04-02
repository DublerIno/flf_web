import { GooeyDemo } from "@/components/ui/demo";
import { ProjectGallery } from "@/components/ui/project-gallery";
import Slideshow from "@/components/ui/slideshow";

export default function Home() {
  return (
    <main className="min-h-screen snap-y snap-proximity overflow-hidden">
      <GooeyDemo />
      <ProjectGallery />
      <Slideshow />
    </main>
  );
}
