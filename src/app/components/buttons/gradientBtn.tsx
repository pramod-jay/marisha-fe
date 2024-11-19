interface GradientBtnProps {
  name: string;
  onClick: () => void;
}

export default function GradientBtn({ name, onClick }: GradientBtnProps) {
  return (
    <button
      type='button'
      className='text-3xs sm:hover:animate-shine sm:text-2x rounded-sm bg-gradient-to-r from-darkGreen via-lightGreen to-yellowGreen px-3 py-1 font-bold uppercase text-white sm:rounded-lg sm:px-5 sm:py-2 md:text-sm'
      onClick={onClick}
    >
      {name}
    </button>
  );
}
