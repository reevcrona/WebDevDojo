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
    <section className="flex flex-col justify-start min-h-screen">
      <FilterPanel />
      <TopicsGrid query={query} selectedCategorySlugs={selectedSlugs} />
    </section>
  );
}
