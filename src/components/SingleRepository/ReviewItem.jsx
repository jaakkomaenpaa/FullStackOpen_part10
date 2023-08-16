import { View, StyleSheet } from 'react-native';
import { format } from 'date-fns';

import Text from '../Text';
import theme from '../../theme';

const styles = StyleSheet.create({
  ratingValue: {
    color: theme.colors.primary,
  },
  ratingContainer: {
    borderColor: theme.colors.primary,
    borderWidth: 2,
    borderRadius: 40 / 2,
    width: 40,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  infoText: {
    marginBottom: 4
  },
  flexContainer: {
    marginTop: 10,
    display: 'flex',
    backgroundColor: theme.colors.secondaryBackground,
    flexWrap: 'wrap',
    flexDirection: 'column',
    padding: 20
  },
  fullInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  infoTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15
  }
});

const ReviewItem = ({ review, inReviewList = false }) => {

  return (
    <View style={styles.flexContainer}>
      <View style={styles.fullInfoContainer}>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingValue} fontWeight='bold' fontSize='subheading'>{review.rating}</Text>
        </View>
        <View style={styles.infoTextContainer}>
          <Text style={styles.infoText} fontWeight='bold'>
            {inReviewList ? review.repository.fullName : review.user.username}
          </Text>
          <Text style={styles.infoText} color='textSecondary'>{format(new Date(review.createdAt), 'dd.MM.yyyy')}</Text>
          <Text>{review.text}</Text>
        </View>
      </View>
    </View>
  )
}

export default ReviewItem;