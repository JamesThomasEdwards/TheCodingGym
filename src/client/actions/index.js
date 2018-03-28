import axios from 'axios';
import {
  CREATE_CONTRIBUTION,
  FETCH_QUESTIONS,
  FETCH_QUESTION,
  FETCH_ANSWER,
  DELETE_QUESTION
} from './types';

//values object is the contribution (category, question, answer)
export function createContribution(values, callback) {
  console.log('ACTION VALUES === ', values);

  //make api request. After api is resolved then call the callback function
  const request = axios.post('api/questions', values).then(() => callback());

  return {
    type: CREATE_CONTRIBUTION,
    payload: request
  };
}
// PLEASE IGNORE BELOW FOR NOW
// export const createContribution = values => async dispatch => {
//   const request = await axios.post('/questions', values);
//   console.log('submitContribution values === ', values);
//   return {
//     type: CREATE_CONTRIBUTION,
//     payload: request
//   };
// };
