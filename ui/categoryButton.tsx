type CategoryButtonProps = {
  name: string;
};

export default function CategoryButton({ name }: CategoryButtonProps) {
  return <button>{name}</button>;
}
