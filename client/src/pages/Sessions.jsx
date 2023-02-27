import React from "react";
import SessionCard from "../components/SessionCard";
import sessionsDB from "../data";
import axios from "axios";
import newRequest from "../utils/newRequest";

const Sessions = () => {
  // console.log(sessionsDB);
  const [sessions, setSessions] = React.useState([]);
  let a;
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://aspire-mentorship.onrender.com/api/session"
        );

        // setSessions(res.data);
        const data = await res.json();
        a = data;
        // console.log(data);
      } catch (error) {
        console.log(error);
      }

      fetchData();
    };
  }, []);

  console.log(a);

  return (
    <>
      <main>
        <ul>
          {sessions.map((session) => (
            <li key={session.id}>
              <SessionCard id={session.id} data={session} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default Sessions;
