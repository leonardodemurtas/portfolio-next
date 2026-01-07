"use client";

import * as React from "react";

import type { GuidedTourId } from "@/app/data/guidedTours";
import { getGuidedTour } from "@/app/data/guidedTours";
import { GuidedTourModal } from "./GuidedTourModal";

export type GuidedTourTriggerProps = {
  tourId: GuidedTourId;
  /** Provide your own trigger UI. If omitted, the children are used as the trigger content inside a <button>. */
  children: React.ReactNode;
  className?: string;
};

export function GuidedTourTrigger({ tourId, children, className }: GuidedTourTriggerProps) {
  const [open, setOpen] = React.useState(false);
  const tour = getGuidedTour(tourId);

  if (!tour) return null;

  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)}>
        {children}
      </button>
      <GuidedTourModal tour={tour} open={open} onOpenChange={setOpen} />
    </>
  );
}


