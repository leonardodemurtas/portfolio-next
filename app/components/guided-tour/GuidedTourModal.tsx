"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, PanelRightClose, PanelRightOpen } from "lucide-react";

import { cn } from "@/lib/utils";
import type { GuidedTour } from "@/app/data/guidedTours";
import { GuidedTourViewer } from "./GuidedTourViewer";

export type GuidedTourModalProps = {
  tour: GuidedTour;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function GuidedTourModal({ tour, open, onOpenChange }: GuidedTourModalProps) {
  const [railHidden, setRailHidden] = React.useState(false);

  React.useEffect(() => {
    if (!open) setRailHidden(false);
  }, [open]);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-[2px]" />
        <Dialog.Content
          className={cn(
            "fixed inset-0 z-[101] flex flex-col bg-[var(--background)] text-[var(--foreground)]",
            "outline-none"
          )}
        >
          <div className="flex items-center justify-between gap-3 border-b border-black/10 px-4 py-3 md:px-6">
            <div className="min-w-0">
              <Dialog.Title className="text-sm font-semibold text-neutral-900 truncate">
                {tour.title}
              </Dialog.Title>
              {tour.description ? (
                <Dialog.Description className="text-xs text-neutral-500 truncate">
                  {tour.description}
                </Dialog.Description>
              ) : null}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setRailHidden((v) => !v)}
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-2 text-xs text-neutral-800 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
                aria-pressed={railHidden}
                aria-label={railHidden ? "Show steps" : "Hide steps"}
              >
                {railHidden ? <PanelRightOpen className="h-4 w-4" /> : <PanelRightClose className="h-4 w-4" />}
                <span className="hidden sm:inline">{railHidden ? "Show steps" : "Hide steps"}</span>
              </button>

              <Dialog.Close asChild>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-2 text-xs text-neutral-800 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                  <span className="hidden sm:inline">Close</span>
                </button>
              </Dialog.Close>
            </div>
          </div>

          <div className="flex-1 min-h-0">
            <GuidedTourViewer tour={tour} railHidden={railHidden} />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}


