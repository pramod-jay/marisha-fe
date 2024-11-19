interface WhiteBoxProp {
  content: string;
}
export default function WhiteBox({ content }: WhiteBoxProp) {
  return (
    <div className='animation-delay-800 absolute left-12 top-56 z-10 m-auto my-1 max-w-[75%] animate-fadeIn rounded-lg bg-white px-6 py-4 text-center text-2xl font-extrabold uppercase tracking-carouselSmall text-darkGreen opacity-0 sm:text-6xl md:left-44 md:top-60 md:my-auto md:max-w-none md:text-7xl md:font-bold'>
      {content}
    </div>
  );
}
