import { useContext } from "react";
import { MusicProvider } from "../context/MusicContext";
import { Link, useParams } from "react-router";
import styles from "../assets/styles/details.module.css";

export const Details = () => {
  const { id } = useParams();
  const { musics, deleteMusic } = useContext(MusicProvider);

  const data = musics.find((value) => value.id === id);

  return (
    <>
      {data && (
        <div className={styles.card}>
          <div className={styles.cardImageBox}>
            <img className={styles.image} src={data.image} alt="music" />
            <div className={styles.timeBox}>
              <p className={styles.time}>
                <span>19</span>
                <span>jun</span>
              </p>
            </div>
          </div>
          <div>
            <h3 className={styles.name}>{data.name}</h3>
            <p className={styles.paragraph}>{data.description}</p>
            <p className={styles.paragraph}>Price: ${data.price}</p>


            <div className={styles.buttons}>
              <Link to={`/`}>
                <button className={styles.btn}>Back</button>
              </Link>
              <button
                className={styles.btn}
                onClick={() => deleteMusic(data.id)}
              >
                delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
