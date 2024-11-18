interface WhiteBoxProp {
  content: string;
}
export default function WhiteBox({ content }: WhiteBoxProp) {
  return (
    <div className="opacity-0 absolute z-10 top-60 left-44 bg-white uppercase px-6 py-4 font-bold text-darkGreen text-7xl rounded-lg animate-fadeIn animation-delay-400">
      {content}
    </div>
  );
}
