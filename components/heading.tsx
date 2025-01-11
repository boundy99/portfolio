type HeadingProps = {
  text: string;
};

export default function Heading({text}: HeadingProps) {
  return (
    <div className="text-purple-500 text-lg lg:text-xl font-semibold">
      {text}
    </div>
  );
}
