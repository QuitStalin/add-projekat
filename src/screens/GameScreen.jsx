import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Button,
} from "react-native";
import React, { useState, useEffect } from "react";

const GameScreen = () => {
  const gridSize = 20; // Define the size of the grid

  // Move generateFood function definition here
  const generateFood = () => ({
    x: Math.floor(Math.random() * gridSize),
    y: Math.floor(Math.random() * gridSize),
  });

  const [snake, setSnake] = useState([{ x: 5, y: 5 }]);
  const [food, setFood] = useState(generateFood()); // Now it can be used here
  const [direction, setDirection] = useState("right");

  useEffect(() => {
    const intervalId = setInterval(() => {
      moveSnake();
      checkCollision();
    }, 150);

    return () => clearInterval(intervalId);
  }, [snake, direction]);

  const moveSnake = () => {
    let newSnake = [...snake];
    let newHead = { x: newSnake[0].x, y: newSnake[0].y };

    switch (direction) {
      case "up":
        newHead.y -= 1;
        break;
      case "down":
        newHead.y += 1;
        break;
      case "left":
        newHead.x -= 1;
        break;
      case "right":
        newHead.x += 1;
        break;
    }

    // Check if snake eats food
    if (newHead.x === food.x && newHead.y === food.y) {
      setFood(generateFood());
    } else {
      newSnake.pop(); // Remove the last segment of the snake
    }

    newSnake.unshift(newHead);
    setSnake(newSnake);
  };

  const checkCollision = () => {
    if (
      snake[0].x < 0 ||
      snake[0].x >= gridSize ||
      snake[0].y < 0 ||
      snake[0].y >= gridSize
    ) {
      alert("Game Over");
      setSnake([{ x: 5, y: 5 }]); // Reset snake
      setDirection("right"); // Reset direction
    }
  };

  const handleDirectionChange = (newDirection) => {
    setDirection(newDirection);
  };

  return (
    <TouchableWithoutFeedback onPress={() => {}}>
      <View style={styles.container}>
        <Text>Snake Game</Text>

        {/* Render the game area */}
        <View style={styles.gameArea}>
          {/* Render snake segments */}
          {snake.map((segment, index) => (
            <View
              key={index}
              style={[
                styles.snakeSegment,
                {
                  left: segment.x * 20, // Adjust position based on segment's x
                  top: segment.y * 20, // Adjust position based on segment's y
                },
              ]}
            />
          ))}

          {/* Render food */}
          <View
            style={[
              styles.food,
              {
                left: food.x * 20, // Adjust position based on food's x
                top: food.y * 20, // Adjust position based on food's y
              },
            ]}
          />
        </View>

        {/* Control buttons */}
        <View style={styles.controls}>
          <Button title="Up" onPress={() => handleDirectionChange("up")} />
          <View style={styles.horizontalButtons}>
            <Button
              title="Left"
              onPress={() => handleDirectionChange("left")}
            />
            <Button
              title="Right"
              onPress={() => handleDirectionChange("right")}
            />
          </View>
          <Button title="Down" onPress={() => handleDirectionChange("down")} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  gameArea: {
    position: "relative",
    width: 400, // Width of the game area
    height: 400, // Height of the game area
    backgroundColor: "#f0f0f0",
    overflow: "hidden",
  },
  snakeSegment: {
    position: "absolute",
    width: 20,
    height: 20,
    backgroundColor: "green",
  },
  food: {
    position: "absolute",
    width: 20,
    height: 20,
    backgroundColor: "red",
  },
  controls: {
    marginTop: 20,
    alignItems: "center",
  },
  horizontalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 200,
  },
});
