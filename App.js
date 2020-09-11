import React from 'react';

import {
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
} from 'react-native';

import CardImage from './Components/CardImage/CardImage';

class App extends React.Component {
  state = {
    dataList: [],
    orientation: '',
  };
  componentDidMount() {
    this.fetchData();
    Dimensions.addEventListener('change', this.getOrientation);
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

  getOrientation = () => {
    const {width, height} = Dimensions.get('window');
    if (width < height) {
      this.setState({orientation: 'portrait'});
    } else {
      this.setState({orientation: 'landscape'});
    }
  };

  render() {
    const {dataList, orientation} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Image Gallery</Text>
        <FlatList
          numColumns={4}
          data={dataList}
          keyExtractor={(item) => item.login.uuid}
          renderItem={({item}) => (
            <CardImage item={item} orientation={orientation} />
          )}
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
    fontWeight: '500',
    marginVertical: 10,
    alignSelf: 'center',
    fontFamily: 'Monoton-Regular',
  },
});

export default App;
