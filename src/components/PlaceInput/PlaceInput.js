import React, { Component } from "react";
import { TextInput, View, Button, StyleSheet } from "react-native";

class PlaceInput extends Component {
  state = {
    placeName: ""
  };
  placeNameChangeHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim === "") {
      return;
    }

    this.props.onPlaceAdded(this.state.placeName);
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="An awesome place"
          value={this.state.placeName}
          onChangeText={this.placeNameChangeHandler}
          style={StyleSheet.placeInput}
        />
        <Button
          title="Add"
          style={styles.placeButton}
          onPress={this.placeSubmitHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});

export default PlaceInput;
