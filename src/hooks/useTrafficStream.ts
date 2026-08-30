"use client";

import { useEffect, useState, useRef } from "react";

export type TrafficEvent = {
  id: number;
  allowed: boolean;
  latencyMs: number;
};

type ConnectionStatus = "connecting" | "live" | "offline";

export function useTrafficStream() {
  const [events, setEvents] = useState<TrafficEvent[]>([]);
  const [status, setStatus] = useState<ConnectionStatus>("connecting");
  const attemptsRef = useRef(0);

  useEffect(() => {
    const eventSource = new EventSource("http://localhost:8080/api/traffic-stream");

    eventSource.onopen = () => {
      attemptsRef.current = 0;
      setStatus("live");
    };

    eventSource.onmessage = (e) => {
      const data: TrafficEvent = JSON.parse(e.data);
      setEvents((prev) => [...prev.slice(-9), data]);
    };

    eventSource.onerror = () => {
      attemptsRef.current += 1;
      if (attemptsRef.current >= 2) {
        setStatus("offline");
        eventSource.close();
      }
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return { events, status };
}