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
    <Card containerStyle={{ width: 250, marginBottom: 20 }}>
      <Card.Image
        source={{ uri: `https://image.tmdb.org/t/p/w300${image}` }}
        style={{ width: "100%", height: 300 }}
      />
      <Card.Title>{title}</Card.Title>
      <Card.Divider />
      <Text style={{ marginBottom: 10 }}>Release Date: {releaseDate}</Text>
      <Button icon={icon} title={buttonTitle} onPress={onCardButtonPress} />
    </Card>
  );
}
