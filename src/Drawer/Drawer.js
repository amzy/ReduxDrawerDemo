import React, { Component } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableHighlight
} from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";
import Icon from 'react-native-vector-icons/Ionicons';

const headerItem = {
  thumb: "lighthouse_lindau",
  index: 1,
  name: "Amzad Khan",
  email: "amzy21@gmail.com"
};
const menuItems = [
  {
    thumb: "lighthouse_lindau",
    index: 1,
    label: "Home"
  },
  {
    thumb: "lighthouse_fanad",
    index: 2,
    label: "Open Modal"
  },
  {
    thumb: "lighthouse_augustine",
    index: 3,
    label: "Close Me"
  },
  {
    thumb: "lighthouse_peggys",
    index: 4,
    label: "Favorites"
  },
  {
    thumb: "lighthouse_hercules",
    index: 5,
    label: "Setting"
  },
  {
    thumb: "lighthouse_bass",
    index: 6,
    label: "Logout"
  }
];

export default class Drawer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: menuItems,
      user: headerItem,
    };
  }

  onPressRow = (rowID, rowData) => {
    if(rowID == 1) {
      this.props.navigation.navigate('Home')
    } else if(rowID == 2) {
      this.props.navigation.navigate('Profile')
    }else if (rowID == 5){
      this.props.navigation.navigate('Settings')
    } else if (rowID == 6){
      this.props.navigation.navigate('Login')
    } else if (rowID == 4){
      this.props.navigation.navigate('Favorite')
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex:1, backgroundColor:'#229E85'}}>
          <FlatTable dataSource={this.state.menu} headerData={this.state.user} onSelectRow={this.onPressRow} />
      </View>      
    );

    /*
    rowData.isSelect = !rowData.isSelect;
    var dataClone = this.state.data;
    dataClone[rowID] = rowData;
    this.setState({
      data: dataClone
    });
    */
  };
}

const FlatTable = ({dataSource, headerData, onSelectRow}) => (
  <View style={tableStyles.container}>
      <FlatList
        data={dataSource}
        renderItem={({ item }) => (
          <Row data = {item} onSelectRow = {onSelectRow} />
        )}
        keyExtractor={item => item.index}
        //ItemSeparatorComponent={ <Separator/> }
        ListHeaderComponent={ <Header headerData = {headerData}/> }
        //ListFooterComponent={this.renderFooter}
        //onRefresh={this.handleRefresh}
        //refreshing={this.state.refreshing}
        //onEndReached={this.handleLoadMore}
        onEndReachedThreshold={50}
      />
    </View>
);

/*{`${props.name.first} ${props.name.last}`}*/
const Row = ({data, onSelectRow}) => (
  <TouchableHighlight
    style={rowStyles.button}
    onPress={() => onSelectRow(data.index, data)}
  >
    <View style={rowStyles.container}>
      <View style={{width:20, height:20, borderRadius:10, backgroundColor:'#229E85'}}></View>
      <Text style={rowStyles.text}>{`${data.label}`}</Text>
    </View>
  </TouchableHighlight>
);

/*<Image source={{ uri: props.thumb }} style={headerStyles.photo} /> */
const Header = ({headerData}) => (
  <View style={headerStyles.container}>
    <View style={{width:80, height:80, borderRadius:40, backgroundColor:'#229E85'}}></View>
    <Text style={headerStyles.sectionTitle}>{`${headerData.name}`}</Text>
  </View>
);

// const Separator = () => {
//   <View
//         style={{
//           height: 1,
//           width: "86%",
//           backgroundColor: "#CED0CE",
//           marginLeft: "14%"
//         }}
//       />
// }

const tableStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#EAEAEA"
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#8E8E8E"
  }
});

const rowStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    flexDirection: "row",
    alignItems: "center"
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 12
  },
  text: {
    marginLeft: 12,
    fontSize: 14
  },
  photo: {
    height: 20,
    width: 20,
    borderRadius: 10
  }
});


//<Image source={{ uri: props.thumb }} style={rowStyles.photo} />
const headerStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    //justifyContent: "center",
    backgroundColor: "#EAEAEA"
  },
  sectionTitle: {
    fontSize: 16,
    marginLeft: 12,
    fontSize: 14
  },
  photo: {
    height: 120,
    width: 120,
    borderRadius: 20
  }
});



/*
const ContactCard = (props)=>{
  return (
    <View style={[styles.container, {alignItems:'stretch'}]}>
      <View style={{margin:10, shadowRadius:10,shadowColor:'#175E4C', shadowOffset:{width:2, height:6},shadowOpacity:0.7, backgroundColor:'#2ABB9B', padding:20}}>
        <View style={{flexDirection:'row'}}>
          <View style={{width:80, height:80, borderRadius:40, backgroundColor:'#229E85'}}>
          </View>
          <View style={{marginLeft:20, paddingTop:10, alignItems:'flex-start'}}>
            <Text style={styles.text}>Chuck Norris</Text>
            <Text style={styles.text}>CEO</Text>
          </View>
        </View>
        <View style={{marginTop:20}}>
          <Text style={{color:'white'}}><Icon name="ios-call-outline" size={16}/> 481-5162342</Text>
          <Text style={{color:'white'}}><Icon name="ios-send-outline" size={16}/> chuck@norrisfamily.arpa</Text>
        </View>
      </View>
    </View>
  )
}
*/