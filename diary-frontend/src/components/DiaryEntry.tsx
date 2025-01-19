import { DiaryEntry } from "../types";

const DiaryComponent = ({ entry }: { entry: DiaryEntry }) => {
  return (
    <div>
      <p></p>
      <b>{entry.date}</b>
      <br/>Weather: {entry.weather}
      <br/>Visibility: {entry.visibility}
      <br/><i>{entry.comment}</i>
    </div>
  );
};

export default DiaryComponent;