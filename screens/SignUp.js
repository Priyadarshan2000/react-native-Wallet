import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    TextInput,
    Model,
    FlatList,
    KeyboardAvoidingView,
    ScrollView

} from 'react-native';

// import RadialGradient from 'react-native-radial-gradient';

import  LinearGradient  from 'react-native-linear-gradient';
import { COLORS, SIZES,FONTS,icons,images} from "../constants"

const SignUp = () => {

    function renderHeader()
    {
        return (
            <TouchableOpacity
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: SIZES.padding * 6,
                paddingHorizontal: SIZES.padding * 2,
            }}
            onPress={() => console.log("Sign UP")}
            >
                <Image
                source={icons.back}
                >
                    resizeMode="contain"
                    style={{
                        width: 20,
                        height: 20,
                        tinitColor: COLORS.white,
                        
                    }}
                </Image>
            </TouchableOpacity>
        )
    }
    return (
        <KeyboardAvoidingView
         behavior={Platform.OS === "ios" ? "padding" : "null"}
         style={{flex:1}}
        > 
        <LinearGradient
            colors={[ COLORS.lime,  COLORS.emerald]}
            style={{flex:1}}
        >
            <ScrollView>
                {renderHeader()}
            </ScrollView>
        </LinearGradient>
        </KeyboardAvoidingView>
    )
}

export default SignUp;