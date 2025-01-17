import Grid from "@mui/material/Grid";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import styles from "../assets/styles/home.module.css";
import { useContext, useEffect, useState } from "react";
import { MusicProvider } from "../context/MusicContext";
import { toast } from "react-hot-toast";

const Home = () => {
  const { musics, deleteMusic, favoriteToggle } = useContext(MusicProvider);
  const [filteredData, setFilteredData] = useState(musics);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const data = musics.filter((value) =>
      value.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(data);
  }, [searchQuery, musics]);

  const handleSelect = (e) => {
    let keywword;
    switch (e) {
      case "default":
        keywword = [...musics]
        break;
        case "asc":
        keywword = [...musics].sort((a, b) => a.price - b.price);
        break;
      case "desc":
        keywword = [...musics].sort((a, b) => b.price- a.price);
        break;

      default:
        keywword = [...musics]
        break;
    }
    setFilteredData(keywword)
  };

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.coontainer}>
          <div className={styles.headingBox}>
            <p className={styles.heading}>Featured Events</p>
          </div>
          <div style={{ display: "flex", margin: "auto" }}>
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                type="text"
                style={{ padding: "10px 10px" }}
              />
            </div>
            <div>
              <select onChange={(e) => handleSelect(e.target.value)}>
                <option value="default">default</option>
                <option value="asc">asc</option>
                <option value="desc">desc</option>
              </select>
            </div>
          </div>

          <Grid container spacing={2}>
            {filteredData &&
              filteredData.map((music) => (
                <Grid
                  item
                  size={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 4 }}
                  key={music.id}
                >
                  <div className={styles.card}>
                    <div
                      onClick={() => {
                        favoriteToggle(music.id);
                        if (music.isFavorite === true) {
                          toast.error(
                            "Music successfully deleted from favorites!"
                          );
                        } else {
                          toast.success(
                            "Music successfully added to favorites!"
                          );
                        }
                      }}
                    >
                      {music.isFavorite === true ? (
                        <FavoriteIcon className={styles.icon} />
                      ) : (
                        <FavoriteBorderIcon className={styles.icon} />
                      )}
                    </div>
                    <div className={styles.cardImageBox}>
                      <img
                        className={styles.image}
                        src={music.image}
                        alt="music"
                      />
                      <div className={styles.timeBox}>
                        <p className={styles.time}>
                          <span>19</span>
                          <span>jun</span>
                        </p>
                      </div>
                    </div>
                    <h3 className={styles.name}>{music.name}</h3>
                    <p className={styles.paragraph}>{music.description}</p>
                    <p className={styles.paragraph}>${music.price}</p>

                    <div className={styles.buttons}>
                      <Link to={`/${music.id}`}>
                        <button className={styles.btn}>info</button>
                      </Link>
                      <button
                        className={styles.btn}
                        onClick={() => deleteMusic(music.id)}
                      >
                        delete
                      </button>
                    </div>
                  </div>
                </Grid>
              ))}
          </Grid>
        </div>
      </section>
    </>
  );
};

export default Home;
