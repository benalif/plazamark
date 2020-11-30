import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Footer from "../common/Footer";
import Header from "../common/Header";
import { useAuth } from "../Route/Auth";
import { Redirect } from "react-router-dom";
import "../../sass/ui-assets/components/_button.scss";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Login = () => {
  const classes = useStyles();
  const { setAuthToken } = useAuth();
  const [loggedIn, setLoggedIn] = useState(false);

  const authenticate = () => {
    setAuthToken({
      token:
        "Bearer eyJ0eXBlIjoiSldUIiwiYWxnIjoiSFM1MTIifQ.eyJzdWIiOiJkdGciLCJpc3MiOiJhcmNoZXJzLWFwaSIsImF1ZCI6ImFyY2hlcnMtYXBwIiwiaWF0IjoxNjA2MTM3MDg2LCJleHAiOjE2MDcwMDEwODYsImZ1bGxOYW1lIjoiRGlnaXRhbCBUZWNobm9sb2d5Iiwicm9sZXMiOlsiU1VQRVJfQURNSU4iXSwiY29tcGFuaWVzIjpbIm9vcmVkb28iLCJTRUEiLCJNT0JJU0VSVkUiLCJQUk9URUNIIl19.LR2qqK1F03G81li5O3Js-tsazKq_2AXxue881JPGHbug-a9ywl8dFQCVoUuh5KwPYDp6dUHPSMOUCaWfRNc7bg",
      username: "farid",
    });
    setLoggedIn(true);
  };

  const redirect = () => {
    return <Redirect to="/onepagecheckout" />;
  };

  // useEffect(() => {
  //   if (loggedIn || localStorage.getItem("token") != undefined) {
  //     return <Redirect to="/onepagecheckout" />;
  //   }
  //   return () => {};
  // });
  console.log("log:" + loggedIn);
  return (
    <>
      {loggedIn ? (
        redirect
      ) : (
        <>
          <Header />

          <div
            className="card mx-auto"
            style={{ width: "27rem", padding: "1.5rem", marginTop: "8rem" }}
          >
            <h4 class="card-title mb-4">Sign in</h4>
            <a href="#" class="btn btn-facebook btn-block mb-2">
              {" "}
              <i class="fab fa-facebook-f"></i> &nbsp; Sign in with Facebook
            </a>
            <a href="#" class="btn btn-google btn-block mb-4">
              {" "}
              <i class="fab fa-google"></i> &nbsp; Sign in with Google
            </a>
            <div class="form-group">
              <input
                name=""
                class="form-control"
                placeholder="Username"
                type="text"
              />
            </div>
            <div class="form-group">
              <input
                name=""
                class="form-control"
                placeholder="Password"
                type="password"
              />
            </div>{" "}
            <form>
              <div class="form-group form-check">
                <div class="form-group">
                  <a href="#" class="float-right">
                    Forgot password?
                  </a>
                  <label class="float-left custom-control custom-checkbox">
                    {" "}
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      checked=""
                    />{" "}
                    <div class="custom-control-label"> Remember </div>{" "}
                  </label>
                </div>
              </div>
              <button
                type="submit"
                class="btn btn-primary btn-block"
                onClick={authenticate}
              >
                {" "}
                Login{" "}
              </button>
            </form>
          </div>

          {/* <Header />
          <div className={classes.root}>
            <Grid
              container
              spacing={3}
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item xs={6}>
                <h2>Se connecter</h2>
                <TextField id="standard-basic" label="Standard" />
                <br></br>
                <TextField
                  id="standard-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                />
                <br></br>
                <Checkbox
                  //   checked={checked}
                  //   onChange={handleChange}
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
                <br></br>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={authenticate}
                >
                  Se connecter
                </Button>
                <br></br>
                <Button variant="contained" color="primary">
                  Se connecter avec facebook
                </Button>
              </Grid>
              <Grid item xs={6}>
                <h2>Créer un compte </h2>
                <p>
                  Créez votre compte client Jumia en quelques clics ! Vous
                  pouvez vous inscrire soit en utilisant votre adresse e-mail,
                  soit via votre compte Facebook.
                </p>
                <Button variant="contained" color="primary">
                  Créer votre compte
                </Button>
                <br></br>
                <Button variant="contained" color="primary">
                  Créer votre compte avec facebook
                </Button>
              </Grid>
            </Grid>
          </div>
          <Footer /> */}
        </>
      )}
    </>
  );
};

export default Login;
