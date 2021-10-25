import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";
import { MeetupType } from "../../models/MeetupType";

const MeetupList = ({ meetups }: { meetups: MeetupType[] }) => {
  return (
    <ul className={classes.list}>
      {meetups.map((meetup) => (
        <MeetupItem key={meetup.id} {...meetup} />
      ))}
    </ul>
  );
};

export default MeetupList;
