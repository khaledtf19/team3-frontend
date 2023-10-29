import Button from "@/components/Button";
import ClientTest from "@/components/clientTest";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <ClientTest />
      <Button variant="primary" className="bg-green-100">test</Button>
    </main>
  );
}
