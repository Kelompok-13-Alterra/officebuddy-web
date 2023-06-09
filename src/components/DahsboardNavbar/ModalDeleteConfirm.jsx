import { Button, Modal } from "flowbite-react";
import React from "react";
import LogoutLogo from "../../assets/img/LogoutModal.png";

const ModalDeleteConfirm = ({
  openConfirm,
  handleCloseModalDelete,
  handleLogout,
}) => {
  return (
    <div>
      <Modal show={openConfirm} popup size="md">
        <Modal.Body className="bg-white rounded-xl w-[452px] h-[320px]">
          <div className="text-center justify-center items-center w-full p-7 flex flex-col">
            <img src={LogoutLogo} alt="Logoutlogo" />
            <h3 className="mb-5 text-[16px] font-normal text-gray-500 dark:text-gray-400">
              <p>Apakah anda yakin untuk logout ?</p>
            </h3>
            <div className="flex justify-center mt-5 gap-4">
              <Button
                className="w-[170px] h-[50px]"
                color="gray"
                onClick={handleCloseModalDelete}
              >
                <p className="text-blue-700">No</p>
              </Button>
              <Button
                className="w-[170px] h-[50px] bg-[#005DB9]"
                color=""
                onClick={handleLogout}
              >
                <p className="text-white">Yes</p>
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalDeleteConfirm;
