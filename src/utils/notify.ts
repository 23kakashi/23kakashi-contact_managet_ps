import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const notify = (message: String) => toast(message);

export default notify