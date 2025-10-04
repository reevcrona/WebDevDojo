type CategoryButtonProps = {
  name: string;
};

export default function CategoryButton({ name }: CategoryButtonProps) {
  return (
    <button className="bg-slate-700 text-slate-300 hover:bg-slate-600 px-4 py-2 rounded-xl cursor-pointer">
      {name}
    </button>
  );
}
