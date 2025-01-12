type ChallengesProps = {
  text: string;
};

export function Challenges({text}: ChallengesProps) {
  const challengeItems = text.split("\n");

  return (
    <div className="text-gray-700 text-base lg:text-lg">
      <ul>
        {challengeItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
