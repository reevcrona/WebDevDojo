import FilterPanel from "@/ui/FilterPanel";
import Container from "@/ui/Container";
import TopicsGrid from "@/ui/TopicsGrid";
export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    categories?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const selectedSlugs = (searchParams?.categories ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  return (
    <main className="flex justify-center min-h-screen p-12">
      <Container>
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-white">Development Topics</h1>
          <p className="font-light text-white">
            Browse and discover learning resources
          </p>
        </div>
        <FilterPanel />
        <TopicsGrid query={query} selectedCategorySlugs={selectedSlugs} />
      </Container>
    </main>
  );
}
