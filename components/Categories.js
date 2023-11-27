import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* CategoryCard */}
      <CategoryCard
        imgUrl="https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg"
        title="Testing 1"
      />
      <CategoryCard
        imgUrl="https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg"
        title="Testing 2"
      />
      <CategoryCard
        imgUrl="https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg"
        title="Testing 3"
      />
      <CategoryCard
        imgUrl="https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg"
        title="Testing 1"
      />
      <CategoryCard
        imgUrl="https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg"
        title="Testing 1"
      />
      <CategoryCard
        imgUrl="https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg"
        title="Testing 1"
      />
      <CategoryCard
        imgUrl="https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg"
        title="Testing 1"
      />
    </ScrollView>
  );
};

export default Categories;
