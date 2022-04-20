import { MdOutlineLocationOn } from "react-icons/md";
import { Button, ChangeLocationDiv } from "./styles";
import { FaAngleRight } from "react-icons/fa";

export function ChangeLocationButton() {
  const isClicked = true;

  return isClicked ? (
    <ChangeLocationDiv>
      <input type="text" placeholder="City name"></input>
      <button type="button">
        <FaAngleRight />
      </button>
    </ChangeLocationDiv>
  ) : (
    <Button>
      <MdOutlineLocationOn size={20} />
      <p>Change location</p>
    </Button>
  );
}
