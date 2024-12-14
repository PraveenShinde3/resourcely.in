"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Custom404 = () => {
  const router = useRouter();

  useEffect(() => {
    // Ensure this code runs only on the client side
    if (typeof window !== "undefined") {
      router.replace("/");
    }
  }, [router]);

  return null; // Optional loading message or spinner
};

export default Custom404;
