import styles from "../styles/home.module.scss";
import Grid from "@mui/material/Grid";
import { Truck, Menu, ShoppingCart, Heart } from "lucide-react";

const Home = () => {
  return (
    <>
      {/* first section */}
      <section className={styles.hero}>
        <h1 className={styles.hero__heading}>100% fresh & organic foods</h1>
        <p className={styles.hero__paragraph}>
          we deliver organic vegetables & fruits
        </p>

        <button className={styles.hero__btn}>View Details</button>
      </section>

      {/* second section */}
      <section className={styles.products}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
            <div className={styles.products__transport}>
              <Truck
                className={styles.products__transport__truck}
                size={"55px"}
              />
            </div>
            <h1 className={styles.products__heading}>Free Shipping</h1>
            <p className={styles.products__order}>On order over $100</p>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
            <div className={styles.products__transport}>
              <Truck
                className={styles.products__transport__truck}
                size={"55px"}
              />
            </div>
            <h1 className={styles.products__heading}>Free Shipping</h1>
            <p className={styles.products__order}>On order over $100</p>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
            <div className={styles.products__transport}>
              <Truck
                className={styles.products__transport__truck}
                size={"55px"}
              />
            </div>
            <h1 className={styles.products__heading}>Free Shipping</h1>
            <p className={styles.products__order}>On order over $100</p>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
            <div className={styles.products__transport}>
              <Truck
                className={styles.products__transport__truck}
                size={"55px"}
              />
            </div>
            <h1 className={styles.products__heading}>Free Shipping</h1>
            <p className={styles.products__order}>On order over $100</p>
          </Grid>
        </Grid>
      </section>

      {/* third section */}
      <section className={styles.vegetables}>
        <Grid container spacing={3}>
          {/* 1 */}
          <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
            <div className={styles.vegetables__box}>
              <img
                className={styles.vegetables__box__fruits}
                src="https://preview.colorlib.com/theme/vegefoods/images/category-1.jpg"
                alt="basket"
              />
              <p className={styles.vegetables__box__word}>fruits</p>
            </div>
          </Grid>

          {/* 2 */}
          <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
            <div className={styles.vegetables__shop}>
              <h3 className={styles.vegetables__shop__heading}>Vegetables</h3>
              <p className={styles.vegetables__shop__paragraph}>
                Protect the health of every home
              </p>
              <button className={styles.hero__btn}>Shop Now</button>
            </div>
          </Grid>

          {/* 3 */}
          <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
            <div className={styles.vegetables__box}>
              <img
                className={styles.vegetables__box__fruits}
                src="https://preview.colorlib.com/theme/vegefoods/images/category-3.jpg"
                alt="basket"
              />
              <p className={styles.vegetables__box__word}>fruits</p>
            </div>
          </Grid>

          {/* 4 */}
          <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
            <div className={styles.vegetables__box}>
              <img
                className={styles.vegetables__box__fruits}
                src="https://preview.colorlib.com/theme/vegefoods/images/category-2.jpg"
                alt="basket"
              />
              <p className={styles.vegetables__box__word}>fruits</p>
            </div>
          </Grid>

          {/* 5 */}
          <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
            <div className={styles.vegetables__box}>
              <img
                className={styles.vegetables__box__fruits}
                src="https://preview.colorlib.com/theme/vegefoods/images/product-1.jpg"
                alt="basket"
              />
            </div>
          </Grid>

          {/* 6 */}
          <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
            <div className={styles.vegetables__box}>
              <img
                className={styles.vegetables__box__fruits}
                src="https://preview.colorlib.com/theme/vegefoods/images/category-4.jpg"
                alt="basket"
              />
              <p className={styles.vegetables__box__word}>fruits</p>
            </div>
          </Grid>
        </Grid>
      </section>

      {/* forth section */}
      <section className={styles.ourProducts}>
        <p className={styles.ourProducts__featured}>Featured Products</p>
        <h1 className={styles.ourProducts__heading}>Our Products</h1>
        <p className={styles.ourProducts__text}>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
        </p>

        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
            <div className={styles.ourProducts__card}>
              <p className={styles.ourProducts__card__percent}>30%</p>
              <div className={styles.ourProducts__card__box}>
                <img
                  className={styles.ourProducts__card__box__vegetable}
                  src="https://preview.colorlib.com/theme/vegefoods/images/product-1.jpg"
                  alt="vegetables"
                />
              </div>
              <p className={styles.ourProducts__card__name}>Bell Pepper</p>
              <div className={styles.ourProducts__card__priceBox}>
                <p className={styles.ourProducts__card__priceBox__price}>
                  $120.00
                </p>
                <p className={styles.ourProducts__card__priceBox__discount}>
                  $80.00
                </p>
              </div>
              <div className={styles.ourProducts__click}>
                <div className={styles.ourProducts__click__box}>
                  <Menu size={"20px"} className={styles.ourProducts__click__box__icon} />
                </div>
                <div className={styles.ourProducts__click__box}>
                  <ShoppingCart size={"20px"}
                    className={styles.ourProducts__click__box__icon}
                  />
                </div>
                <div className={styles.ourProducts__click__box}>
                  <Heart size={"20px"} className={styles.ourProducts__click__box__icon} />
                </div>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
            <div className={styles.ourProducts__card}>
              <p className={styles.ourProducts__card__percent}>30%</p>
              <div className={styles.ourProducts__card__box}>
                <img
                  className={styles.ourProducts__card__box__vegetable}
                  src="https://preview.colorlib.com/theme/vegefoods/images/product-1.jpg"
                  alt="vegetables"
                />
              </div>
              <p className={styles.ourProducts__card__name}>Bell Pepper</p>
              <div className={styles.ourProducts__card__priceBox}>
                <p className={styles.ourProducts__card__priceBox__price}>
                  $120.00
                </p>
                <p className={styles.ourProducts__card__priceBox__discount}>
                  $80.00
                </p>
              </div>
              <div className={styles.ourProducts__click}>
                <div className={styles.ourProducts__click__box}>
                  <Menu size={"20px"} className={styles.ourProducts__click__box__icon} />
                </div>
                <div className={styles.ourProducts__click__box}>
                  <ShoppingCart size={"20px"}
                    className={styles.ourProducts__click__box__icon}
                  />
                </div>
                <div className={styles.ourProducts__click__box}>
                  <Heart size={"20px"} className={styles.ourProducts__click__box__icon} />
                </div>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
            <div className={styles.ourProducts__card}>
              <p className={styles.ourProducts__card__percent}>30%</p>
              <div className={styles.ourProducts__card__box}>
                <img
                  className={styles.ourProducts__card__box__vegetable}
                  src="https://preview.colorlib.com/theme/vegefoods/images/product-1.jpg"
                  alt="vegetables"
                />
              </div>
              <p className={styles.ourProducts__card__name}>Bell Pepper</p>
              <div className={styles.ourProducts__card__priceBox}>
                <p className={styles.ourProducts__card__priceBox__price}>
                  $120.00
                </p>
                <p className={styles.ourProducts__card__priceBox__discount}>
                  $80.00
                </p>
              </div>
              <div className={styles.ourProducts__click}>
                <div className={styles.ourProducts__click__box}>
                  <Menu size={"20px"} className={styles.ourProducts__click__box__icon} />
                </div>
                <div className={styles.ourProducts__click__box}>
                  <ShoppingCart size={"20px"}
                    className={styles.ourProducts__click__box__icon}
                  />
                </div>
                <div className={styles.ourProducts__click__box}>
                  <Heart size={"20px"} className={styles.ourProducts__click__box__icon} />
                </div>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
            <div className={styles.ourProducts__card}>
              <p className={styles.ourProducts__card__percent}>30%</p>
              <div className={styles.ourProducts__card__box}>
                <img
                  className={styles.ourProducts__card__box__vegetable}
                  src="https://preview.colorlib.com/theme/vegefoods/images/product-1.jpg"
                  alt="vegetables"
                />
              </div>
              <p className={styles.ourProducts__card__name}>Bell Pepper</p>
              <div className={styles.ourProducts__card__priceBox}>
                <p className={styles.ourProducts__card__priceBox__price}>
                  $120.00
                </p>
                <p className={styles.ourProducts__card__priceBox__discount}>
                  $80.00
                </p>
              </div>
              <div className={styles.ourProducts__click}>
                <div className={styles.ourProducts__click__box}>
                  <Menu size={"20px"} className={styles.ourProducts__click__box__icon} />
                </div>
                <div className={styles.ourProducts__click__box}>
                  <ShoppingCart size={"20px"}
                    className={styles.ourProducts__click__box__icon}
                  />
                </div>
                <div className={styles.ourProducts__click__box}>
                  <Heart size={"20px"} className={styles.ourProducts__click__box__icon} />
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </section>
    </>
  );
};

export default Home;
