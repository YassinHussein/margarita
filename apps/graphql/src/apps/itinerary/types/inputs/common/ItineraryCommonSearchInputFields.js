// @flow

import { GraphQLInt } from 'graphql';

import PassengersInput from './PassengersInput';
import OrderSearchInput from '../../enums/OrderSearch';
import SortSearchInput from '../../enums/SortSearch';

export default {
  order: {
    description: 'Order of the search',
    type: OrderSearchInput,
  },
  sort: {
    description: 'Sorting of the search',
    type: SortSearchInput,
  },
  limit: {
    description: 'Limit results of the search (max 200)',
    type: GraphQLInt,
  },
  passengers: {
    description: 'How many passengers are travelling',
    type: PassengersInput,
  },
};