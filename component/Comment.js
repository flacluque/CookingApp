import { Text, View } from "../utils/Theme";
import { Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { PreloadComment } from "../constant/PreloadComment";

const styles = StyleSheet.create({
  header: {
    height: 168,
    backgroundColor: "#5DB075",
  },
  commentText: {
    fontSize: 30,
    fontWeight: "bold",
    paddingTop: 86,
    paddingLeft: 15,
  },
  flexC: {
    flexDirection: "column",
    flex: 1,
  },
  flexR: {
    flexDirection: "row",
  },
  picture: {
    height: 40,
    width: 40,
    backgroundColor: "grey",
    borderRadius: 20,
  },
  mt: {
    marginTop: 16,
  },
  ml: {
    marginLeft: 16,
  },
  mr: {
    marginRight: 16,
  },
  defaultText: {
    fontSize: 16,
  },
  stretch: {
    alignItems: "stretch",
  },
  mh: {
    marginTop: 16,
    marginHorizontal: 16,
  },
  dividerLine: {
    width: 355,
    height: 1,
    marginTop: 32,
    backgroundColor: "#595959",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.commentText}>Commentaires</Text>
    </View>
  );
}

function CommentFactory({ comments }) {
  return comments.map((comment) => (
    <CommentTile
      key={comment.id}
      user={comment.user}
      date={comment.date}
      uri={comment.uri}
    />
  ));
}

function CommentTile({ user, date, uri }) {
  return (
    <>
      <View style={{ marginBottom: 16 }}>
        <View
          style={[
            styles.flexC,
            styles.mt,
            styles.ml,
            styles.mr,
            styles.stretch,
          ]}
        >
          <View style={[styles.flexR, { alignItems: "center" }]}>
            <View style={[styles.picture, styles.mr]} />
            <Text style={styles.defaultText}>{user}</Text>
            <Text style={[styles.defaultText, { marginLeft: "auto" }]}>
              {date}
            </Text>
          </View>
          <View style={styles.mh}>
            <View
              style={{
                backgroundColor: "transparent",
                width: "100%",
                height: 200,
                borderRadius: 8,
              }}
            >
              <Image
                style={{
                  backgroundColor: "transparent",
                  width: "100%",
                  height: "100%",
                  borderRadius: 8,
                  resizeMode: "contain",
                }}
                source={{ uri }}
              />
            </View>
          </View>
        </View>
        <View style={styles.dividerLine} />
      </View>
    </>
  );
}

function AddImageButton({ navigation }) {
  return (
    <TouchableOpacity
      style={{ marginTop: 30 }}
      onPress={() => navigation.navigate("Camera")}
    >
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            backgroundColor: "#5DB075",
            paddingHorizontal: 32,
            paddingVertical: 16,
          }}
        >
          <Text style={{ fontSize: 18 }}>Ajouter une photo</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export function Comment({ navigation, route }) {
  const recipeId = route.params.recipeId;
  const preloadedComment = PreloadComment.filter(
    (f) => f.recipeId === recipeId
  );

  const [comments, setComments] = useState(preloadedComment);
  useEffect(() => {
    let data = route.params?.data;
    if (data) {
      setComments([
        ...comments,
        {
          recipeId,
          uri: data.uri,
          user: "User1",
          date: "8m ago",
          id: data.uri.split("-")[data.uri.split("-").length - 1],
        },
      ]);
    }
  }, [route.params?.data]);

  return (
    <ScrollView>
      <View style={[styles.flexC, styles.stretch, { paddingBottom: 30 }]}>
        <Header />
        <CommentFactory comments={comments} />
        <AddImageButton navigation={navigation} />
      </View>
    </ScrollView>
  );
}
