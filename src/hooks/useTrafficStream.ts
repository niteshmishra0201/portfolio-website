"use client";

import { useEffect, useState } from "react";

export type TrafficEvent = {
  id: number;
  allowed: boolean;
  latencyMs: number;
};

export function useTrafficStream() {
  const [events, setEvents] = useState<TrafficEvent[]>([]);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const eventSource = new EventSource("http://localhost:8080/api/traffic-stream");

    eventSource.onopen = () => setConnected(true);

    eventSource.onmessage = (e) => {
      const data: TrafficEvent = JSON.parse(e.data);
      setEvents((prev) => [...prev.slice(-9), data]); // keep last 10 events
    };

    eventSource.onerror = () => {
      setConnected(false);
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return { events, connected };
}