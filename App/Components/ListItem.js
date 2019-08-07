import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image } from 'react-native'
import styles from './Styles/ListItemStyles'

export default class ListItem extends Component {
  static defaultProps = { }

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  }

  render () {
      const { title, icon } = this.props
      return (
        <View style={styles.container}>
            <View style={styles.ImageContainer}>
                <Image
                    style={styles.Icon}
                    source={{uri: icon}}
                />
            </View>
            <View style={styles.title}>
                <Text allowFontScaling={false} 
                      style={styles.message}
                >{title}</Text>
            </View>
        </View>
      )
  }
}
