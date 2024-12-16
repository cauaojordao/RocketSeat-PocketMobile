import { Text, useWindowDimensions } from "react-native";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";

import { Place, PlaceProps } from "./Place";

import { s } from "./styles";
import { useRef } from "react";

type Props = {
  data: PlaceProps[];
};
export const Places = ({ data }: Props) => {
  const dimensions = useWindowDimensions();
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = {
    min: 278,
    max: dimensions.height - 128,
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={[snapPoints.min, snapPoints.max]}
      handleIndicatorStyle={s.indicator}
      backgroundStyle={s.container}
      enableOverDrag={false}
    >
      <BottomSheetFlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Place data={item} />}
        contentContainerStyle={s.content}
        ListHeaderComponent={() => (
          <Text style={s.title}>Escolha um estabelecimento</Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </BottomSheet>
  );
};