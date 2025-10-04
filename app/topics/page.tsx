import { getCategories } from "@/lib/query";
import FilterPanel from "@/ui/FilterPanel";
import Container from "@/ui/Container";
import TopicsGrid from "@/ui/TopicsGrid";
export default async function Page() {
  const data = await getCategories();
  console.log(data);
  return (
    <main className="flex justify-center min-h-screen p-12">
      <Container>
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-white">Development Topics</h1>
          <p className="font-light text-white">
            Browse and discover learning resources
          </p>
        </div>
        <FilterPanel categories={data} />
        <TopicsGrid />
      </Container>
    </main>
  );
}
