"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Custom404 = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      router.replace("/");
    }
  }, [router]);

  return null;
};

export default Custom404;
