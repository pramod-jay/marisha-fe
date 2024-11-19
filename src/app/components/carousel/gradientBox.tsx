interface GradientBoxProp {
  content: string;
}

export default function GradientBox({ content }: GradientBoxProp) {
  return (
    <div className='text-whie animation-delay-200 absolute left-16 top-48 z-0 m-auto max-w-[35%] animate-fadeIn rounded-md bg-gradient-to-r from-darkGreen via-lightGreen to-yellowGreen px-4 py-3 text-center text-sm font-semibold uppercase text-white opacity-0 sm:text-base md:inset-x-auto md:left-48 md:max-w-none md:text-2xl'>
      {content}
    </div>
  );
}
