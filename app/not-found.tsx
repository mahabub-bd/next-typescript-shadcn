import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-gradient-to-r from-blue-200 via-purple-200 to-indigo-200">
      <div className=" container mx-auto flex flex-col items-center justify-center h-[30vh] ">
        <h1 className="text-4xl font-bold text-red-600">
          404 - Page Not Found
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Oops! The page you are looking for doesn’t exist.
        </p>
        <Button
          variant="outline"
          size="default"
          className="mt-5 flex gap-2 items-center"
        >
          <HomeIcon />
          <Link href="/">Go Back to Home</Link>
        </Button>
      </div>
    </section>
  );
}
