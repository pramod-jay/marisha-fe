interface GradientBoxProp {
  content: string;
}

export default function GradientBox({ content }: GradientBoxProp) {
  return (
    <div
      className="
        opacity-0
        absolute
        z-0
        bg-gradient-to-r
        from-darkGreen
        via-lightGreen
        to-yellowGreen
        uppercase
        px-4
        py-3
        font-semibold
        text-whie
        rounded-md
        animate-fadeIn
        animation-delay-200

        inset-x-28
        m-auto
        text-center
        top-48
        text-sm
        max-w-[30%]

        md:left-48
        md:text-2xl
        md:inset-x-auto
        md:max-w-none
        "
    >
      {content}
    </div>
  );
}
