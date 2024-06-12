"use client";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface StepProps {
  title: string;
  subtext?: string;
  complete?: boolean;
  pdf?: boolean;
}

const Step = ({ title, subtext, complete, pdf }: StepProps) => {
  const [selectedFile, setSelectedFile] = useState<any>();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  const notifySuccess = () => {
    toast.success("PDF Uploaded!", {
      position: "top-right",
    });
  };
  const notifyError = () => {
    toast.error("Error Uploading PDF!", {
      position: "top-right",
    });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
      notifySuccess();
    } else {
      setSelectedFile(null);
      notifyError();
    }
  };

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  const resetFile = () => {
    setSelectedFile(null);
  };
  return (
    <div>
      <ToastContainer />
      <div className="flex gap-2 items-center ">
        {complete || selectedFile ? (
          <HiOutlineCheckCircle className="text-teal-500 text-[20px]" />
        ) : (
          <MdOutlineRadioButtonUnchecked className="text-gray-300 text-[20px]" />
        )}
        <p className="text-gray-500 text-[16px]">{title}</p>
      </div>
      {subtext && <p className="text-gray-300">{subtext}</p>}
      {pdf && (
        <div className="flex gap-1 items-center">
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
          <label
            onClick={openFilePicker}
            className={`cursor-pointer ${
              selectedFile ? "text-purple-700" : "text-gray-500"
            }`}
          >
            {selectedFile ? selectedFile.name : "Click to Upload File"}
          </label>
          {selectedFile && (
            <div>
              <IoMdClose onClick={resetFile} className="cursor-pointer" />
            </div>
          )}
        </div>
      )}
      {selectedFile && (
        <button
          onClick={() => router.push("/success")}
          className="mt-6 px-3 py-1 bg-purple-500 text-white rounded text-lg font-semibold"
        >
          Continue
        </button>
      )}
    </div>
  );
};

export default Step;
