import { useState } from "react";

export default function App() {
  const [loadingIndex, setLoadingIndex] = useState<number | null>(null); // Lecture/Pause
  const [playingIndex, setPlayingIndex] = useState<number | null>(null); // Indice du morceau en lecture
  const [showLyricsIndex, setShowLyricsIndex] = useState<number | null>(null); // Modal des paroles
  const [downloadStatus, setDownloadStatus] = useState<{ [key: number]: string }>({}); // Statut de téléchargement

  const songs = [
    {
      title: "🎵 My Heart Will Go On",
      artist: "Céline Dion",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/C%C3%A9line_Dion_2012.jpg/390px-C%C3%A9line_Dion_2012.jpg",
      lyrics: `Every night in my dreams\nI see you, I feel you\nThat is how I know you go on\nFar across the distance\nAnd spaces between us\nYou have come to show you go on

\nNear, far, wherever you are\nI believe that the heart does go on\nOnce more, you open the door\nAnd you're here in my heart\nAnd my heart will go on and on

\nLove can touch us one time\nAnd last for a lifetime\nAnd never let go 'til we're gone\nLove was when I loved you\nOne true time I'd hold to\nIn my life, we'll always go on

\nNear, far, wherever you are\nI believe that the heart does go on\n(Why does the heart go on?)\nOnce more, you open the door\nAnd you're here in my heart\nAnd my heart will go on and on

\nYou're here, there's nothing I fear\nAnd I know that my heart will go on\nWe'll stay forever this way\nYou are safe in my heart\nAnd my heart will go on and on`,
    },
    {
      title: "🎶 Octobre (original)",
      artist: "Francis Cabrel",
      image: "https://tse2.mm.bing.net/th?id=OIP.o6GP2fTz0OW5wCqyD19KnQHaE8&pid=Api&P=0&h=180",
      lyrics: `Le vent fera craquer les branches\nLa brume viendra dans sa robe blanche\nY aura des feuilles partout\nCouchées sur les cailloux\nOctobre tiendra sa revanche\nLe soleil sortira à peine\nNos corps se cacheront sous des bouts de laine
\nPerdue dans tes foulards\nTu croiseras le soir\nOctobre endormi aux fontaines\nIl y aura certainement\nSur les tables en fer blanc\nQuelques vases vides et qui traînent\nEt des nuages pris aux antennes
\nJe t'offrirai des fleurs\nEt des nappes en couleurs\nPour ne pas qu'Octobre nous prenne\nOn ira tout en haut des collines\nRegarder tout ce qu'Octobre illumine\nMes mains sur tes cheveux\nDes écharpes pour deux\nDevant le monde qui s'incline
\nCertainement appuyés sur des bancs\nIl y aura quelques hommes qui se souviennent\nEt des nuages pris sur les antennes\nJe t'offrirai des fleurs\nEt des nappes en couleurs\nPour ne pas qu'Octobre nous prenne
\nEt sans doute on verra apparaître\nQuelques dessins sur la buée des fenêtres\nVous, vous jouerez dehors\nComme les enfants du nord\nOctobre restera peut-être\nVous, vous jouerez dehors\nComme les enfants du nord\nOctobre restera peut-êtr`
    },
  ];

  // Fonction pour simuler une pause/play
  const handlePlayPause = (index: number) => {
    if (playingIndex === index) {
      setPlayingIndex(null); // Mettre en pause
    } else {
      setLoadingIndex(index);
      setTimeout(() => {
        setPlayingIndex(index);
        setLoadingIndex(null);
      }, 300); // Simuler un délai
    }
  };

  // fonction pour simuler un téléchargement
  const handleDownload = (index: number) => {
    setDownloadStatus((prev) => ({ ...prev, [index]: "loading" })); // Passer en mode "loading"
    setTimeout(() => {
      setDownloadStatus((prev) => ({ ...prev, [index]: "success" })); // Téléchargement terminé
    }, 2000); // Simuler un téléchargement
  };

  return (
    <div className="min-h-screen bg-[#010101] text-[#333333] flex flex-col items-center justify-center">
      {/* Haut de page */}
      <header className="text-center mb-8">
        <h1
          className="text-[5rem] font-black text-white font-montserrat leading-tight"
          style={{ letterSpacing: "-4px" }}
        >
          Deezer Inspired Player
        </h1>

        <p className="text-lg text-white">Contrôlez votre musique avec style !</p>
      </header>

      {/* Contenu principal */}
      <div className="flex gap-8  justify-center items-center w-full max-w-6xl">
        {songs.map((song, index) => (
          <div
            key={index}
            className="bg-white  p-6 rounded-lg shadow-lg w-full max-w-md"
          >
            {/* Image du chanteur */}
            <img
              src={song.image}
              alt={song.artist}
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
            {/* Titre de la musique */}
            <h2
              className="text-2xl font-bold text-black text-center mb-4 cursor-pointer hover:underline"
              onClick={() => setShowLyricsIndex(index)}
            >
              {song.title} - {song.artist}
            </h2>

            {/* Boutons de gestion de la musique */}
            <div className="flex items-center justify-around">
              {/* Bouton Précédent */}
              <button
                className="bg-transparent text-violet border border-violet hover:bg-violet hover:text-white hover:border-transparent px-4 py-2 rounded transition"
              >
                ⏮️ Précédent
              </button>


              {/* Bouton Play/Pause */}
              <button
                className={`btn px-4 py-2 rounded flex items-center justify-center ${loadingIndex === index
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : playingIndex !== null && playingIndex !== index
                      ? "bg-gray-400 text-gray-500 cursor-not-allowed"
                      : "bg-[#000000] text-white hover:bg-gray-800 transition"
                  }`}
                onClick={() => handlePlayPause(index)}
                disabled={playingIndex !== null && playingIndex !== index}
              >
                {loadingIndex === index ? (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                ) : playingIndex === index ? (
                  "⏸️ Pause"
                ) : (
                  "▶️ Lecture"
                )}
              </button>

              {/* Bouton Suivant */}
              <button className="bg-transparent text-violet border border-violet hover:bg-violet hover:text-white hover:border-transparent px-4 py-2 rounded hover:bg-purple-700 transition">
                ⏭️ Suivant
              </button>
            </div>

            {/* Bouton Télécharger */}
            <div className="flex justify-center mt-4">
              <button
                className={`bg-[#A238FF] hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center transition ${downloadStatus[index] === "loading" ? "cursor-not-allowed" : ""
                  }`}
                onClick={() => handleDownload(index)}
                disabled={downloadStatus[index] === "loading"}
              >
                {downloadStatus[index] === "loading" ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-current mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      ></path>
                    </svg>
                    <span>Loading...</span>
                  </>
                ) : downloadStatus[index] === "success" ? (
                  "✅ Téléchargé !"
                ) : (
                  <>
                    <svg
                      className="fill-current w-4 h-4 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                    </svg>
                    <span>Télécharger</span>
                  </>
                )}
              </button>
            </div>

            {/* Pop Up pour les paroles */}
            {showLyricsIndex === index && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div
                  className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full text-left relative"
                >
                  <h3 className="text-2xl font-bold mb-4 text-black">
                    🎤 Paroles
                  </h3>
                  <div
                    className="text-gray-700 leading-relaxed mb-4 columns-2 gap-8"
                    style={{ whiteSpace: "pre-wrap" }}
                  >
                    {song.lyrics}
                  </div>
                  {/* Bouton Fermer */}
                  <button
                    className="btn bg-[#A238FF] text-white px-6 py-3 text-lg rounded hover:bg-purple-700 transition block mx-auto"
                    onClick={() => setShowLyricsIndex(null)}
                  >
                    Fermer
                  </button>
                </div>
              </div>
            )}

          </div>
        ))}
      </div>
    </div>
  );
}
