import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { MeetupType } from "../models/MeetupType";

const NewMeetupPage = () => {
  function addMeetupHandler(meetupData: MeetupType) {
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
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetupPage;
