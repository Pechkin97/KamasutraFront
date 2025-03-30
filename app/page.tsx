import './globals.css';
import Header from "@/app/components/Header";
import NavBar from "@/app/components/NavBar";
import Profile from "@/app/components/Profile";

export default function Home() {
  return (
    <div className="app-wrapper">
        <Header/>
        <NavBar/>
        <Profile/>


    </div>
  );
}