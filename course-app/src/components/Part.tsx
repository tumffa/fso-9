import { CoursePart } from '../types';

const Part = ({ part }: { part: CoursePart }) => {
  switch(part.kind) {
    case "basic":
      return (
      <div>
        <b>{part.name} {part.exerciseCount}</b>
        <br/><i>{part.description}</i>
      </div>);
    case "group":
      return (
        <div>
          <b>{part.name} {part.exerciseCount}</b>
          <br/>Projects: {part.groupProjectCount}
        </div>
      );
    case "background":
      return (
        <div>
          <b>{part.name} {part.exerciseCount}</b>
          <br/><i>{part.description}</i>
          <br/>Background material: {part.backgroundMaterial}
        </div>
      );
    case "special":
      return (
        <div>
          <b>{part.name} {part.exerciseCount}</b>
          <br/><i>{part.description}</i>
          <br/>Required skills: {part.requirements.join(', ')}
        </div>
      );
  };
};

export default Part;