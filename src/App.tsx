
import './App.css'
import FrentendDeveloper from './assets/components/FrentendDeveloper';

export type Developer = {
  title:string;
  subtitle:string;
  gitlink:string;
  linkdin:string;
  gmail:string;
  pic:string;
};

function App() {
  const dev1: Developer = {
    gmail: "wle@gmail.com",
    title:"Frontend-devloper",
    subtitle:"Tech Job-Seeker",
    gitlink:"https://github.com",
    linkdin:"https://www.linkedin.com",
    pic:"https://tse3.mm.bing.net/th/id/OIP.YQJTJpqV6hEe-zAOufrzPAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
  };
  
 

  return(

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      <FrentendDeveloper Dev={dev1} />
      <FrentendDeveloper Dev={dev1} />
      <FrentendDeveloper Dev={dev1} />
      <FrentendDeveloper Dev={dev1} />
      <FrentendDeveloper Dev={dev1} />
      <FrentendDeveloper Dev={dev1} />
      <FrentendDeveloper Dev={dev1} />
      <FrentendDeveloper Dev={dev1} />
      <FrentendDeveloper Dev={dev1} />
     
      </div>

  )
  
}

export default App
