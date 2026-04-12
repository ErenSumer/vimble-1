"use client";

import { useEffect } from "react";

export default function DownloadRedirect() {
  useEffect(() => {
    const isApple = /iPhone|iPad|iPod|Mac/i.test(navigator.userAgent);
    
    if (isApple) {
      window.location.href = "https://apps.apple.com/app/id6755610772";
    } else {
      window.location.href = "https://play.google.com/store/apps/details?id=com.pera.vimble";
    }
  }, []);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-[#fafafc]">
      <div className="flex flex-col items-center gap-4">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#6366F1] border-r-transparent"></div>
        <p className="font-sans text-sm font-medium text-gray-600">Redirecting to the download page...</p>
      </div>
    </div>
  );
}
