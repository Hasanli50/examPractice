import { Phone, Send, ShoppingCart } from "lucide-react";
import { Grid } from "@mui/material"; // Import MUI components
import styles from "../styles/navbar.module.scss";
import { Link } from "react-router";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.color}>
          <div className={styles.box}>
            <Grid
              container
              spacing={2}
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item xs={12} sm={6} md={4}>
                <p className={styles.box__callNumber}>
                  <Phone size={10} /> + 1235 2355 98
                </p>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <p className={styles.box__email}>
                  <Send size={10} /> youremail@email.com
                </p>
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <p className={styles.box__workDay}>
                  3-5 Business days delivery & Free Returns
                </p>
              </Grid>
            </Grid>
          </div>
        </div>

        <div className={styles.shadow}>
          <div className={styles.routes}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <h1 className={styles.routes__heading}>Vegefoods</h1>
              </Grid>

              <Grid item xs={12} sm="auto">
                <nav className={styles.routes__nav}>
                  <ul className={styles.routes__nav__unorderlist}>
                    <Link to={"/"}>
                      <li className={styles.routes__nav__unorderlist__item}>
                        home
                      </li>
                    </Link>
                    <li className={styles.routes__nav__unorderlist__item}>
                      shop
                    </li>
                    <li className={styles.routes__nav__unorderlist__item}>
                      about
                    </li>
                    <li className={styles.routes__nav__unorderlist__item}>
                      blog
                    </li>
                    <li className={styles.routes__nav__unorderlist__item}>
                      contact
                    </li>
                    <li className={styles.routes__nav__unorderlist__item}>
                      <ShoppingCart size={13} /> [0]
                    </li>
                  </ul>
                </nav>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
