"use client";

import { CldUploadWidget } from "next-cloudinary";

// Add 'name' to the interface
interface ImageUploaderProps {
  onUploadSuccess: (url: string) => void;
  buttonText?: string;
  name?: string;  // 'name' prop added here
}

export function ImageUploader({
  onUploadSuccess,
  buttonText = "Зурагаа оруулна уу",
  name, // Accept 'name' prop here
}: ImageUploaderProps) {
  return (
    <CldUploadWidget
      uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
      signatureEndpoint="/api/sign-cloudinary-params"
      onSuccess={(result) => {
        if (typeof result.info === "object" && "secure_url" in result.info) {
          onUploadSuccess(result.info.secure_url);
        }
      }}
      options={{
        singleUploadAutoClose: true,
      }}
    >
      {({ open }) => (
        <button
          type="button"
          onClick={() => open()}
          className="rounded-md bg-gray-100 px-2.5 py-1.5 text-sm font-semibold text-base-white shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
        >
          {buttonText}
        </button>
      )}
    </CldUploadWidget>
  );
}
