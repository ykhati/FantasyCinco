export const GET_FIVE_RANDOM = 'GET_FIVE_RANDOM';

export function getFiveRandom(playInfo){
  console.log("action data: ", playInfo);
  return{
    type: GET_FIVE_RANDOM,
    payload: playInfo
  }
}
