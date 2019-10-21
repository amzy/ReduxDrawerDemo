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
import { SearchBar } from 'react-native-elements';
import ProgressSpinner from '../components/ProgressSpinner'
import API, { APIState, APIMethod, APIPath } from "../API/API";
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.getPosts = this.getPosts.bind(this)
    this._validResponse = this._validResponse.bind(this)
    this._errorResponse = this._errorResponse.bind(this)
    this._onPressRow = this._onPressRow.bind(this)

    this.state = {
      loading: true,
      dataSource: []//ds.cloneWithRows(menuItems),
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
    const ds = []
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
          <FlatTable dataSource={this.state.dataSource} onSelectRow={this._onPressRow} />
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

const menuItems = [
  {
    "id": 4,
    "first_name": "Eve",
    "last_name": "Holt",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
},
];


const FlatTable = ({dataSource, headerData, onSelectRow}) => (
  <View style={tableStyles.container}>
      <FlatList
        data={dataSource}
        renderItem={({ item }) => (
          <Row data = {item} onSelectRow = {onSelectRow} />
        )}
        keyExtractor={item => item.label}
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

const Header = ({headerData}) => (
  <SearchBar placeholder="Type Here..." lightTheme  />
);


/*{`${props.name.first} ${props.name.last}`}*/
const Row = ({data, onSelectRow}) => (
  <View style={rowStyles.contentView}>
  <TouchableHighlight
    style={rowStyles.container}
    onPress={() => onSelectRow(data.index, data, "Select")}
  >
    <View style={rowStyles.container}>
      <Image source = {{uri:data.avatar}} style={{width:80, height:80, borderRadius:0}}/>
      <View style={rowStyles.container}>
      <Text style={rowStyles.text}>{`${data.first_name + " " + data.last_name}`}</Text>
      </View>
      <MaterialIcon name="more-vert" size={22} style={rowStyles.icon}/>
    </View>
  </TouchableHighlight>
  <View style={rowStyles.marginPad}/>
  <RowToolbar data = {data} onSelectButton = {onSelectRow}/>
  </View>
);


/*{`${props.name.first} ${props.name.last}`}*/
const RowToolbar = ({data, onSelectButton}) => (
  <View style={rowToolbarStyle.contentView}>
  <TouchableHighlight
    style={rowToolbarStyle.button}
    onPress={() => onSelectRow(0, data)}
  >
  <Text style={rowToolbarStyle.text}> <Icon name="ios-heart" size={22} style={rowToolbarStyle.icon}/>   {"Like"}</Text>
  </TouchableHighlight>
  <TouchableHighlight
    style={rowToolbarStyle.borderButton}
    onPress={() => onSelectRow(1, data)}
  >
  <Text style={rowToolbarStyle.text}><Icon name="ios-chatbubbles" size={22} style={rowToolbarStyle.icon}/>   {"Comment"}</Text>
  </TouchableHighlight>
  <TouchableHighlight
    style={rowToolbarStyle.button}
    onPress={() => onSelectRow(2, data)}
  >
  <Text style={rowToolbarStyle.text}><Icon name="ios-share" size={22} style={rowToolbarStyle.icon}/>   {"Share"}</Text>
  </TouchableHighlight>
  </View>
);

const tableStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor: "#EAEAEA"
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#8E8E8E"
  }
});
  
const rowStyles = StyleSheet.create({
  contentView:{
    flex: 1,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    shadowRadius:2,
    borderColor: '#ddd',
    borderRadius:2,
    shadowColor:'black', 
    elevation: 1,
    shadowOffset:{width:0, height:2},
    shadowOpacity:0.8,
    backgroundColor: "#EAEAEA",

  },
  container: {
    flex: 1,
    padding: 0,
    flexDirection: "row",
    //alignItems: "center",
    margin:0,
    backgroundColor:'#FFFF',
  },
  marginPad: {
    flex: 0,
    padding: 4,
    flexDirection: "row",
    alignItems: "center",
    margin:0,
    backgroundColor:'#FFFF',
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 6,
    flex:1,
  },
  text: {
    padding:4,
    margin:4,
    fontSize: 18,
    color:'black',
    marginLeft: 5,
    overflow: 'hidden'
  },
  photo: {
    height: 80,
    width: 80,
    borderRadius: 0,
    justifyContent: 'flex-start',
  },
  icon: {
    justifyContent: 'flex-end',
    padding:0,
    margin:4,
    marginRight:10,
    color:'#229E85',
    overflow: 'hidden'
  },
});
const rowToolbarStyle = StyleSheet.create({
  contentView:{
    flex: 1,
    padding: 0,
    margin:0,
    borderBottomWidth:3,
    borderBottomColor:'#229E85',
    borderTopWidth: 1,
    borderTopColor: 'black',
    flexDirection: "row",
    alignItems: "center",
  },
  borderButton:{
    flex:1/3,
    borderLeftColor: 'black',
    borderLeftWidth: 1,
    borderRightColor: 'black',
    borderRightWidth: 1,
    backgroundColor: 'white',
    // borderRadius: 10,
    // borderBottomLeftRadius: 10,
    // borderBottomRightRadius: 10,
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
  },
  button:{
    flex:1/3,
    backgroundColor: 'white',
  },
  text: {
    padding:0,
    margin:4,
    fontSize: 14,
    color:'black',
    overflow: 'hidden',
    textAlign:'center'
  },
  icon: {
      padding:4,
      margin:4,
      marginRight:4,
      color:'#229E85',
      overflow: 'hidden'
  }
})
// <Image source={Image_Http_URL} style = {{height: 200, resizeMode : 'stretch', margin: 5 }} />
//<Image source={{ uri: props.thumb }} style={rowStyles.photo} />



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