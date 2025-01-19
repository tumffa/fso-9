import { CoursePart } from '../types';
import Part from './Part'

const Content = ({ courseParts }: { courseParts: CoursePart[] }) => {
  return (
    <div>
      {courseParts.map(coursePart => 
        <div key={coursePart.name}>
          <p></p><Part part={coursePart} />
        </div>
      )}
    </div>
  );
};

export default Content;