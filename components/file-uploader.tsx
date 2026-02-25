"use client";

import {
  UploadCloud,
  FileText,
  X,
  Loader2,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

interface FileUploaderProps {
  file: File | null;
  setFile: (file: File | null) => void;
  loading: boolean;
  progress: number;
  loadingStep: string;
}

export default function FileUploader({
  file,
  setFile,
  loading,
  progress,
  loadingStep,
}: FileUploaderProps) {
  // Prevent default behavior for drag and drop (optional enhancement later)
  const handleDragOver = (e: React.DragEvent) => e.preventDefault();
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  // State 1: Loading / Processing
  if (loading) {
    return (
      <div className="flex w-full flex-col items-center justify-center rounded-2xl border-2 border-blue-200 bg-blue-50/50 py-8 px-6 text-center shadow-inner h-full min-h-55">
        {/* Dynamic Icon based on the step */}
        <div className="mb-4 rounded-full bg-blue-100 p-4 text-blue-600 shadow-sm relative">
          {progress < 90 ? (
            <UploadCloud className="w-8 h-8 animate-bounce" />
          ) : (
            <Sparkles className="w-8 h-8 animate-pulse text-indigo-500" />
          )}
          {/* Subtle spinning ring around the icon */}
          <div className="absolute inset-0 rounded-full border-4 border-blue-200 border-t-blue-500 animate-spin"></div>
        </div>

        {/* Dynamic Text to keep user connected */}
        <p className="text-sm font-bold text-slate-900 mb-4">{loadingStep}</p>

        {/* The Progress Bar */}
        <div className="w-full max-w-[80%] bg-blue-100 rounded-full h-2.5 mb-2 overflow-hidden">
          <div
            className="bg-linear-to-r from-blue-500 to-indigo-500 h-2.5 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <p className="text-xs font-semibold text-blue-600">{progress}%</p>
      </div>
    );
  }

  // State 2: File Selected successfully
  if (file) {
    return (
      <div className="relative flex w-full flex-col items-center justify-center rounded-2xl border-2 border-green-200 bg-green-50 py-10 px-4 text-center shadow-sm transition-all h-full min-h-50">
        <button
          onClick={() => setFile(null)}
          className="absolute right-4 top-4 rounded-full bg-white p-1.5 text-slate-400 shadow-sm transition-colors hover:bg-red-50 hover:text-red-500"
          type="button"
          title="Remove file"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="mb-4 relative">
          <div className="rounded-full bg-green-100 p-4 text-green-600 shadow-inner">
            <FileText className="w-8 h-8" />
          </div>
          <CheckCircle2 className="absolute -bottom-1 -right-1 w-5 h-5 text-green-600 bg-white rounded-full" />
        </div>

        <p className="text-sm font-bold text-slate-900 truncate max-w-50">
          {file.name}
        </p>
        <p className="text-xs font-medium text-slate-500 mt-1">
          {formatFileSize(file.size)}
        </p>
      </div>
    );
  }

  // State 3: Default Dropzone
  return (
    <label
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className="group relative flex w-full cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 py-10 px-4 text-center transition-all hover:border-blue-500 hover:bg-blue-50/50 h-full min-h-50"
    >
      <div className="mb-4 rounded-full bg-blue-100 p-4 text-blue-600 transition-transform group-hover:scale-110 group-hover:bg-blue-200 shadow-sm">
        <UploadCloud className="w-8 h-8" />
      </div>
      <p className="mb-1 text-sm font-bold text-slate-700">
        Click to upload or drag and drop
      </p>
      <p className="text-xs font-medium text-slate-500">
        PDF documents only (Max 5MB)
      </p>

      <input
        type="file"
        name="resume"
        accept="application/pdf"
        required
        className="hidden"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />
    </label>
  );
}
