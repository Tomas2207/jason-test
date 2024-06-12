"use client";
import { useEffect, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { HiOutlineCheckCircle } from "react-icons/hi";

const SuccessPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showcheck, setShowCheck] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        setShowCheck(true);
      }, 500);
    }
  }, [isLoading]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="flex gap-2 items-center max-w-[900px] p-8 my-0">
        {isLoading ? (
          <AiOutlineLoading className="text-purple-600 text-[300px] animate-spin" />
        ) : (
          <div
            className={`flex flex-col items-center justify-center transition-opacity duration-1000 ${
              showcheck ? "opacity-100" : "opacity-0"
            }`}
          >
            <h1 className="text-gray-700 mb-8 text-3xl font-semibold">
              Congratulations!
            </h1>
            <h2 className="text-gray-700 mb-8 text-2xl font-semibold">
              Await for our team to contact you with further details.
            </h2>
            <HiOutlineCheckCircle className={`text-teal-500 text-[300px] `} />
          </div>
        )}
      </div>
    </main>
  );
};

export default SuccessPage;
