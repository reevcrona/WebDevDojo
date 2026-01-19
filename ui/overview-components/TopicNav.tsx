import ClientLink from "../ClientLink";

export default function TopicNav() {
  return (
    <nav className="flex items-end pl-0 md:pl-8 space-x-2 relative z-10 translate-y-[4px]">
      <ul className="flex gap-5">
        <li>
          <ClientLink slug="overview">[ OVERVIEW ]</ClientLink>
        </li>
        <li>
          <ClientLink slug="learn">[ LEARN ]</ClientLink>
        </li>
        <li>
          <ClientLink slug="examples">[ EXAMPLES ]</ClientLink>
        </li>
        <li>
          <ClientLink slug="quiz">[ QUIZ ]</ClientLink>
        </li>
        <li>
          <ClientLink slug="practice">[ PRACTICE ]</ClientLink>
        </li>
      </ul>
    </nav>
  );
}
