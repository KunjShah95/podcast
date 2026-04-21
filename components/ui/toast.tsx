"use client";

import { useState } from "react";
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

export type ToastType = "success" | "error" | "info" | "warning";

interface Toast {
  id: string;
  type: ToastType;
  message: string;
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (type: ToastType, message: string) => {
    const id = Math.random().toString(36).substring(7);
    setToasts((prev) => [...prev, { id, type, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return { toasts, addToast, removeToast };
}

export default function ToastContainer({
  toasts,
  onRemove,
}: {
  toasts: Toast[];
  onRemove: (id: string) => void;
}) {
  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onRemove={onRemove} />
      ))}
    </div>
  );
}

function ToastItem({
  toast,
  onRemove,
}: {
  toast: Toast;
  onRemove: (id: string) => void;
}) {
  const icons = {
    success: <CheckCircle className="h-5 w-5 text-success" />,
    error: <AlertCircle className="h-5 w-5 text-error" />,
    info: <Info className="h-5 w-5 text-info" />,
    warning: <AlertTriangle className="h-5 w-5 text-warning" />,
  };

  const borderColors = {
    success: "border-success/30",
    error: "border-error/30",
    info: "border-info/30",
    warning: "border-warning/30",
  };

  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-xl bg-card border p-4 shadow-xl animate-slide-up min-w-[320px] max-w-md",
        borderColors[toast.type]
      )}
    >
      {icons[toast.type]}
      <p className="flex-1 text-sm text-foreground">{toast.message}</p>
      <button
        onClick={() => onRemove(toast.id)}
        className="flex h-6 w-6 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}

// Example usage helper
export function ToastExample() {
  const { toasts, addToast, removeToast } = useToast();

  return (
    <>
      <ToastContainer toasts={toasts} onRemove={removeToast} />
      <div className="flex gap-2">
        <button
          onClick={() => addToast("success", "Episode added to library!")}
          className="rounded-xl bg-success/20 px-4 py-2 text-sm text-success"
        >
          Success
        </button>
        <button
          onClick={() => addToast("error", "Something went wrong")}
          className="rounded-xl bg-error/20 px-4 py-2 text-sm text-error"
        >
          Error
        </button>
        <button
          onClick={() => addToast("info", "New episode available")}
          className="rounded-xl bg-info/20 px-4 py-2 text-sm text-info"
        >
          Info
        </button>
        <button
          onClick={() => addToast("warning", "Download paused")}
          className="rounded-xl bg-warning/20 px-4 py-2 text-sm text-warning"
        >
          Warning
        </button>
      </div>
    </>
  );
}