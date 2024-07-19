import Image from "next/image";
import Card from "@/components/Card";

export default function Home() {
  return (
   <main>
<div className={"flex flex-row items-center justify-center px-16 bg-gray-100 gap-1"}>
    <Card placeholder={"your text"}/>
    <Card placeholder={"output text"}/>
</div>
   </main>
  );
}
