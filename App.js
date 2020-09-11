import React from 'react';

import {SafeAreaView, Text, StyleSheet, FlatList} from 'react-native';

class App extends React.Component {
  state = {
    dataList: [],
  };
  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    try {
      const url = 'https://randomuser.me/api/?&nat=gb&results=30';
      const response = await fetch(url);
      const data = await response.json();
      this.setState({dataList: data.results});
    } catch (error) {
      console.log(error);
    }
  };

  renderItem = {};
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Image Gallery</Text>
        <FlatList
          data={this.state.dataList}
          keyExtractor={(item) => item.login.uuid}
          renderItem={this.renderItem}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'grey',
  },
  title: {
    fontSize: 23,
    fontWeight: '700',
    marginTop: 10,
  },
});

export default App;
