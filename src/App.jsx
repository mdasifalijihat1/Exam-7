import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Header/Banner";
import Header from "./components/Header/Header";
import Players from "./components/Players/Players";
import SelectedPlayer from "./components/Players/SelectedPlayer";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
 
  // set coin section 
  const [coine, setCoine] = useState(0);
  const addCoine = (amount) => {
    setCoine(coine + amount);
    toast.success("Credit Added to your Account", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };


//  chose player and player condition set section 
  const [choosePlayer, setChoosePlayer] = useState([]);

  const addChosePlayer = (player) => {
    const isExist = choosePlayer.find(
      (choosePlayer) => choosePlayer.Rating === player.Rating
    );
    if (choosePlayer.length >= 6) {
      toast.error("You cannot select more than 6 players", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (isExist) {
      toast.error("Thai player is already squad!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (coine < player.Price) {
      toast.error("You dont`t have enough money to choose player!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      setChoosePlayer([...choosePlayer, player]);
      setCoine(coine - player.Price);
      toast.success(`Congratulation!! ${player.PlayerName} is now in your squad`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

    }
  };

  // player remoed section 
  const handleRemoved = (playerName) => {
    const newPlayers = choosePlayer.filter((player) => player !== playerName);
    setChoosePlayer(newPlayers);
    toast.success("Player successfully deleted", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div>
    
    {/* Header section  */}
      <Header coine={coine}></Header>

{/* toast Container popup sms section */}
      <ToastContainer />

   {/* banner section */}
      <Banner addCoine={addCoine}> </Banner>

      {/* player section */}

      <Players choosePlayer={choosePlayer} addChosePlayer={addChosePlayer}>
    
      </Players>
 {/* player chose section  */}
      <SelectedPlayer
        handleRemoved={handleRemoved}
        choosePlayer={choosePlayer}
      ></SelectedPlayer>

      {/* footer section  */}
      <Footer></Footer>


    </div>
  );
};

export default App;
