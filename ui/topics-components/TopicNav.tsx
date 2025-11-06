import ClientLink from "../ClientLink";

export default function TopicNav() {
  return (
    <nav>
      <ul>
        <li>
          <ClientLink slug="overview">Overview</ClientLink>
        </li>
        <li>
          <ClientLink slug="learn">Learn</ClientLink>
        </li>
        <li>
          <ClientLink slug="quiz">Quiz</ClientLink>
        </li>
        <li>
          <ClientLink slug="ai">Ai</ClientLink>
        </li>
      </ul>
    </nav>
  );
}
