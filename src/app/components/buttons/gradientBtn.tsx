interface GradientBtnProps {
  name: string;
  onClick: () => void;
}

export default function GradientBtn({ name, onClick }: GradientBtnProps) {
  return (
    <button
      type="button"
      className="py-2 px-5 bg-gradient-to-r rounded-lg from-darkGreen via-lightGreen to-yellowGreen"
      onClick={onClick}
    >
      <p className={"text-sm uppercase font-bold text-white"}>{name}</p>
    </button>
  );
}
