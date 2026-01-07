"use client";

import * as React from "react";
import Image from "next/image";
import { TransformComponent, TransformWrapper, type ReactZoomPanPinchRef } from "react-zoom-pan-pinch";
import { ChevronLeft, ChevronRight, Minus, Plus, RotateCcw } from "lucide-react";

import { cn } from "@/lib/utils";
import type { GuidedTour, GuidedTourStep } from "@/app/data/guidedTours";

type GuidedTourViewerProps = {
  tour: GuidedTour;
  railHidden?: boolean;
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function rectPx(tour: GuidedTour, step: GuidedTourStep) {
  const r = step.focusRect;
  const x = r.x * tour.imageWidth;
  const y = r.y * tour.imageHeight;
  const w = r.w * tour.imageWidth;
  const h = r.h * tour.imageHeight;
  return { x, y, w, h, cx: x + w / 2, cy: y + h / 2 };
}

export function GuidedTourViewer({ tour, railHidden = false }: GuidedTourViewerProps) {
  const steps = tour.steps ?? [];
  const [activeIdx, setActiveIdx] = React.useState(0);
  const [mobileStepsOpen, setMobileStepsOpen] = React.useState(false);
  const [imgError, setImgError] = React.useState(false);
  const [imageKey, setImageKey] = React.useState(0);
  const [transform, setTransform] = React.useState({ scale: 1, positionX: 0, positionY: 0 });

  const viewportRef = React.useRef<HTMLDivElement | null>(null);
  const apiRef = React.useRef<ReactZoomPanPinchRef | null>(null);

  const activeStep = steps[activeIdx];
  const spotlightMaskId = React.useMemo(() => {
    // `useId()` can include characters like ':'; normalize for SVG id safety.
    const raw = (typeof crypto !== "undefined" && "randomUUID" in crypto)
      ? (crypto as Crypto).randomUUID()
      : `mask-${Math.random().toString(36).slice(2)}`;
    return `tour-spotlight-${raw}`.replace(/[^a-zA-Z0-9_-]/g, "-");
  }, []);

  const setStepSafe = React.useCallback(
    (idx: number) => {
      if (!steps.length) return;
      const clamped = clamp(idx, 0, steps.length - 1);
      setActiveIdx(clamped);
    },
    [steps.length]
  );

  const focusStep = React.useCallback(
    (idx: number, opts?: { animate?: boolean }) => {
      if (!steps.length) return;
      const step = steps[idx];
      if (!step) return;

      const viewport = viewportRef.current;
      const api = apiRef.current;
      if (!viewport || !api) return;

      const vw = viewport.clientWidth;
      const vh = viewport.clientHeight;
      if (vw <= 0 || vh <= 0) return;

      const padding = Math.min(vw, vh) * 0.10; // 10% padding
      const rect = rectPx(tour, step);
      const targetScale = clamp(
        Math.min((vw - padding * 2) / rect.w, (vh - padding * 2) / rect.h),
        0.25,
        6
      );

      const x = vw / 2 - rect.cx * targetScale;
      const y = vh / 2 - rect.cy * targetScale;

      const animate = opts?.animate !== false;
      api.setTransform(x, y, targetScale, animate ? 350 : 0, "easeOut");
    },
    [steps, tour]
  );

  // Initial focus
  React.useEffect(() => {
    if (!steps.length) return;
    // next frame to ensure layout is measured
    const t = window.requestAnimationFrame(() => focusStep(0, { animate: false }));
    return () => window.cancelAnimationFrame(t);
  }, [focusStep, steps.length]);

  // Focus on step change
  React.useEffect(() => {
    if (!steps.length) return;
    focusStep(activeIdx, { animate: true });
    // On mobile, close list after selecting a step
    setMobileStepsOpen(false);
  }, [activeIdx, focusStep, steps.length]);

  // Keyboard: left/right to navigate steps
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      // Only handle when the viewer is mounted
      if (!viewportRef.current) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setStepSafe(activeIdx - 1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        setStepSafe(activeIdx + 1);
      }
    };
    window.addEventListener("keydown", handler, { passive: false });
    return () => window.removeEventListener("keydown", handler as any);
  }, [activeIdx, setStepSafe]);

  const canPrev = activeIdx > 0;
  const canNext = activeIdx < steps.length - 1;

  const onRetryImage = () => {
    setImgError(false);
    setImageKey((k) => k + 1);
  };

  if (!steps.length) {
    return (
      <div className="h-full w-full flex items-center justify-center p-6">
        <div className="max-w-md rounded-2xl border border-black/10 bg-white p-6 text-sm text-neutral-800">
          Missing step data. Please contact support.
        </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full grid grid-cols-1 md:grid-cols-[1fr_360px]">
      {/* Viewer */}
      <div className="relative min-h-0 border-r border-black/10">
        {/* Controls */}
        <div className="absolute left-3 top-3 z-20 flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setStepSafe(activeIdx - 1)}
            disabled={!canPrev}
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-2 text-xs text-neutral-800 hover:bg-neutral-50 disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Prev</span>
          </button>
          <button
            type="button"
            onClick={() => setStepSafe(activeIdx + 1)}
            disabled={!canNext}
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-2 text-xs text-neutral-800 hover:bg-neutral-50 disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight className="h-4 w-4" />
          </button>

          <div className="mx-1 h-6 w-px bg-black/10" />

          <button
            type="button"
            onClick={() => apiRef.current?.zoomOut(0.3)}
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-2 text-xs text-neutral-800 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
            aria-label="Zoom out"
          >
            <Minus className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => apiRef.current?.zoomIn(0.3)}
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-2 text-xs text-neutral-800 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
            aria-label="Zoom in"
          >
            <Plus className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => {
              apiRef.current?.resetTransform(250);
              focusStep(activeIdx, { animate: true });
            }}
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-2 text-xs text-neutral-800 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
          >
            <RotateCcw className="h-4 w-4" />
            <span className="hidden sm:inline">Reset</span>
          </button>

          {/* Mobile steps toggle */}
          <button
            type="button"
            onClick={() => setMobileStepsOpen((v) => !v)}
            className="md:hidden inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-2 text-xs text-neutral-800 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
            aria-pressed={mobileStepsOpen}
          >
            Steps
          </button>
        </div>

        {/* Live region for SR */}
        <div className="sr-only" aria-live="polite">
          Step {activeIdx + 1} of {steps.length}: {activeStep?.title}
        </div>

        <div ref={viewportRef} className="absolute inset-0 overflow-hidden bg-neutral-950">
          {imgError ? (
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <div className="max-w-md rounded-2xl border border-white/10 bg-black/40 p-6 text-sm text-white">
                <p className="font-semibold mb-2">Unable to load map</p>
                <button
                  type="button"
                  onClick={onRetryImage}
                  className="mt-2 inline-flex items-center rounded-full bg-white px-4 py-2 text-xs font-medium text-neutral-900 hover:bg-neutral-100"
                >
                  Retry
                </button>
              </div>
            </div>
          ) : (
            <TransformWrapper
              minScale={0.25}
              maxScale={6}
              limitToBounds
              centerOnInit
              wheel={{ step: 0.06 }}
              pinch={{ step: 5 }}
              panning={{ velocityDisabled: true }}
              onInit={(ref) => {
                apiRef.current = ref;
                setTransform({
                  scale: ref.state.scale,
                  positionX: ref.state.positionX,
                  positionY: ref.state.positionY,
                });
                // Ensure the first step centers even if effects ran before init.
                window.requestAnimationFrame(() => focusStep(activeIdx, { animate: false }));
              }}
              onTransformed={(_, next) => setTransform(next)}
            >
              <TransformComponent wrapperClass="!w-full !h-full" contentClass="!w-fit !h-fit">
                <div style={{ width: tour.imageWidth, height: tour.imageHeight }}>
                  <Image
                    key={imageKey}
                    src={tour.imageSrc}
                    alt={tour.title}
                    width={tour.imageWidth}
                    height={tour.imageHeight}
                    className="select-none"
                    priority
                    onError={() => setImgError(true)}
                  />
                </div>
              </TransformComponent>
            </TransformWrapper>
          )}
        </div>

        {/* Spotlight overlay (outside TransformWrapper children, driven by transform state) */}
        {!imgError ? (
          (() => {
            const r = rectPx(tour, steps[activeIdx]);
            const holeX = transform.positionX + r.x * transform.scale;
            const holeY = transform.positionY + r.y * transform.scale;
            const holeW = r.w * transform.scale;
            const holeH = r.h * transform.scale;

            return (
              <svg
                className="pointer-events-none absolute inset-0 z-10"
                width="100%"
                height="100%"
                preserveAspectRatio="none"
              >
                <defs>
                  <mask id={spotlightMaskId}>
                    <rect x="0" y="0" width="100%" height="100%" fill="white" />
                    <rect
                      x={holeX}
                      y={holeY}
                      width={holeW}
                      height={holeH}
                      rx={14}
                      ry={14}
                      fill="black"
                    />
                  </mask>
                </defs>
                <rect
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  fill="rgba(0,0,0,0.55)"
                  mask={`url(#${spotlightMaskId})`}
                />
              </svg>
            );
          })()
        ) : null}

        {/* Mobile steps panel */}
        {!railHidden ? (
          <div
            className={cn(
              "md:hidden absolute left-0 right-0 bottom-0 z-30 border-t border-black/10 bg-[var(--background)]",
              mobileStepsOpen ? "translate-y-0" : "translate-y-[calc(100%-52px)]",
              "transition-transform duration-200"
            )}
          >
            <button
              type="button"
              onClick={() => setMobileStepsOpen((v) => !v)}
              className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium"
              aria-expanded={mobileStepsOpen}
            >
              <span>
                Step {activeIdx + 1} / {steps.length}
              </span>
              <span className="text-neutral-500">{mobileStepsOpen ? "Close" : "Open"}</span>
            </button>
            <div className="max-h-[45vh] overflow-auto px-2 pb-3">
              {steps.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setStepSafe(idx)}
                  className={cn(
                    "w-full text-left rounded-xl px-3 py-3 text-sm border",
                    idx === activeIdx
                      ? "border-black/20 bg-neutral-50"
                      : "border-black/10 bg-white hover:bg-neutral-50"
                  )}
                >
                  <div className="font-medium text-neutral-900">{s.title}</div>
                  {s.body ? <div className="text-xs text-neutral-600 mt-1">{s.body}</div> : null}
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </div>

      {/* Desktop rail */}
      <aside className={cn("hidden md:flex min-h-0 flex-col", railHidden && "md:hidden")}>
        <div className="min-h-0 flex-1 overflow-auto p-4">
          <div className="text-xs text-neutral-500 mb-3">
            Step {activeIdx + 1} of {steps.length}
          </div>

          <div className="space-y-2">
            {steps.map((s, idx) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setStepSafe(idx)}
                className={cn(
                  "w-full text-left rounded-2xl px-4 py-3 border transition-colors",
                  idx === activeIdx
                    ? "border-black/20 bg-neutral-50"
                    : "border-black/10 bg-white hover:bg-neutral-50"
                )}
                aria-current={idx === activeIdx ? "step" : undefined}
              >
                <div className="text-sm font-semibold text-neutral-900">{s.title}</div>
                {s.body ? <div className="text-xs text-neutral-600 mt-1 leading-relaxed">{s.body}</div> : null}
              </button>
            ))}
          </div>
        </div>

        <div className="border-t border-black/10 p-4">
          <div className="text-xs text-neutral-500">
            Tip: use <span className="font-medium text-neutral-700">←</span> /{" "}
            <span className="font-medium text-neutral-700">→</span> to navigate steps.
          </div>
        </div>
      </aside>
    </div>
  );
}


