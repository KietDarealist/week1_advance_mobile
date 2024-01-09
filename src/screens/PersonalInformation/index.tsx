// UserProfileScreen.js
import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const PersonalInformation = () => {
  const userData = {
    name: 'Huỳnh Ngọc Tuấn Kiệt',
    studentId: '20110508',
    hobbies: 'Bóng rổ, bóng đá, nghe nhạc,...',
    skills: 'NextJS, ReactJS, React Native, TypeScript,...',
    contactInfo: {
      phoneNumber: '0819190227',
      facebook: 'https://www.facebook.com/profile.php?id=100074457652293',
    },
  };

  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => navigation.navigate('Home' as never), 10000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.name}>{userData.name}</Text>
          <Text style={styles.subtitle}>{`MSSV: ${userData.studentId}`}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Sở thích:</Text>
          <Text style={styles.text}>{userData.hobbies}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Sở trường:</Text>
          <Text style={styles.text}>{userData.skills}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Thông tin liên lạc:</Text>
          <Text style={styles.text}>
            SĐT: {userData.contactInfo.phoneNumber}
          </Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.text}>FB: {userData.contactInfo.facebook}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    padding: 20,
    width: '100%',
  },
  header: {
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
  },
  section: {
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    marginTop: 5,
  },
  link: {
    color: 'blue',
  },
  editButton: {
    backgroundColor: '#3498db',
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  editButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default PersonalInformation;
