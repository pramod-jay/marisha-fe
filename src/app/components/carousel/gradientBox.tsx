interface GradientBoxProp {
  content: string;
}

export default function GradientBox({ content }: GradientBoxProp) {
  return (
    <div className="opacity-0 absolute z-0 top-48 left-48 bg-gradient-to-r from-darkGreen via-lightGreen to-yellowGreen uppercase px-4 py-3 font-semibold text-white text-2xl rounded-md animate-fadeIn animation-delay-200">
      {content}
    </div>
  );
}
