type CategoryButtonProps = {
  name: string;
};

export default function CategoryButton({ name }: CategoryButtonProps) {
  return (
    <button className="bg-slate-100 text-slate-700 px-4 py-2 rounded-xl">
      {name}
    </button>
  );
}
