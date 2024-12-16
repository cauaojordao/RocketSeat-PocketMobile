import { View, Text, TouchableOpacity, TouchableOpacityProps, Image } from "react-native";
import { IconTicket } from "@tabler/icons-react-native";

import { s } from "./styles";
import { colors } from "@/styles/theme";

export type PlaceProps = {
  id: string;
  name: string;
  description: string;
  coupons: number;
  cover: string;
  address: string;
};

type Props = TouchableOpacityProps & {
  data: PlaceProps;
}

export const Place = ({ data, ...rest }: Props) => {
  return (
    <TouchableOpacity style={s.container} {...rest}>

      <Image style={s.image} source={{ uri: data.cover }}/>

      <View style={s.content}>

        <Text style={s.name}>{data.name}</Text>
        <Text style={s.description}>{data.description}</Text>

        <View style={s.footer}>

          <IconTicket size={16} color={colors.red.base} />

          <Text style={s.tickets}>{data.coupons > 1 ? `${data.coupons} cupons disponíveis` : `${data.coupons} cupom disponível`} </Text>

        </View>

      </View>
    </TouchableOpacity>
  );
};
