/**
 * All the API calls
 */

import Playlist from "./models/Playlist";
import { gapi } from "gapi-script";

export async function analyseSentiment(text) {
  /* var myHeaders = new Headers();
  myHeaders.append("apikey", "wkWbA5N7gzYfUQeqqjKsGhgyPhMYX0ut");

  var raw = text;

  var requestOptions = {
    method: "POST",
    redirect: "follow",
    headers: myHeaders,
    body: raw,
  };

  fetch("https://api.apilayer.com/text_to_emotion", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));*/
}

export async function getMoodPlaylist(q) {
  var myHeaders = new Headers();
  myHeaders.append("apikey", "wkWbA5N7gzYfUQeqqjKsGhgyPhMYX0ut");

  var requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  let ris;

  await fetch(
    "https://api.apilayer.com/spotify/search?q={" + q + "}=?t=playlists",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      ris = JSON.stringify(
        result.playlists.items[Math.floor(Math.random() * 9)].data
      );
      console.log(typeof ris);
    })
    .catch((error) => console.log("error", error));

  return ris;
}

export async function authenticate() {
  return gapi.auth2
    .getAuthInstance()
    .signIn({
      scope:
        "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.readonly",
    })
    .then(
      function () {
        console.log("Sign-in successful");
      },
      function (err) {
        console.error("Error signing in", err);
      }
    );
}

const API = {
  analyseSentiment,
  getMoodPlaylist,
  authenticate,
};
export default API;
