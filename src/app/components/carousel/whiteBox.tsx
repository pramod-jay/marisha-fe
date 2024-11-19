interface WhiteBoxProp {
  content: string;
}
export default function WhiteBox({ content }: WhiteBoxProp) {
  return (
    <div
      className="
        opacity-0
        absolute
        z-10
        bg-white
        uppercase
        px-6
        py-4
        text-darkGreen
        rounded-lg
        animate-fadeIn
        animation-delay-800

        text-2xl
        inset-x-12
        m-auto
        my-1
        text-center
        font-extrabold
        tracking-carouselSmall
        top-56
        max-w-[75%]

        md:left-44
        md:text-7xl
        md:font-bold
        md:top-60
        md:inset-x-auto
        md:my-auto
        md:max-w-none
    "
    >
      {content}
    </div>
  );
}
