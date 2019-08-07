import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    margin: Metrics.marginHorizontal,
    backgroundColor: Colors.silver,
    borderRadius: Metrics.doubleBaseMargin,
    minHeight: Metrics.icons.xxl +  Metrics.doubleBaseMargin,
    flexDirection: 'row'
  },
  ImageContainer: {
    minWidth: Metrics.icons.xxl +  Metrics.doubleBaseMargin, 
    alignItems: 'center',
    justifyContent: 'center'
  },
  Icon:{
    width: Metrics.icons.xxl, 
    height: Metrics.icons.xxl,
    borderRadius: Metrics.icons.xxl/2
  },
  title:{
    flexDirection: 'column',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center'

  },
  message: {
    textAlign: 'left',
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.regular,
    fontWeight: 'bold',
    color: Colors.steel,
    marginLeft: Metrics.marginHorizontal
  }
})
