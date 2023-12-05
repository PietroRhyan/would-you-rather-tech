import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Would You Rather Tech" },
    { name: "description", content: "Welcome to Would You Rather Tech!" },
  ];
};

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl text-red-700">Hello World</h1>
    </div>
  );
}
