import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { MeetupType } from "../models/MeetupType";
import { useHistory } from "react-router-dom";

const NewMeetupPage = () => {
  const history = useHistory();

  function addMeetupHandler(meetupData: Omit<MeetupType, "id">) {
    fetch(
      "https://react-getting-started-80a5c-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then(() => history.replace("/"))
      .catch(console.error);
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetupPage;
