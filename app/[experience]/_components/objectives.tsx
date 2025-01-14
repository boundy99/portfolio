type ObjectivesProps = {
  text: string;
};

export function Objectives({text}: ObjectivesProps) {
  const objectivesItems = text.split("\n");

  return (
    <div className="text-gray-700 text-base lg:text-lg">
      <ul>
        {objectivesItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
