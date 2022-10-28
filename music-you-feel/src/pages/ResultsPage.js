import { useState, useEffect } from "react";
import { Col, Row, Fade, Button } from "react-bootstrap";
import { useParams } from "react-router";
import API, { authenticate } from "../services/APIClient";
import LoadingBar from "../ui-components/LoadingBar";
import { Link } from "react-router-dom";

function ResultPage() {
  const { res } = useParams();
  const [isPlaylistLoading, setIsPlaylistLoading] = useState(true);
  const [playlist, setPlaylist] = useState("ciccio pasticcio");
  const [playlistUrl, setPlaylistUrl] = useState("");
  useEffect(() => {
    let p = API.getMoodPlaylist(res);

    p.then((r) => {
      console.log(JSON.parse(r));
      setPlaylist(JSON.parse(r));
      getPlaylistUrl(JSON.parse(r).uri);
      setIsPlaylistLoading(false);
    });
  }, []);

  const getPlaylistUrl = (uri) => {
    let elements = [];
    elements = uri.split(":");
    console.log("open.spotify.com/" + elements[1] + "/" + elements[2]);
    console.log("open.spotify.com/" + elements[1] + "/" + elements[2]);
    setPlaylistUrl(
      "https://open.spotify.com/" + elements[1] + "/" + elements[2]
    );
  };

  return (
    <>
      {" "}
      <script src='https://apis.google.com/js/api.js'></script>
      <Col className='mx-auto' sm={5}>
        <Row className='mt-5'>
          <h2 className='brand mx-auto'>
            It seems like you're a bit
            <Fade in={true} appear={true} timeout={300}>
              <i> {res} </i>
            </Fade>
          </h2>
        </Row>{" "}
        <Row> Here's something for you:</Row>
        {isPlaylistLoading ? (
          <LoadingBar></LoadingBar>
        ) : (
          <>
            We think you might like{" "}
            {playlist ? (
              <>
                <a href={playlistUrl} target='_blank'>
                  {" "}
                  Apri su Spotify{" "}
                </a>

                <img src={playlist.images.items[0].sources[0].url} />
              </>
            ) : (
              <> carichiamo</>
            )}
            <Button onClick={() => getPlaylistUrl(playlist.uri)}></Button>
          </>
        )}
      </Col>
    </>
  );
}

export default ResultPage;
