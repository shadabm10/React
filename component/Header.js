import React from 'react';
import ReactNative, { StyleSheet,color } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

//import * as CONST from '../../util/constants';

export default ({title, hasBackButton, goBack}) => {
   return (
    <ReactNative.View style={styles.headerContainer}>
        {hasBackButton && <ReactNative.TouchableOpacity onPress={goBack} style={styles.goBackButton}>
            
        </ReactNative.TouchableOpacity>}
        <ReactNative.View style={styles.textView}>
            <ReactNative.Text style={styles.titleText}>{title}</ReactNative.Text>
        </ReactNative.View>
        {hasBackButton && <ReactNative.View style={styles.goBackButton}/>}
    </ReactNative.View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    height: 54,
    backgroundColor: '#00FA9A',
    paddingHorizontal: 16
  },
//   goBackButton: {
//     paddingLeft: 0,
//     paddingRight: 5,
//     width: 40,
//     paddingVertical: 5,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
  textView: {
    flex:1,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 24,
    color: '#fff',
        
    fontWeight: 'bold',
    justifyContent: "center",
    alignItems: 'center',
    
  },
})