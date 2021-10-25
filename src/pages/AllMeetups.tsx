import MeetupList from "../components/meetups/MeetupList";
import { MeetupType } from "../models/MeetupType";
import { useEffect, useState } from "react";
import { objectToIdList } from "../helpers/list";

const AllMeetupsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState<
    (MeetupType & { id: string })[]
  >([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-getting-started-80a5c-default-rtdb.firebaseio.com/meetups.json"
    )
      .then(async (res) => {
        const data: { [key: string]: MeetupType } = await res.json();
        const meetups = objectToIdList<MeetupType>(data);
        setLoadedMeetups(meetups);
        setIsLoading(false);
      })
      .catch(console.error);
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups Page</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
};

export default AllMeetupsPage;
