import React from 'react'
// import logout from './src/logout.png';


import {
    View,
    Text,
    StyleSheet,
    Image,
    Button,
    SafeAreaView
} from 'react-native'


function Dashboard(): JSX.Element {

    // const logout_img = Image.resolveAssetSource(logout).uri

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.hostelText}>Hostel<Text style={styles.appText}>App</Text></Text>

                {/* <Image
                    style={styles.img}
                    source={logout}
                /> */}

            </View>

            <View style={styles.card}>
                <Text style={styles.name}>Mirza Anwar Taher Abbas</Text>
                <View style={styles.cardInnrFlx}>
                    <View style={styles.cardInnrFlxClm}>
                        <Text style={styles.role}>Resident</Text>
                        <Text style={styles.role}>+91-9398035079</Text>
                    </View>
                    <Text style={styles.name}>402C</Text>
                </View>
            </View>

            <View style={styles.flxComplaints}>
                <Text style={styles.t1}>Complients :</Text>
                <Button
                    title="Add Complient"
                    // onPress={() => dashboard}  
                    color='#CB2E2E'
                />
            </View>

            <View></View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 25,
        display: 'flex',
        flexDirection: 'row'
    },
    whiteText: {
        color: '#FFFFFF'
    },
    darkText: {
        color: '#000000'
    },
    hostelText: {
        fontSize: 25,
        color: '#2958E5',
        fontWeight: 'bold',
        flex: 1
    },
    appText: {
        fontSize: 25,
        color: '#060606',
        flex: 2
    },

    img: {
        marginTop: 8
    },


    card: {
        backgroundColor: '#2958E5',
        // minHeight: 200,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 20,
        padding: 30
    },

    name: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600'
    },

    role: {
        color: 'white',
        fontSize: 15,
        fontWeight: '400',
        marginTop: 20
    },

    cardInnrFlx: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    cardInnrFlxClm: {
        flexDirection: 'column'
    },


    flxComplaints: {
        display: 'flex',
        flexDirection: 'row',
        margin: 20,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    t1: {
        fontSize: 17,
        color: 'black'
    }
})


export default Dashboard;