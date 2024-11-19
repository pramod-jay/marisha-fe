interface BlackBoxProp {
  content: string;
}
export default function BlackBox({ content }: BlackBoxProp) {
  return (
    <div className='animation-delay-1200 absolute left-24 top-72 z-20 m-auto max-w-[60%] animate-fadeIn rounded-md bg-black p-4 text-center text-2xs font-semibold uppercase tracking-carouselSmall text-white opacity-0 sm:text-xs sm:left-80 sm:my-6 md:left-84 md:top-84 md:my-0 md:max-w-none md:tracking-carouselMedium'>
      {content}
    </div>
  );
}
