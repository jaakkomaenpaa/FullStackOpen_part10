import { View, Image, StyleSheet } from 'react-native';
import theme from '../../theme';
import Text from '../Text';

const styles = StyleSheet.create({
  image: {
    marginRight: 5,
    borderRadius: 5,
    width: 40,
    height: 40,
  },
  fullInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  textBackGround: {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    padding: 4,
  },
  languageText: {
    color: 'white'
  },
  infoText: {
    marginBottom: 4,
    marginRight: 10,
  },
  infoTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 15,
    marginRight: 15,
    marginLeft: 15
  }
})

const InfoField = ({ item }) => {

  return (
    <View testID='infoField' style={styles.fullInfoContainer}>
      <Image
        style={styles.image}
        source={{uri: item.ownerAvatarUrl}}
      />
      <View style={styles.infoTextContainer}>
        <Text style={styles.infoText} fontWeight='bold'>{item.fullName}</Text>
        <Text style={styles.infoText} color='textSecondary'>{item.description}</Text>
        <View style={styles.textBackGround}>
          <Text style={styles.languageText}>{item.language}</Text>
        </View>
      </View>
    </View>
  );
};

export default InfoField;