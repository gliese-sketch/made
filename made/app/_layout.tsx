import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

export default function () {
  return (
    <WebView
      source={{ uri: "https://made.phleebs.tech/" }}
      style={{ flex: 1 }}
    />
  );
}
