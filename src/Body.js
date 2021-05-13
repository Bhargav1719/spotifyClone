import React from "react";
import Header from "./Header";
import "./body.css";
import { useStateValue } from "./StateProvider";
import { Favorite, MoreHoriz, PlayCircleFilled } from "@material-ui/icons";
import MorningCard from "./MorningCard";
function Body({ spotify }) {
  const [{ Love,discover_weekly }, dispatch] = useStateValue();
  console.log("❤️",discover_weekly);
  return (
    <div className="body">
      <Header spotify={spotify} />
     
       
        <div className="Good_Morning">
        <h1>Good Morning</h1>
        <div >
          <div className="morningcards">
          
          <MorningCard image="https://i.scdn.co/image/ab67706f00000002816bfa84fc1984d377ba5652" title="TODAY'S TOP HITS"/>
          <MorningCard image="https://i.scdn.co/image/ab67706f00000002b5df54673da0935a538c8e48" title="Mega Hit Mix"/>
          <MorningCard image="https://i.scdn.co/image/ab67706f00000002f0520761fe62ec92bae9b1bc" title="Soulful Sid Sriram"/>
          
          </div>
          <div className="morningcards">
          <MorningCard image="https://mosaic.scdn.co/640/ab67616d00001e022a1b3946089eaa3e7704405bab67616d00001e02cb045e684adce8d49ada4045ab67616d00001e02d76647a817d55638a50c863fab67616d00001e02ded369cbd4c89506433cb894" title="psycho-russ"/>
          <MorningCard image="https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba" title="Mood Booster"/>
          <MorningCard image="https://i1.sndcdn.com/artworks-000810668878-k8e9g0-t500x500.jpg" title="Top 50-Global"/>

          </div>
        </div>
        </div>
      
      <div className="body_songs">
      
      </div>
    </div>
  );
}

export default Body;
