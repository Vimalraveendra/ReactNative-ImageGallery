import React from 'react';

import {SafeAreaView, Text, StyleSheet, FlatList} from 'react-native';

import CardImage from './Components/CardImage/CardImage';

class App extends React.Component {
  state = {
    dataList: [],
  };
  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    try {
      const url = 'https://randomuser.me/api/?&nat=gb&results=40';
      const response = await fetch(url);
      const data = await response.json();
      this.setState({dataList: data.results});
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Image Gallery</Text>
        <FlatList
          numColumns={4}
          data={this.state.dataList}
          keyExtractor={(item) => item.login.uuid}
          renderItem={({item}) => <CardImage item={item} />}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  title: {
    fontSize: 23,
    fontWeight: '700',
    marginVertical: 10,
    alignSelf: 'center',
  },
});

export default App;
