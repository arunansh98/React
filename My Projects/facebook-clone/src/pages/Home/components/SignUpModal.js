import Modal from "../../../components/Modal";
import Close from "../../../assets/images/close.png";

function SignUpModal({ onClose }) {
  return (
    <Modal>
      <div className="vertical-align">
        <div className="horizontal-align justify-between items-center px-3">
          <h1 className="font-bold font-secondary text-[32px] text-black">
            Sign Up
          </h1>
          <img src={Close} alt="close" onClick={onClose} />
        </div>
        <div className="text-[15px] text-[#606770] font-secondary px-3">
          Its quick and easy.
        </div>
        <hr className="mt-2" />
      </div>
    </Modal>
  );
}

export default SignUpModal;
