import ExperienceDetail from "./_components";

type tParams = Promise<{experience: string}>;

export default async function Article(props: {params: tParams}) {
  const {experience} = await props.params;

  return (
    <>
      <ExperienceDetail experience={experience} />
    </>
  );
}
