//src/shared/components/AmbientPaperDetails.tsx
import { DecorativeImage } from "@/shared/components/DecorativeImage";

const ambientPetals = [
  ["left-[calc(50%-30rem)]", "top-[12%]", "w-8", "-1.5s"],
  ["right-[calc(50%-30rem)]", "top-[18%]", "w-9", "-4s"],
  ["left-[calc(50%-32rem)]", "top-[30%]", "w-7", "-2.5s"],
  ["right-[calc(50%-32rem)]", "top-[38%]", "w-8", "-5.5s"],
  ["left-[calc(50%-30rem)]", "top-[50%]", "w-9", "-3.5s"],
  ["right-[calc(50%-30rem)]", "top-[58%]", "w-7", "-6s"],
  ["left-[calc(50%-32rem)]", "top-[72%]", "w-8", "-5s"],
  ["right-[calc(50%-32rem)]", "top-[78%]", "w-9", "-2s"],
  ["left-[calc(50%-28rem)]", "top-[22%]", "w-7", "-6.5s"],
  ["right-[calc(50%-28rem)]", "top-[28%]", "w-8", "-3s"],
  ["left-[calc(50%-30rem)]", "top-[42%]", "w-9", "-4.5s"],
  ["right-[calc(50%-30rem)]", "top-[48%]", "w-7", "-1s"],
  ["left-[calc(50%-28rem)]", "top-[60%]", "w-8", "-3.5s"],
  ["right-[calc(50%-28rem)]", "top-[66%]", "w-9", "-5s"],
  ["left-[calc(50%-30rem)]", "top-[82%]", "w-7", "-2.5s"],
  ["right-[calc(50%-30rem)]", "top-[88%]", "w-8", "-6s"],
];

