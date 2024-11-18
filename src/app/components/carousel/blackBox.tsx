interface BlackBoxProp {
  content: string;
}
export default function BlackBox({ content }: BlackBoxProp) {
  return (
    <div className="opacity-0 absolute z-20 top-84 left-84 bg-black uppercase p-4 font-semibold text-white tracking-carousel text-xs text-center rounded-md animate-fadeIn animation-delay-600">
      {content}
    </div>
  );
}
