import { View, Image, Text, Button } from "react-native";

export default function MovieCard({
  image,
  title,
  releaseDate,
  buttonTitle,
  onCardButtonPress,
}) {
  return (
    <View>
      <View>
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w300${image}` }}
          style={{ width: 200, height: 300 }}
        />
      </View>
      <Text>{title}</Text>
      <Text>{releaseDate}</Text>
      <Button title={buttonTitle} onPress={onCardButtonPress} />
    </View>
  );
}
