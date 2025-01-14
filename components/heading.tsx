type HeadingProps = {
  text: string;
};

export default function Heading({ text }: HeadingProps) {
  return (
    <div
      id={`${text.toLowerCase()}`}
      className="text-green-400 text-3xl font-semibold mb-4 text-center md:text-left"
    >
      {text}
    </div>
  );
}
