
import React, {useState,useContext} from 'react';
import { 
    View,
    TextInput,
    StyleSheet, 
    Button,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    Alert} from 'react-native';
import axios from 'axios';
import  {AuthContext} from "../utils/Context"; 
import { MaterialCommunityIcons as Icon,Ionicons } from '@expo/vector-icons';

 function Signup({navigation}){

    const [username, setusername]   = useState('')
    const [usernameError,setusernameError] = useState('')

    const [email, setemail]          = useState('')
    const [emailError,setemailError] = useState('')

    const [password1, setpassword1] = useState('')
    const [pass1Error,setpass1Error] = useState('')

    const [password2, setpassword2] = useState('')
    const [pass2Error,setpass2Error] = useState('')

    const [iconName,seticonName] = useState('eye-off')
    const [secureEntry,setsecureEntry] = useState(true)

    const { signUp } = useContext(AuthContext);
    
    const usernameHandler = (text) => {
        setusername(text)
    }
    
    const usernameValidator = () => {
        if (username === ''){
            setusernameError(' < field can not be empty >')
        }
        else{
            setusernameError('')
        }
    }

    const emailHandler = (text) => {
        setemail(text)
    }
    
    const emailValidator = () => {
        if (username === ''){
            setemailError(' < field can not be empty >')
        }
        else{
            setemailError('')
        }
    }

    const password1Handler = (text) => {
        setPassword1(text)
    }
     
    const password1Validator = () => {
        if (password1 === ''){
            setpass1Error(' < Password field can not be empty >')
        }
        else{
            setpass1Error('')
        }
    }

    const password2Handler = (text) => {
        setPassword2(text)
    }
     
    const password2Validator = () => {
        if (password2 === ''){
            setpass2Error(' < Password field can not be empty >')
        }
        else{
            setpass2Error('')
        }
    }

    const IconHandler = () =>{
        if (secureEntry){
            seticonName('eye')
        }else{
            seticonName('eye-off')
        }

        setsecureEntry(!secureEntry)
    }
    

    const accountHandler = () => {
        if (password1 === password2){
            Alert.alert('Successfully Registered','Now login to enter',
            [{ text: 'OKAY',style: 'destructive',onPress: navigation.navigate('SignIn')}])
            return
            
        }
        else {
            Alert.alert('Retype Password','Password do not match',
            [{ text: 'okay',style: 'destructive',onPress: resetHandler()}])
            return
        }
    }

    const resetHandler = () => {
        setusername('')
        setusernameError('')
        setemail('')
        setemailError('')
        setpassword1('')
        setpass1Error('')
        setpassword2('')
        setpass2Error('')
    }
    // const submit = () => {
    //     console.log('post')
    //     console.log(username)
    //     console.log(email)
    //     console.log(password1)
    //     console.log(password2)

    //     return axios.post('http://shop121.herokuapp.com/auth/register/',{

    //         username: username,
    //         email: email,
    //         password: password1,
    //         confirm_password: password2

    //     }).then(res => console.log(res.data))
        
    // }
    

    return (
    
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <View style={{flex:0.5,marginTop:50}}>
                        <Image source={require('../src/images/register.png')}/>
                    </View>
                    <View style={styles.container}>
                        <View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{marginLeft:12}}>Username</Text>
                                <Text style={{color:'red',marginLeft:57}}>{usernameError}</Text>
                            </View>
                            <TextInput 
                                style={styles.input} 
                                placeholder='  Enter username'
                                onChangeText={usernameHandler}
                                value={username}
                                onBlur={()=>{usernameValidator()}}
                                />
                        </View>
                        
                        <View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{marginLeft:12}}>Email</Text>
                                <Text style={{color:'red',marginLeft:80}}>{emailError}</Text>
                            </View>
                            <TextInput 
                                style={styles.input} 
                                placeholder='  abc@example.com'
                                onChangeText={emailHandler}
                                value={email}
                                onBlur={()=>{emailValidator()}}
                                />
                        </View>
                        <View>

                            <View style={{flexDirection:'row',marginTop:0}}>
                                <Text style={{marginLeft:1}}>Password</Text>
                                <Text style={{color:'red',marginLeft:20}}>{pass1Error}</Text>
                            </View>
                            <View 
                                style={{borderBottomWidth:0.3,
                                    width:260,
                                    marginTop:25,
                                    flexDirection:'row',
                                    justifyContent:'space-between'}}
                                >
                                <TextInput 
                                    secureTextEntry={secureEntry}
                                    placeholder='  Enter Your Password...'
                                    onChangeText={password1Handler}
                                    value={password1}
                                    onBlur={()=>{password1Validator()}}
                                />

                                <TouchableOpacity 
                                    onPress={()=>IconHandler()}>
                                    <Icon 
                                    name={iconName} size={20}
                                    />
                                </TouchableOpacity>
                                
                            </View>
                        </View>
                          
                        <View style={{marginTop:10}}>
                            <View style={{flexDirection:'row',marginTop:0}}>
                                <Text style={{marginLeft:1}}>Password2</Text>
                                <Text style={{color:'red',marginLeft:20}}>{pass2Error}</Text>
                            </View>
                            <View 
                                style={{borderBottomWidth:0.3,
                                        width:260,
                                        marginTop:25,
                                        flexDirection:'row',
                                        justifyContent:'space-between'}}
                                >
                                <TextInput 
                                    secureTextEntry={secureEntry}
                                    placeholder='  Enter Your Password...'
                                    onChangeText={password2Handler}
                                    value={password2}
                                    onBlur={()=>{password2Validator()}}
                                />
                                <TouchableOpacity 
                                    onPress={()=>IconHandler()}>
                                    <Icon 
                                    name={iconName} size={20}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <TouchableOpacity 
                           style={styles.button_1}
                           onPress={()=>accountHandler()}
                           >
                           <Text style={{color:'#fff'}}>CREATE ACCOUNT</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.button_2}>
                        <Text style={{fontSize:20,}}>Already Registered?</Text>
                        <TouchableOpacity
                            onPress={()=>navigation.navigate('SignIn')}>
                            <Text 
                                style={{color:'#17baa1',fontSize:20,}}>Login
                            </Text>
                        </TouchableOpacity>
                    </View>
                    
            </View>
        
    )


    
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: -20,
        justifyContent: "flex-start",
        alignItems: 'center',
    },
    input: {
        borderColor: 'dodgerblue',
        // borderWidth: 1,
        width:260,
        borderBottomWidth:0.4,
        height:37,
        margin: 8,
        // backgroundColor: '#fff',
        borderRadius: 5,
    },
    button_1: {
        backgroundColor:'#5EA3A7',
        borderRadius: 2,
        borderWidth:0.1,
        padding:10,
        width:200,
        alignItems:'center',
        margin:20,
        shadowColor:'#000000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity:0.26,
        shadowRadius:2,
        elevation:5,
    },
    button_2: {
        flex:0.3,
        flexDirection:'row',
        width:200,
        justifyContent:'center',
        // borderRadius:,
        marginTop:80,
        
    }
})

export default Signup;







