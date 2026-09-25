type SkillProps = {
  name: string;
  level: string;
};

function Skill({ name, level }: SkillProps) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{level}</p>
    </div>
  );
}

export default Skill;