const ambientDots = [
  ["left-[calc(50%-26rem)]", "top-[8%]", "-1s"],
  ["right-[calc(50%-26rem)]", "top-[14%]", "-3s"],
  ["left-[calc(50%-28rem)]", "top-[20%]", "-5s"],
  ["right-[calc(50%-28rem)]", "top-[26%]", "-2s"],
  ["left-[calc(50%-25rem)]", "top-[34%]", "-4s"],
  ["right-[calc(50%-25rem)]", "top-[40%]", "-6s"],
  ["left-[calc(50%-29rem)]", "top-[46%]", "-1.5s"],
  ["right-[calc(50%-29rem)]", "top-[52%]", "-3.5s"],
  ["left-[calc(50%-26rem)]", "top-[58%]", "-5.5s"],
  ["right-[calc(50%-26rem)]", "top-[64%]", "-2.5s"],
  ["left-[calc(50%-28rem)]", "top-[70%]", "-4.5s"],
  ["right-[calc(50%-28rem)]", "top-[76%]", "-6.5s"],
  ["left-[calc(50%-25rem)]", "top-[82%]", "-1.25s"],
  ["right-[calc(50%-25rem)]", "top-[88%]", "-3.25s"],
  ["left-[calc(50%-30rem)]", "top-[24%]", "-4.25s"],
  ["right-[calc(50%-30rem)]", "top-[48%]", "-5.25s"],
  ["left-[calc(50%-31rem)]", "top-[62%]", "-2.25s"],
  ["right-[calc(50%-31rem)]", "top-[72%]", "-6.25s"],
  ["left-[calc(50%-27rem)]", "top-[16%]", "-3.75s"],
  ["right-[calc(50%-27rem)]", "top-[22%]", "-5.75s"],
  ["left-[calc(50%-31rem)]", "top-[36%]", "-1.75s"],
  ["right-[calc(50%-31rem)]", "top-[42%]", "-4.75s"],
  ["left-[calc(50%-27rem)]", "top-[54%]", "-6.75s"],
  ["right-[calc(50%-27rem)]", "top-[60%]", "-2.75s"],
  ["left-[calc(50%-31rem)]", "top-[68%]", "-3.75s"],
  ["right-[calc(50%-31rem)]", "top-[74%]", "-5.75s"],
  ["left-[calc(50%-27rem)]", "top-[78%]", "-1.75s"],
  ["right-[calc(50%-27rem)]", "top-[84%]", "-4.75s"],
  ["left-[calc(50%-31rem)]", "top-[86%]", "-6.75s"],
  ["right-[calc(50%-31rem)]", "top-[92%]", "-2.75s"],
  ["left-[calc(50%-26rem)]", "top-[10%]", "-7.25s"],
  ["right-[calc(50%-26rem)]", "top-[16%]", "-8.25s"],
  ["left-[calc(50%-29rem)]", "top-[18%]", "-7.75s"],
  ["right-[calc(50%-29rem)]", "top-[30%]", "-8.75s"],
  ["left-[calc(50%-33rem)]", "top-[28%]", "-9.25s"],
  ["right-[calc(50%-33rem)]", "top-[36%]", "-7.5s"],
  ["left-[calc(50%-26rem)]", "top-[40%]", "-8.5s"],
  ["right-[calc(50%-26rem)]", "top-[46%]", "-9.5s"],
  ["left-[calc(50%-29rem)]", "top-[48%]", "-7.25s"],
  ["right-[calc(50%-29rem)]", "top-[56%]", "-8.25s"],
  ["left-[calc(50%-33rem)]", "top-[56%]", "-7.75s"],
  ["right-[calc(50%-33rem)]", "top-[68%]", "-8.75s"],
  ["left-[calc(50%-26rem)]", "top-[66%]", "-9.25s"],
  ["right-[calc(50%-26rem)]", "top-[80%]", "-7.5s"],
  ["left-[calc(50%-29rem)]", "top-[90%]", "-8.5s"],
  ["right-[calc(50%-29rem)]", "top-[96%]", "-9.5s"],
  ["left-[calc(50%-33rem)]", "top-[94%]", "-7.25s"],
  ["right-[calc(50%-33rem)]", "top-[10%]", "-8.25s"],
  ["left-[calc(50%-26rem)]", "top-[32%]", "-7.75s"],
  ["right-[calc(50%-26rem)]", "top-[34%]", "-8.75s"],
  ["left-[calc(50%-29rem)]", "top-[52%]", "-9.25s"],
  ["right-[calc(50%-29rem)]", "top-[62%]", "-7.5s"],
  ["left-[calc(50%-33rem)]", "top-[64%]", "-8.5s"],
  ["right-[calc(50%-33rem)]", "top-[76%]", "-9.5s"],
  ["left-[calc(50%-26rem)]", "top-[74%]", "-7.25s"],
  ["right-[calc(50%-26rem)]", "top-[86%]", "-8.25s"],
  ["left-[calc(50%-29rem)]", "top-[80%]", "-7.75s"],
  ["right-[calc(50%-29rem)]", "top-[90%]", "-8.75s"],
  ["left-[calc(50%-33rem)]", "top-[88%]", "-9.25s"],
  ["right-[calc(50%-33rem)]", "top-[98%]", "-7.5s"],
];

export function AmbientPaperDetails() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-36 bottom-24 hidden lg:block"
      aria-hidden="true"
    >
      {ambientPetals.map(([side, top, width, delay], index) => (
        <DecorativeImage
          key={`ambient-petal-${index}`}
          src={
            index % 2 === 0
              ? "/paper-theme/petals_2.webp"
              : "/paper-theme/petals_3.webp"
          }
          alt=""
          width={36}
          height={36}
          className={`ambient-petal ambient-petal-strong absolute ${side} ${top} ${width}`}
          style={{ animationDelay: delay, height: "auto" }}
        />
      ))}
      {ambientDots.map(([side, top, delay], index) => (
        <span
          key={`ambient-gold-${index}`}
          className={`ambient-gold-particle absolute ${side} ${top} ${index % 3 === 0 ? "h-1.5" : "h-1"} ${index % 4 === 0 ? "w-1.5" : "w-1"} rounded-full`}
          style={{ animationDelay: delay }}
        />
      ))}
    </div>
  );
}
