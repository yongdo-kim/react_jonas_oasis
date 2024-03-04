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
  //버튼을 누르고 모달을 띄우는게 아닌 이미 버튼과 모달이 하나인 기능이여서 헷갈리는듯
  return (
    <Modal
      children={
        <>
          {/* 버튼 : 누르면 cabin-form으로 이름이 변경 -> 이름 일치의 경우 모달이 뜨는 시스템 */}
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
