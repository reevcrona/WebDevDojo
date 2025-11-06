import TopicNav from "@/ui/topics-components/TopicNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <TopicNav />
      {children}
    </section>
  );
}
