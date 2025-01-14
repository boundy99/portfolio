import ExperienceDetail from "./_components";

export default async function Article({
  params,
}: {
  params: {experience: string};
}) {
  const {experience} = await params;

  return (
    <>
      <ExperienceDetail experience={experience} />
    </>
  );
}
