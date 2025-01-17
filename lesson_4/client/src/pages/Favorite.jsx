import Grid from "@mui/material/Grid2";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router";
import FavoriteIcon from "@mui/icons-material/Favorite";
import styles from "../assets/styles/home.module.css";
import { useContext } from "react";
import { MusicProvider } from "../context/MusicContext";
import { toast } from "react-hot-toast";

const Favorite = () => {
  const { musics, deleteMusic, favoriteToggle } = useContext(MusicProvider);

  const data = musics.filter((music) => music.isFavorite);
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.coontainer}>
          <div className={styles.headingBox}>
            <p className={styles.heading}>Featured Events</p>
          </div>

          <Grid container spacing={2}>
            {data.length > 0 ? (
              data.map((music) => (
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
              ))
            ) : (
              <p> You dont have favorites musics</p>
            )}
          </Grid>
        </div>
      </section>
    </>
  );
};

export default Favorite;
