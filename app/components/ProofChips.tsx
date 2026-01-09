import React from "react";

export function ProofChips() {
  return (
    <section className="relative z-20 w-full flex justify-center pb-4 pt-10 px-6 md:px-12 -mt-24 md:-mt-32">
      <div 
        className="w-full max-w-[1366px] flex flex-col md:flex-row justify-between items-start p-4 rounded-2xl border border-[#E2E8F0] backdrop-blur-[10px]"
        style={{
            background: "rgba(255, 255, 255, 0.42)",
        }}
      >
          {/* Chip 1 */}
          <div className="flex-1 w-full flex flex-col items-center justify-center text-center p-4 transition-transform duration-200 ease-out hover:-translate-y-0.5 rounded-lg cursor-default motion-reduce:transform-none motion-reduce:transition-none">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-[30px] font-black text-[#020618] leading-[36px] tracking-normal">10+</span>
              <span className="text-[21px] font-light text-[#1F201F] leading-[31px]">years</span>
            </div>
            <span className="text-[16px] text-[#62748E] font-normal leading-[24px] tracking-normal">
              in B2B product design
            </span>
          </div>

          <div className="hidden md:block w-px h-16 bg-neutral-200/60 self-center mx-2" />

          {/* Chip 2 */}
          <div className="flex-1 w-full flex flex-col items-center justify-center text-center p-4 transition-transform duration-200 ease-out hover:-translate-y-0.5 rounded-lg cursor-default motion-reduce:transform-none motion-reduce:transition-none">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-[30px] font-black text-[#020618] leading-[36px] tracking-normal">9+</span>
              <span className="text-[21px] font-light text-[#1F201F] leading-[31px]">products</span>
            </div>
            <span className="text-[16px] text-[#62748E] font-normal leading-[24px] tracking-normal">
              using my design system
            </span>
          </div>

          <div className="hidden md:block w-px h-16 bg-neutral-200/60 self-center mx-2" />

          {/* Chip 3 */}
          <div className="flex-1 w-full flex flex-col items-center justify-center text-center p-4 transition-transform duration-200 ease-out hover:-translate-y-0.5 rounded-lg cursor-default motion-reduce:transform-none motion-reduce:transition-none">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-[30px] font-black text-[#020618] leading-[36px] tracking-normal">360°</span>
              <span className="text-[21px] font-light text-[#1F201F] leading-[31px]">Full-cycle design lead</span>
            </div>
            <span className="text-[16px] text-[#62748E] font-normal leading-[24px] tracking-normal">
              Discovery to delivery
            </span>
          </div>

          <div className="hidden md:block w-px h-16 bg-neutral-200/60 self-center mx-2" />

          {/* Chip 4 */}
          <div className="flex-1 w-full flex flex-col items-center justify-center text-center p-4 transition-transform duration-200 ease-out hover:-translate-y-0.5 rounded-lg cursor-default motion-reduce:transform-none motion-reduce:transition-none">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-[30px] font-black text-[#020618] leading-[36px] tracking-normal">7</span>
              <span className="text-[21px] font-light text-[#1F201F] leading-[31px]">AI use cases led</span>
            </div>
            <span className="text-[16px] text-[#62748E] font-normal leading-[24px] tracking-normal">
              in the last 12 months
            </span>
          </div>

      </div>
    </section>
  );
}
