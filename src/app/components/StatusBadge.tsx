import React from "react";

type StatusType = "warning" | "success";

const STATUS_MAP: Record<StatusType, string> = {
  warning: "bg-red-600",
  success: "bg-emerald-600",
};

interface StatusBadgeProps {
  status: StatusType;
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const statusColor = STATUS_MAP[status] || "gray-500";

  return (
    <div className="flex gap-2 items-center">
      <p className="text-gray-500 w-[100px]">Status</p>
      <div className="flex gap-2 items-center border-2 px-2 rounded-lg">
        <div className={`h-1 w-1 rounded-full ${statusColor}`} />
        <p className="text-gray-700">{status}</p>
      </div>
    </div>
  );
};

export default StatusBadge;
