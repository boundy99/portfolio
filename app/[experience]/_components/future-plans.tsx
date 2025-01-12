type FuturePlansProps = {
  text: string;
};

export function FuturePlans({text}: FuturePlansProps) {
  const futurePlansItems = text.split("\n");

  return (
    <div className="text-gray-700 text-base lg:text-lg">
      <ul>
        {futurePlansItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
