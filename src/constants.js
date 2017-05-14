export const CONDITION_TYPE_LIST = [
  {
    key: 'roas',
    text: 'ROAS',
    value: 'roas'
  },
  {
    key: 'spend',
    text: 'Spend',
    value: 'spen'
  },
  {
    key: 'pc',
    text: 'Purchase Conversion Value',
    value: 'pc'
  }
]

export const EXPRESSION_LIST = [
  {
    key: 'equal',
    text: 'equal',
    value: 'equal'
  },
  {
    key: 'less',
    text: 'is less than',
    value: 'less'
  }
]

export const TIME_RANGE_LIST = [
  {
    key: 'today',
    text: 'Today',
    value: 'today'
  }, {
    key: 'yesterday',
    text: 'Yesterday',
    value: 'yesterday'
  }
]

const hours = Array.apply(null, {length: 24}).map(Number.call, Number)
export const HOUR_LIST = Array.from(hours, hour => ({
  key: hour,
  text: hour < 10 ? `0${hour}:00` : `${hour}:00`,
  value: hour
}))
