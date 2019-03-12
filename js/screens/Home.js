import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Card, CardItem, Item, Input, Button, Icon } from 'native-base'
import { connect } from 'react-redux'
import {
  setTo,
  fromKmToMiles,
  updateNumber,
  clearHistory,
} from '../store/actions'

class Home extends Component {
  onChange = value => {
    const { updateNumber } = this.props
    updateNumber(value)
  }

  render() {
    const { from, to, result, number, clearHistory } = this.props

    const renderResult = () => (result === 0 ? 0 : result.toFixed(2))

    return (
      <View>
        <View style={{ flexDirection: 'row' }}>
          <Card style={{ flex: 1 }}>
            <CardItem style={{flexDirection:'column', alignItems: 'flex-start'}}>
              <Text style={{ fontSize: 10 }}>From:</Text>
              <Text style={{ fontSize: 24 }}>{from}</Text>
            </CardItem>
          </Card>
          <Card style={{ flex: 1 }}>
            <CardItem style={{flexDirection:'column', alignItems: 'flex-start'}}>
              <Text style={{ fontSize: 10 }}>To:</Text>
              <Text style={{ fontSize: 24 }}>{to}</Text>
            </CardItem>
          </Card>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Card style={{ flex: 1 }}>
            <CardItem>
              <Item>
                <Input
                  style={{ fontSize: 24 }}
                  value={number === 0 ? null : number.toString()}
                  placeholder={`Input ${from}`}
                  onChangeText={this.onChange}
                />
              </Item>
            </CardItem>
          </Card>
          <Card style={{ flex: 1 }}>
            <CardItem style={{ flex: 1, alignItems: 'center' }}>
              <Text style={{ fontSize: 24 }}>{renderResult()}</Text>
            </CardItem>
          </Card>
        </View>
        <Card>
          <CardItem header bordered style={{ justifyContent: 'space-between' }}>
            <View>
              <Text>History</Text>
            </View>
            <View>
              <Button small danger transparent>
                <Icon name="ios-trash" onPress={() => clearHistory()} />
              </Button>
            </View>
          </CardItem>
          {this.props.history.map((h, index) => (
            <CardItem key={index}>
              <Text
                style={{
                  flex: 1,
                  borderWidth: 0.5,
                  borderColor: '#d6d7da',
                }}
              >
                {h}
              </Text>
            </CardItem>
          ))}
        </Card>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    from: state.calculateReducer.from,
    to: state.calculateReducer.to,
    result: state.calculateReducer.result,
    history: state.calculateReducer.history,
    number: state.calculateReducer.number,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setTo: () => dispatch(setTo()),
    closeSettings: () => dispatch(closeSettings()),
    fromKmToMiles: () => dispatch(fromKmToMiles()),
    updateNumber: value => dispatch(updateNumber(value)),
    clearHistory: () => dispatch(clearHistory()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
