// import "./App.css";

import { useState } from "react";
import Button from "./components/ui/Button";
import Modal from "./components/ui/Modal";

function App() {
  const [modal, setModal] = useState(false);
  const handleModalClose = () => {
    setModal((prev) => !prev);
  };

  return (
    <div className=" h-screen w-full flex justify-center items-center">
      <Button onClick={() => setModal((prev) => !prev)} variant={"solid"}>
        Open Modal
      </Button>
      <Modal isOpen={modal} onClose={handleModalClose}>
        <Modal.Header>
          <h3>Modal Title!</h3>
          <Modal.CloseButton />
        </Modal.Header>
        <p className="text-center">
          modal CatchUp! <br /> Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Culpa, repellendus? Culpa atque inventore voluptatem
          quidem ipsa, fuga omnis numquam? Nemo, aut molestiae debitis obcaecati
          voluptate quo assumenda maiores excepturi culpa.
        </p>
      </Modal>
    </div>
  );
}

export default App;
