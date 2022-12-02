import { IModal } from "../../../../models/imodal";

function ButtonModal({ toggle }: IModal) {

    return <button onClick={toggle}>X</button>;
}

export default ButtonModal;
