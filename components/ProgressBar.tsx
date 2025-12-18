"use client";

interface ProgressBarProps {
  progress: number;
  projectName: string;
}

export default function ProgressBar({
  progress,
  projectName,
}: ProgressBarProps) {
  const clampedProgress = Math.min(100, Math.max(0, progress));

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-zao-muted">Progress</span>
        <span className="text-sm font-medium text-zao-accent">
          {clampedProgress}%
        </span>
      </div>
      <div
        className="h-2 bg-zao-border rounded-full overflow-hidden"
        role="progressbar"
        aria-valuenow={clampedProgress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${projectName} progress: ${clampedProgress}%`}
      >
        <div
          className="h-full bg-zao-accent rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${clampedProgress}%`,
            "--progress-width": `${clampedProgress}%`,
          } as React.CSSProperties}
        />
      </div>
    </div>
  );
}
