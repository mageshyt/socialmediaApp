import { FC } from "react";
import { View } from "../Themed";

type IconProps = {
  name: string;
  Family: any;
    size: number;
};
export const Icon: FC<IconProps> = ({ name, Family,size
 }) => {
  return <Family name={name} size={size} color="white" />;
};
