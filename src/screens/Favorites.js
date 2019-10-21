import React, { Component } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  FlatList,
  TouchableHighlight
} from "react-native";
import ProgressSpinner from '../components/ProgressSpinner';
import API, { APIState, APIMethod, APIPath } from "../API/API";
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

export default class FavoritesScreen extends Component {
  constructor(props) {
    super(props);
    this.getPosts = this.getPosts.bind(this)
    this._validResponse = this._validResponse.bind(this)
    this._errorResponse = this._errorResponse.bind(this)
    this._onPressRow = this._onPressRow.bind(this)
    
    this.state = {
      loading: true,
      dataSource: []
    };
  }

  componentDidMount(){
    this.getPosts()
  }
  async getPosts() {

    //Alert.alert('Loading :' + this.state.loading);
    API.requst(APIMethod.get, APIPath.users, {}, this._validResponse, this._errorResponse)
  }

  _validResponse = (json) => {

    const datasource = json.data //ds.cloneWithRows(json["data"])
    //this.setState(() => ({ loading: false }))
    this.setState({
      loading: false,
      dataSource: datasource
    })
/*
    Alert.alert("API Response", JSON.stringify(json["data"]), [
      { text: "OK", onPress: () => { 
        this.setState({
          loading: false,
          dataSource: datasource
        })}
       }    
    ])
    */

    //Alert.alert('Json :' + JSON.stringify(json));
    //Alert.alert('Loading Success :' + this.state.loading);
  }
  _errorResponse = (error) => {
    //Alert.alert('Error :' + error);

    this.setState(() => ({ loading: false }))
    //Alert.alert('Loading failed :' + this.state.loading);
  }

  _onPressRow = (rowID, rowData, action) => {
    if(rowID == 1) {
      
    } else if(rowID == 2) {
      
    }else if (rowID == 5){
      
    } else if (rowID == 6){
      
    } else if (rowID == 4){
      
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex:1, backgroundColor:'#229E85'}}>
          <ProgressSpinner loading = {this.state.loading}/> 
          <CollectionView dataSource={this.state.dataSource} onSelectRow={this._onPressRow} />
      </View>      
    );
  };
}

const menuItems = [
  {
    "id": 4,
    "first_name": "Eve",
    "last_name": "Holt",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
},
];


const CollectionView = ({dataSource, headerData, onSelectRow}) => (
  <View style={tableStyles.container}>
      <FlatList
        data={dataSource}
        renderItem={({ item }) => (
          <CollectionViewItem data = {item} onSelectRow = {onSelectRow} />
        )}
        numColumns={2}
        keyExtractor={item => item.label}
        //ItemSeparatorComponent={ <Separator/> }
        //ListHeaderComponent={ <Header headerData = {headerData}/> }
        //ListFooterComponent={this.renderFooter}
        //onRefresh={this.handleRefresh}
        //refreshing={this.state.refreshing}
        //onEndReached={this.handleLoadMore}
        onEndReachedThreshold={50}
      />
    </View>
);



/*{`${props.name.first} ${props.name.last}`}*/
const CollectionViewItem = ({data, onSelectRow}) => (
  <View style={rowStyles.contentView}>
  <TouchableHighlight
    style={rowStyles.container}
    onPress={() => onSelectRow(data.index, data, "Select")}
  >
    <View style={rowStyles.container}>
      <Image source = {{uri:data.avatar}} style={rowStyles.photo}/>
      <View style={rowStyles.icon}>
      <Text style={rowStyles.text}>{`${data.first_name + " " + data.last_name}`}</Text>
      </View>
      <MaterialIcon name="more-vert" size={22} style={rowStyles.icon}/>
    </View>
  </TouchableHighlight>
  </View>
);
  

const tableStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor: "#EAEAEA",
   
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#8E8E8E"
  }
});

//flexWrap: 'wrap',alignItems: 'center', justifyContent: 'center'
  //flex: 1, flexDirection: 'column', margin: 1 
const rowStyles = StyleSheet.create({
  contentView:{
    flex: 1,
    flexDirection: 'column',
    //alignItems: "center",
    margin:4,
    marginTop: 10,
    shadowRadius:2,
    borderColor: '#ddd',
    borderRadius:2,
    shadowColor:'black', 
    elevation: 1,
    shadowOffset:{width:0, height:2},
    shadowOpacity:0.8,
    backgroundColor: "#EAEAEA",
    width: 150,
  },
  container: {
    flex: 0,
    flexDirection: "column",
    backgroundColor:'#FFFF',
  },
  button: {
    backgroundColor: '#DDDDDD',
    flex:1,
  },
  text: {
    fontSize: 12,
    color:'black',
    overflow: 'hidden'
  },
  photo: {
    height: 150,
    borderRadius: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    justifyContent: 'flex-end',
    margin:4,
    color:'#229E85',
    overflow: 'hidden'
  },
});
