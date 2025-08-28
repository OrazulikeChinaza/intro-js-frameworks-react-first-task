import ProfileCard from "./components/ProfileCard";
import "./App.css";
import tersoo from "./assets/tersoo.png";
import nazzy from "./assets/nazzy.png";
import stephen from "./assets/stephen.png";

function App() {
  return (
    <div className="app">
      <h1>My React Profile Cards</h1>
      <div className="cards-container">
        <ProfileCard
          name="Tersoo Stephen"
          image={stephen}
          description="A passionate developer."
        />
        <ProfileCard name="Mercy Sly" image={nazzy} description="Accountant." />
        <ProfileCard name="Jeph Inem" image={tersoo} description="CEO" />
      </div>
    </div>
  );
}

export default App;
