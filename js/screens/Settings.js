import React, { Component } from 'react'
import { Text } from 'react-native'
import { Card, CardItem, Grid, Col } from 'native-base'
import Hr from '../components/Hr'
import { connect } from 'react-redux'
import { setFrom, setTo } from '../store/actions'
import RadioForm from 'react-native-simple-radio-button'

const units = [
  { label: 'KM', value: 'KM' },
  { label: 'Miles', value: 'MILES' },
  { label: 'Meter', value: 'METER' },
  { label: 'Yard', value: 'YARD' },
]

class Settings extends Component {
  onValueChangeFrom = value => {
    const { setFrom } = this.props
    this.setState({ value }, () => setFrom(value))
  }

  onValueChangeTo = value => {
    const { setTo } = this.props
    this.setState({ value }, () => setTo(value))
  }

  render() {
    const { from, to } = this.props

    return (
      <Grid>
        <Col>
          <Card style={{ flex: 1 }}>
            <CardItem>
              <Text style={{ fontSize: 24 }}>From:</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <RadioForm
                radio_props={units}
                initial={units.map(l => l.value).indexOf(from)}
                onPress={this.onValueChangeFrom}
              />
            </CardItem>
          </Card>
        </Col>
        <Col>
          <Card style={{ flex: 1 }}>
            <CardItem>
              <Text style={{ fontSize: 24 }}>To:</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <RadioForm
                radio_props={units}
                initial={units.map(l => l.value).indexOf(to)}
                onPress={this.onValueChangeTo}
              />
            </CardItem>
          </Card>
        </Col>
        <Hr />
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  return {
    from: state.calculateReducer.from,
    to: state.calculateReducer.to,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setFrom: from => dispatch(setFrom(from)),
    setTo: to => dispatch(setTo(to)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings)
