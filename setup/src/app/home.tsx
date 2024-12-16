import { useEffect, useState } from "react";
import { View, Alert } from "react-native";

import { api } from "@/services/api";
import { Categories, CategoriesProps } from "@/components/Categories";
import { Places } from "@/components/Places";
import { PlaceProps } from "@/components/Places/Place";

type MarketsProps = PlaceProps & {
  
}

export default function Home() {
  const [categories, setCategories] = useState<CategoriesProps>([]);
  const [category, setCategory] = useState("");
  const [markets, setMarkets] = useState<MarketsProps[]>([]);

  const fetchCategories = async () => {
    try {
      const { data } = await api.get("/categories");
      setCategories(data);
      setCategory(data[0].id);
    } catch (error) {
      console.error(error);
      Alert.alert("Erro:", "Error in fetch categories");
    }
  };

  const fetchMarkets = async () => {
    try {
      if (!category) {
        return;
      }

      const { data } = await api.get("/markets/category/" + category);
      setMarkets(data);
    } catch (error) {
      console.error(error);
      Alert.alert("Erro:", "Error in fetch markets");
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchMarkets();
  }, [category]);

  return (
    <View style={{ flex: 1 }}>
      <Categories
        data={categories}
        onSelect={setCategory}
        selected={category}
      />

      <Places data={markets} />
    </View>
  );
}
