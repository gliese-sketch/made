"use client";
import { Button, HeroUIProvider } from "@heroui/react";

export default function Home() {
  return (
    <HeroUIProvider>
      <div className="min-h-screen flex justify-center items-center text-6xl flex-col gap-2">
        <h1>Hello there</h1>
        <Button>Click me</Button>
      </div>
    </HeroUIProvider>
  );
}
