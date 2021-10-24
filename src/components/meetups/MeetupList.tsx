import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

const MeetupList = ({
  meetups,
}: {
  meetups: {
    id: string;
    title: string;
    image: string;
    address: string;
    description: string;
  }[];
}) => {
  return (
    <ul className={classes.list}>
      {meetups.map((meetup) => {
        return <MeetupItem key={meetup.id} {...meetup} />;
      })}
    </ul>
  );
};

export default MeetupList;
