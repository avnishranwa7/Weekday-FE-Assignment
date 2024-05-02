import classes from "./App.module.css";
import JobPost from "./components/JobPost";

function App() {
  return (
    <div className={classes.root}>
      <JobPost />
    </div>
  );
}

export default App;
