type HeadingProps = {
  text: string;
};

export default function Heading({text}: HeadingProps) {
  return (
    <div
      id={`${text.toLowerCase()}`}
      className="text-purple-500 text-lg lg:text-xl font-semibold mb-2"
    >
      {text}
    </div>
  );
}
