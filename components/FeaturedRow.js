import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard';

const FeaturedRow = ({id, title, description}) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB"/>
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
            paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* RestaurantCards */}
        <RestaurantCard
            id={123}
            imgUrl="https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg"
            title="Pantate"
            rating={2.3}
            genre="Lebanese"
            address="123 Main St"
            short_description="This is a test description"
            dishes={[]}
            long={20}
            lat={0}
        />
        <RestaurantCard
            id={123}
            imgUrl="https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg"
            title="Pantate"
            rating={2.3}
            genre="Lebanese"
            address="123 Main St"
            short_description="This is a test description"
            dishes={[]}
            long={20}
            lat={0}
        />
        <RestaurantCard
            id={123}
            imgUrl="https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg"
            title="Pantate"
            rating={2.3}
            genre="Lebanese"
            address="123 Main St"
            short_description="This is a test description"
            dishes={[]}
            long={20}
            lat={0}
        />
        <RestaurantCard
            id={123}
            imgUrl="https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg"
            title="Pantate"
            rating={2.3}
            genre="Lebanese"
            address="123 Main St"
            short_description="This is a test description"
            dishes={[]}
            long={20}
            lat={0}
        />

      </ScrollView>
    </View>
  );
};

export default FeaturedRow;