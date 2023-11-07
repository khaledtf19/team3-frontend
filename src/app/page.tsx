import { DropdownMenu } from "@/components/DropdownMenu";
import { FaBars, FaHome } from "react-icons/fa";

export default function Home() {
  // eslint-disable-next-line react/jsx-key
  const icons = [<FaHome />, <FaBars />];
  const options = {
    name: "Hammam",
    category: {
      Software: "Data Base",
      Graphical: "UI & UX",
      isOpen: false,
    },
    sections: {
      Design: "HTML & CSS",
      Logic: "JS",
      Framework: "React Js",
      DB: "MongoDB",
      isOpen: true,
    },
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <DropdownMenu options={options} icons={icons} />
    </main>
  );
}
