import React, { Component } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableHighlight
} from "react-native";
import ListView from 'deprecated-react-native-listview';
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
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      loading: true,
      dataSource: ds.cloneWithRows(menuItems),
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

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    const datasource = ds.cloneWithRows(json["data"])
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
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.setState(() => ({ loading: false }))
    //Alert.alert('Loading failed :' + this.state.loading);
  }

  _onPressRow = (rowID, rowData, action) => {
    if(rowID == 1) {
      this.props.navigation.navigate('Home')
    } else if(rowID == 2) {
      this.props.navigation.navigate('Home')
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
  <ListView
    contentContainerStyle={{flexDirection:'row', flexWrap: 'wrap',alignItems: 'center', justifyContent: 'center',}}
    style={tableStyles.container}
    dataSource={dataSource}
    renderRow={data => <CollectionViewItem data = {data} onSelectRow = {onSelectRow} />}
    //renderSeparator={(sectionId, rowId) => <View key={rowId} style={tableStyles.separator} />}
    //renderHeader={() => <Header headerData = {headerData} />}
  />
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
      <View style={rowStyles.container}>
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
  
const rowStyles = StyleSheet.create({
  contentView:{
    flex: 0,
    alignItems: "center",
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
    width: 150,
    borderRadius: 0,
    justifyContent: 'flex-start',
  },
  icon: {
    justifyContent: 'flex-end',
    margin:4,
    marginRight:4,
    color:'#229E85',
    overflow: 'hidden'
  },
});
