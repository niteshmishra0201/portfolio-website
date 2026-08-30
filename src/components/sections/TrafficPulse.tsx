"use client";

import { useTrafficStream } from "@/hooks/useTrafficStream";
import Badge from "@/components/ui/Badge";

export default function TrafficPulse() {
  const { events, connected } = useTrafficStream();

  return (
    <div className="border border-border rounded-xl bg-surface h-64 p-5 flex flex-col">
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-text-secondary">
          traffic-stream / flowgate-sim
        </span>
        <Badge status={connected ? "live" : "neutral"}>
          {connected ? "live" : "connecting..."}
        </Badge>
      </div>

      <div className="flex-1 flex flex-col justify-end gap-1.5 mt-4 overflow-hidden">
        {events.map((event) => (
          <div
            key={event.id}
            className="flex items-center justify-between font-mono text-xs px-2 py-1.5 rounded bg-background"
          >
            <span className="text-text-secondary">req #{event.id}</span>
            <span
              className={event.allowed ? "text-pulse" : "text-lightning"}
            >
              {event.allowed ? "● allowed" : "● throttled"}
            </span>
            <span className="text-text-secondary">{event.latencyMs}ms</span>
          </div>
        ))}

        {events.length === 0 && (
          <p className="text-text-secondary text-xs text-center">
            Waiting for traffic...
          </p>
        )}
      </div>
    </div>
  );
}