import { getCategories } from "@/lib/query";
import FilterPanel from "@/ui/FilterPanel";
import Container from "@/ui/Container";
export default async function Page() {
  const data = await getCategories();
  console.log(data);
  return (
    <main className="flex justify-center min-h-screen p-12">
      <Container>
        <h1 className="text-5xl font-bold">Development Topics</h1>
        <p className="font-light">Browse and discover learning resources</p>
        <FilterPanel categories={data} />
      </Container>
    </main>
  );
}
