import { Container, Row, Col, Button, Form } from "react-bootstrap";
import CarouselMainPage from "../ui-components/CarouselMainPage";
import Fade from "react-bootstrap/Fade";
import { useState, useEffect } from "react";
import API from "../services/APIClient";
import LoadingBar from "../ui-components/LoadingBar";
import { useNavigate } from "react-router-dom";

function MainPage() {
  let navigate = useNavigate();
  const [isTryOn, setIsTryOn] = useState(false);
  const [isRequestLoading, setIsRequestLoading] = useState(false);
  const [text, setText] = useState("");
  const handleSubmit = () => {
    console.log(text);
    setIsRequestLoading(true);
    API.analyseSentiment(text).then((r) => {
      setTimeout(function () {
        let res = text;
        setIsRequestLoading(false);
        navigate("/result/" + res);
      }, 5000);
    });
  };

  return (
    <>
      <Col className='mx-auto' sm={3}>
        <Row className='mt-5'>
          <h2 className='brand mx-auto'>
            Listen to the music you{" "}
            <Fade in={true} appear={true} timeout={300}>
              <i>feel</i>
            </Fade>
          </h2>
        </Row>
        Find new songs thanks to your feelings. <br></br> Playlists that matches
        your vibe.
        <Row className='mt-5'></Row>
        {isRequestLoading ? (
          <LoadingBar />
        ) : (
          <>
            {isTryOn ? (
              <>
                {" "}
                <Form onSubmit={handleSubmit}>
                  <Form.Group
                    className='mb-3'
                    controlId='exampleForm.ControlTextarea1'>
                    <Form.Label>How are you?</Form.Label>
                    <Form.Control
                      as='textarea'
                      rows={3}
                      onChange={(event) => {
                        setText(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <Button className='mx-auto' onClick={() => handleSubmit()}>
                    Create
                  </Button>
                </Form>
              </>
            ) : (
              <Button onClick={() => setIsTryOn(true)}> Try now</Button>
            )}
          </>
        )}
      </Col>
      <Col sm={1} className='left-col'></Col>
    </>
  );
}

export default MainPage;
