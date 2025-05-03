// src/components/AosInitializer.jsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AosInitializer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // এনিমেশন কত সময় ধরে চলবে (মিলিসেকেন্ডে)
      once: true,     // শুধু একবার এনিমেশন চলবে
      offset: 120,    // স্ক্রল করার সময় কত দূরে থেকে এনিমেশন শুরু হবে
    });
  }, []);

  return null;
};

export default AosInitializer;
