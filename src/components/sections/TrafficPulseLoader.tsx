"use client";

import dynamic from "next/dynamic";

const TrafficPulse = dynamic(() => import("@/components/sections/TrafficPulse"), {
  ssr: false,
  loading: () => (
    <div className="border border-border rounded-xl bg-surface h-64 flex items-center justify-center text-text-secondary text-sm">
      Loading live feed...
    </div>
  ),
});

export default TrafficPulse;