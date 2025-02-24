import React from "react";
import { Text, Card, Button } from "@rneui/themed";

export default function MovieCard({
  icon,
  image,
  title,
  releaseDate,
  buttonTitle,
  onCardButtonPress,
}) {
  return (
    <Card>
      <Card.Image source={{ uri: `https://image.tmdb.org/t/p/w400${image}` }} />
      <Card.Title numberOfLines={1} ellipsizeMode="tail">
        {title}
      </Card.Title>
      <Text>{releaseDate}</Text>
      <Button icon={icon} title={buttonTitle} onPress={onCardButtonPress} />
    </Card>
  );
}
