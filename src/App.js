import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

axios.defaults.headers.common["X-Requested-With"] = "XmlHttpRequest";

function App() {
  const [activity, setActivity] = useState();

  useEffect(() => {
    boredActivity();
  }, []);

  const boredActivity = () => {
    axios.get(process.env.REACT_APP_SERVER_BASE_URL).then((res) => {
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
