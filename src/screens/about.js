import Modal from "../components/modal/modal";
import Navbar from "../components/navbar/navbar";
import { Button } from "@mui/material";
import { useModalContext } from "../contexts/modalContext";
export default function About() {
  const { setOpen } = useModalContext();
  return (
    <div>
      <Navbar />
      <Modal
        title={"Are you sure you want to delete your image?"}
        clickedYes={() => {
          setOpen(false);
        }}
      />
      <Button onClick={() => setOpen(true)}>Open modal</Button>
    </div>
  );
}