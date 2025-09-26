import "./App.css";
import ProfileCard from "./components/ProfileCard";

function App() {

  const person1 = {
    name: "Talan Dias",
    title:"UX Designer",
    pic: "https://placehold.co/400",
    verified: true,
  };


  
  return (
    <div className="flex-col gap-2 md:flex-row ">
      <ProfileCard person={person1}/>
  
    </div>
  );
}

export default App;
