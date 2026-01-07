export type NormalizedRect = {
  /** 0..1 from left */
  x: number;
  /** 0..1 from top */
  y: number;
  /** 0..1 width */
  w: number;
  /** 0..1 height */
  h: number;
};

export type GuidedTourStep = {
  id: string;
  title: string;
  body?: string;
  focusRect: NormalizedRect;
};

export type GuidedTour = {
  id: string;
  title: string;
  description?: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  steps: GuidedTourStep[];
};

function isFinite01(n: unknown) {
  return typeof n === "number" && Number.isFinite(n) && n >= 0 && n <= 1;
}

export function sanitizeTour(tour: GuidedTour): GuidedTour {
  const steps = (tour.steps ?? []).filter((s) => {
    const r = s?.focusRect;
    return (
      typeof s?.id === "string" &&
      typeof s?.title === "string" &&
      r &&
      isFinite01(r.x) &&
      isFinite01(r.y) &&
      isFinite01(r.w) &&
      isFinite01(r.h) &&
      r.w > 0 &&
      r.h > 0
    );
  });

  return { ...tour, steps };
}

export const guidedTours = {
  cpm_journeyMap: sanitizeTour({
    id: "cpm_journeyMap",
    title: "Customer journey (guided)",
    description: "A step-by-step walkthrough of key decisions in the journey map.",
    imageSrc: "/cpm/customerJourney.png",
    imageWidth: 2818,
    imageHeight: 1267,
    steps: [
      {
        id: "overview",
        title: "Overview",
        body: "Start with the full journey, then zoom into key decision points.",
        focusRect: { x: 0.02, y: 0.08, w: 0.96, h: 0.82 },
      },
      {
        id: "strategyChoice",
        title: "Choose the strategy",
        body: "Where the operator selects and justifies the proposed strategy.",
        focusRect: { x: 0.12, y: 0.14, w: 0.28, h: 0.26 },
      },
      {
        id: "evidenceDocs",
        title: "Attach evidence",
        body: "Documents must be available and referenced where they are cited.",
        focusRect: { x: 0.44, y: 0.20, w: 0.22, h: 0.22 },
      },
      {
        id: "previewAlways",
        title: "Always preview",
        body: "The flow calls out the need for a preview before finalizing.",
        focusRect: { x: 0.62, y: 0.18, w: 0.18, h: 0.22 },
      },
      {
        id: "produceAndSend",
        title: "Produce & send",
        body: "Final steps: generate the resolution document and send the case.",
        focusRect: { x: 0.82, y: 0.08, w: 0.16, h: 0.32 },
      },
    ],
  }),

  cpm_userFlow: sanitizeTour({
    id: "cpm_userFlow",
    title: "User flow (guided)",
    description: "A guided walkthrough of the user flow with focus on key branches.",
    imageSrc: "/cpm/userflow.jpg",
    imageWidth: 3168,
    imageHeight: 1262,
    steps: [
      {
        id: "overview",
        title: "Overview",
        body: "Start with the full flow, then step through the critical branches.",
        focusRect: { x: 0.02, y: 0.10, w: 0.96, h: 0.80 },
      },
      {
        id: "entry",
        title: "Entry point",
        body: "Where the user begins and frames the context for the workflow.",
        focusRect: { x: 0.05, y: 0.18, w: 0.22, h: 0.30 },
      },
      {
        id: "decision",
        title: "Decision branch",
        body: "The key decision node that changes the rest of the flow.",
        focusRect: { x: 0.34, y: 0.18, w: 0.28, h: 0.34 },
      },
      {
        id: "handoff",
        title: "Handoff",
        body: "Where responsibility or system state changes hands.",
        focusRect: { x: 0.64, y: 0.18, w: 0.22, h: 0.32 },
      },
      {
        id: "completion",
        title: "Completion",
        body: "The end state and outputs from the workflow.",
        focusRect: { x: 0.84, y: 0.18, w: 0.14, h: 0.30 },
      },
    ],
  }),
} as const satisfies Record<string, GuidedTour>;

export type GuidedTourId = keyof typeof guidedTours;

export function getGuidedTour(id: GuidedTourId | string) {
  const tour = (guidedTours as Record<string, GuidedTour | undefined>)[id];
  return tour ? sanitizeTour(tour) : null;
}


