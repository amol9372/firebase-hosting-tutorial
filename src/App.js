import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [activity, setActivity] = useState();

  useEffect(() => {
    boredActivity();
  }, []);

  const boredActivity = () => {
    axios.get("https://www.boredapi.com/api/activity").then((res) => {
      console.log(res);
      setActivity(res.data);
    });
  };

  return (
    <div className="Firebase Hosting app">
      {activity && (
        <label style={{ fontSize: "30px" }}>{activity.activity}</label>
      )}
    </div>
  );
}

export default App;
