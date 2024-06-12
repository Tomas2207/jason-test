import Image from "next/image";
import { HiOutlineCheckCircle } from "react-icons/hi";
import Step from "./components/Step";
import { IoMdStar } from "react-icons/io";
import Reviews from "./components/Reviews";
import StatusBadge from "./components/StatusBadge";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="flex gap-2 items-center max-w-[900px] rounded-2xl shadow-lg p-8 my-0 bg-white z-10">
        <div>
          <h1 className="text-gray-700 mb-8 text-3xl font-semibold">
            You are almost there!
          </h1>
          <h2 className="text-gray-700 mb-8 text-2xl font-semibold">
            Complete Your Business Compliance Checklist
          </h2>
          <div className="flex flex-col gap-3">
            <Step
              complete
              title="Upload Business License"
              subtext="Upload your articles of incorporation, contractor license, or other
            registration with the state."
            />
            <Step complete title="Complete Onboarding Questionaire" />
            <Step
              complete
              title="Sign NDA"
              subtext="NDA will be sent separately, via Adobe e-sign"
            />
            <Step
              title="Upload Certificate of Insurance"
              subtext="Requirements"
              pdf
            />
          </div>
        </div>
        <div className="group relative my-auto">
          <Image src={"/atoz.png"} height={300} width={300} alt="logo" />
          <div className="opacity-0 group-hover:opacity-100 absolute left-[-100%] top-[50%] bg-white p-6 rounded-lg shadow-lg transition duration-150 ease-in-out flex flex-col gap-4">
            <p>A to Z Construction, LLC</p>
            <StatusBadge status="warning" />
            <Reviews rating={3.5} />
          </div>
        </div>
      </div>
    </main>
  );
}
