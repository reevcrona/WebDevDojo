import FilterPanel from "@/ui/topics-components/FilterPanel";
import Container from "@/layout/Container";
import TopicsGrid from "@/ui/topics-components/TopicsGrid";
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
        <FilterPanel />
        <TopicsGrid query={query} selectedCategorySlugs={selectedSlugs} />
      </Container>
    </main>
  );
}
