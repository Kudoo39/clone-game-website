import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 80 ? "green" : score > 65 ? "yellow" : "red";

  return (
    <Badge
      fontSize="14px"
      borderRadius="4px"
      paddingX="5px"
      colorScheme={color}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
