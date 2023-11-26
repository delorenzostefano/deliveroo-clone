import { View, Text, SafeAreaView, Image, TextInput } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { UserIcon, ChevronDownIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon,} from "react-native-heroicons/outline"

const HomeScreen = () => {
   const navigation = useNavigation();

   useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false,
    });
   }, []);

  return (
    <SafeAreaView className='bg-white'pt-5>
      <Text className="text-red-500">
        {/* Header */}
        <View className='flex-row pb-3 iterms-center mx-4 space-x-2'>
            <Image
                source= {{
                    uri: 'https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg',
                }}
                className="h-7 w-7 bg-gray-300 p-4 rounded-full"
            />

            <View className="flex-1">
                <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
                <Text className='font-bold text-xl'>
                    Current Location
                    <ChevronDownIcon size={20} color="#00CCBB"/>
                </Text>
            </View>
            <UserIcon size={35} color="#00CCBB"/>
        </View>
        <View className="flex-row items-center space-x-2 pb-2 mx-4">
            <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
                <MagnifyingGlassIcon color="gray" size={20}/>
                <TextInput placeholder='Restaurants and cuisines' keyboardType='default'/>
            </View>

            <AdjustmentsVerticalIcon color="#00CCBB" />
        </View>
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;