import { createPortal } from "react-dom";
import "./popup.css"
interface PopupProps{
  submit:boolean
}
const Popup = ({ submit }: PopupProps) => {
  return createPortal(
    <div className="popup">
      {submit && (
        <div className="container-popup">
         <strong>Message Sent!</strong>
         <p>Thanks for completing the form. We'll be in touch soon!</p>
        </div>
      )}
    </div>,
    //useing portal for handling popup in boday html
    document.querySelector("#popup")
  );
};

export default Popup;

