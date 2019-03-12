import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import Home from './screens/Home'
import Settings from './screens/Settings'
import { connect } from 'react-redux'
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Title,
  Icon,
  Content,
  Footer,
} from 'native-base'
import {
  openSettings,
  closeSettings,
  compute,
  resetNumber,
} from './store/actions'

const SAME = 'No point to compare!';
const GREATER_THAN_ZERO = 'You need to provide value greater than zero!'

class Root extends Component {
  isEqual = (a, b) => {
    return a === b;
  }

  onPress = () => {
    const { openSettings } = this.props
    openSettings()
  }

  closeSettings = () => {
    const { from, to, closeSettings, resetNumber } = this.props
    if (this.isEqual(from, to)) {
      return alert(SAME)
    }
    closeSettings()
    resetNumber()
  }

  compute = () => {
    const { homeVisible, number, compute, from, to } = this.props
    if (homeVisible) {
      if (!number) {
        return alert(GREATER_THAN_ZERO)
      }
      compute()
    } else {
      if (from === to) {
        return alert(SAME)
      }
      this.closeSettings()
    }
  }

  render() {
    const { homeVisible } = this.props

    return (
      <Container>
        <Header>
          <Left>
            <Button onPress={this.closeSettings} transparent>
              <Icon name="ios-home" />
            </Button>
          </Left>
          <Body>
            <Title>Unit Converter</Title>
          </Body>
          <Right>
            <Button onPress={this.onPress} transparent>
              <Icon name="ios-settings" />
            </Button>
          </Right>
        </Header>
        <Content padder>
          {homeVisible ? <Home /> : <Settings />}
        </Content>
        <Footer>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: homeVisible ? '#068587' : '#ED553B',
            }}
            onPress={this.compute}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
              }}
            >
              {homeVisible ? 'Calculate' : 'Back To Home'}
            </Text>
          </TouchableOpacity>
        </Footer>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    homeVisible: state.appReducer.homeVisible,
    number: state.calculateReducer.number,
    from: state.calculateReducer.from,
    to: state.calculateReducer.to,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    openSettings: () => dispatch(openSettings()),
    closeSettings: () => dispatch(closeSettings()),
    compute: () => dispatch(compute()),
    resetNumber: () => dispatch(resetNumber()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root)
