import ClientLink from "../ClientLink";

export default function TopicNav() {
  return (
    <nav className="border-b-2 border-gray-300 p-2">
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
