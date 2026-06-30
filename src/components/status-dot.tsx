type StatusKind = "open" | "progress" | "waiting" | "closed";

const colorMap: Record<StatusKind, string> = {
  open: "bg-status-open",
  progress: "bg-status-progress",
  waiting: "bg-status-waiting",
  closed: "bg-status-closed",
};

export function StatusDot({
  kind,
  pulse = false,
}: {
  kind: StatusKind;
  pulse?: boolean;
}) {
  return (
    <span
      className={`status-dot ${colorMap[kind]} ${pulse ? "animate-pulse-dot" : ""}`}
      aria-hidden="true"
    />
  );
}
