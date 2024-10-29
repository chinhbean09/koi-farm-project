import React from "react";
import { ScrollView, View, Text } from "react-native";
import ArtToolsList from "@/components/products-list";
import BrandsList from "@/components/brands-list";
import SearchTool from "@/components/search-tool";
import { TProductResponse } from "@/schema/product.schema";
import productAPI from "@/apis/product";
import { useTools } from "@/hooks/useTools";
import { router, useLocalSearchParams, useRouter } from "expo-router";
import Loading from "@/components/Loading";
import { useSession } from "@/utils/ctx";

export default function HomeScreen() {
    const { signOut } = useSession();
    return (
        <ScrollView
            className="flex-1"
            contentContainerStyle={{ paddingBottom: 20 }}
        >
            <View>
                <Text> this is homepage</Text>
                <Text
        onPress={() => {
            signOut();
          // Navigate after signing in. You may want to tweak this to ensure sign-in is
          // successful before navigating.
          router.replace('/sign-in');
        }}>
        outaaaaaaaaaaa
      </Text>
            </View>
        </ScrollView>
    );
}
