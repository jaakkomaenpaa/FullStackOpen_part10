import { View, StyleSheet } from 'react-native';
import Text from '../Text';

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexGrow: 1
  }
})

const StatisticsField = ({ item }) => {

  const counts = {
    stars: item.stargazersCount,
    forks: item.forksCount,
    reviews: item.reviewCount
  }

  Object.keys(counts).forEach(count => {
    const number = counts[count]
    const dividedNumber = (number / 1000).toFixed(1)

    number >= 1000 
    ? dividedNumber % 1 === 0 
    ? counts[count] = `${((number / 1000).toFixed(0))}k`
    : counts[count] = `${dividedNumber}k`
    : counts[count] = number
  })

  return (
    <View style={styles.flexContainer}>
      <Statistic header='Stars' number={counts.stars} />
      <Statistic header='Forks' number={counts.forks} />
      <Statistic header='Reviews' number={counts.reviews} />
      <Statistic header='Rating' number={item.ratingAverage} />
    </View>
  )
};

const Statistic = ({header, number}) => {

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingBottom: 10,
    }
  })

  return (
    <View style={styles.container}>
      <Text fontWeight='bold'>{number}</Text>
      <Text color='textSecondary'> {header}</Text>
    </View>
  )
}

export default StatisticsField;