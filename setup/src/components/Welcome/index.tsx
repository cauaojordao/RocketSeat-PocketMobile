import { Image, Text, View } from "react-native";

import { s } from "./styles";

export const Welcome = () => {
    return <View>
        <Image source={require("@/assets/logo.png")} style={s.logo}/>
        <Text style={s.title}>Bem-vindo ao Nearby!</Text>
        <Text style={s.subtitle}>Tenha cupons de vantagem para usar em seus estabelecimentos favoritos.</Text>
    </View>;
};