"use client";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="w-12 h-12 border-4 border-green-500 border-dashed rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
