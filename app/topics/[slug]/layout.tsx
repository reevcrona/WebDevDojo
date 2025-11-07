import TopicNav from "@/ui/overview-components/TopicNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <TopicNav />
      {children}
    </section>
  );
}
