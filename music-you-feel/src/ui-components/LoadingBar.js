import Spinner from "react-bootstrap/Spinner";
import { Row } from "react-bootstrap";
function LoadingBar() {
  return (
    <Row>
      {" "}
      <Spinner animation='grow' size='sm' />
      <Spinner animation='grow' size='sm' />
      <Spinner animation='grow' size='sm' />
      <Spinner animation='grow' size='sm' />
      <Spinner animation='grow' size='sm' />
      We're analysing your word. Give us few seconds.
    </Row>
  );
}
export default LoadingBar;
