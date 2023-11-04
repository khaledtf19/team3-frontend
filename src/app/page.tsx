import { DropdownMenu } from "@/components/DropdownMenu";

export default function Home() {
  const options = {
    name: "Hammam",
    category: {
      Software: "Data Base",
      Graphical: "UI & UX",
    },
    sections: {
      Design: "HTML & CSS",
      Logic: "JS",
      Framework: "React Js",
      DB: "MongoDB",
    },
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <DropdownMenu options={options} />
    </main>
  );
}
