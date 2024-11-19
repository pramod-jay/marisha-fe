interface BlackBoxProp {
  content: string;
}
export default function BlackBox({ content }: BlackBoxProp) {
  return (
    <div
      className="
      opacity-0
      absolute z-20
      bg-black
      uppercase
      p-4
      font-semibold
      text-white
      text-center
      rounded-md
      animate-fadeIn
      animation-delay-1200

      inset-x-16
      m-auto
      top-72
      text-2xs
      tracking-carouselSmall
      max-w-[60%]

      md:left-84
      md:text-xs
      md:tracking-carouselMedium
      md:top-84
      md:inset-x-auto
      md:max-w-none
      "
    >
      {content}
    </div>
  );
}
