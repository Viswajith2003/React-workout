import { useContext } from "react";
import ourContext from "../contexts/ourContext";

export default function ConsumeContext() {
  return useContext(ourContext);
}
