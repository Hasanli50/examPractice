import { Outlet, Link } from "react-router";
import styles from "../assets/styles/header.module.css";
import Grid from "@mui/material/Grid2";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
            <div className={styles.container}>
              <div className={styles.leftSide}>
                <h2 className={styles.logo}>
                  Dj<span style={{ color: "#e4ae50" }}>.</span>
                </h2>

                <h1 className={styles.heading}>DJ Kathy Music Fest</h1>

                <p className={styles.paragraph}>
                  Events every night, join with us! Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Adipisci, ad!
                </p>

                <button className={styles.btn}>join us</button>
              </div>
            </div>
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
            <nav className={styles.rightSide}>
              <div className={styles.container}>
                <ul className={styles.unorderList}>
                  <Link to={"/"} className={styles.item}>
                    <li>Home</li>
                  </Link>
                  <Link to={"/favorite"} className={styles.item}>
                    <li>Favorite</li>
                  </Link>
                  <Link to={"add-music"} className={styles.item}>
                    <li>Add Music</li>
                  </Link>
                  <li className={styles.item}>About</li>
                  <li className={styles.item}>DJs</li>
                </ul>
              </div>
            </nav>
          </Grid>
        </Grid>
      </header>

      <Outlet />
    </>
  );
};

export default Header;
