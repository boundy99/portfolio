type IntroductionProps = {
  text: string | string[];
};

export function Introduction({text}: IntroductionProps) {
  return (
    <div className="text-gray-700 text-base lg:text-lg">
      <p>{text}</p>
    </div>
  );
}
