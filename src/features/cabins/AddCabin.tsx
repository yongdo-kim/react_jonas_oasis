// import { useState } from "react";
// import Button from "../../ui/Button";
// import Modal from "../../ui/Modal";
// import CreateCabinForm from "./CreateCabinForm";

import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

// export default function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false);
//   return (
//     <>
//       <Button
//         variations='primary'
//         size='medium'
//         style={{ width: "80rem" }}
//         onClick={() => setIsOpenModal(!isOpenModal)}
//         children={"Add new cabin"}
//       ></Button>
//       {isOpenModal && (
//         <Modal
//           onClick={() => setIsOpenModal(false)}
//           children={<CreateCabinForm />}
//         />
//       )}
//     </>
//   );
// }

export default function AddCabin() {
  return (
    <Modal
      children={
        <>
          {/* 버튼의 역할 */}
          <Modal.Open
            opensWindowName='cabin-form'
            children={<Button children={"Add new Cabin"} />}
          />
          {/* 모달 창 역할  */}
          <Modal.Window
            opensWindowName='cabin-form'
            children={<CreateCabinForm />}
          />
        </>
      }
    />
  );
}
