import React from "react";
import { colors } from "../../../constants";

import { Badge, Status } from "./styles";

interface Props {
  status: string;
}

function BadgeButton({ status }: Props) {
  const [BackgroundColor, setBackgroundColor] = React.useState("");

  React.useEffect(() => {
    if (status === "Alive") {
      setBackgroundColor("#00fa9a");
    } else if (status === "Dead") {
      setBackgroundColor("#ff7f8a");
    } else {
      setBackgroundColor(`${colors.gray}`);
    }
  }, [status]);

  return (
    <Badge BackgroundColor={BackgroundColor}>
      <Status>{status}</Status>
    </Badge>
  );
}

export default BadgeButton;
