import ClientLink from "../ClientLink";

export default function TopicNav() {
  return (
    <nav className="flex items-end pl-0 md:pl-8 space-x-2 relative z-10 translate-y-[4px]">
      <ul className="flex gap-5">
        <li>
          <ClientLink slug="overview">Overview</ClientLink>
        </li>
        <li>
          <ClientLink slug="learn">Learn</ClientLink>
        </li>
        <li>
          <ClientLink slug="examples">Examples</ClientLink>
        </li>
        <li>
          <ClientLink slug="quiz">Quiz</ClientLink>
        </li>
        <li>
          <ClientLink slug="practice">Practice</ClientLink>
        </li>
      </ul>
    </nav>
  );
}
