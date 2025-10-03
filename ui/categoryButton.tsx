type CategoryButtonProps = {
  name: string;
};

export default function CategoryButton({ name }: CategoryButtonProps) {
  return <button className="text-red-600">{name}</button>;
}
