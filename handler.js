"use strict";

module.exports.getOnes = async (event) => {
  let x = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(
      getOneEndPoint(),
      null,
      2
    ),
  };
return x
};
module.exports.getOne = async (event) => {
  let theOnes = getOneEndPoint()
  let foundOne = theOnes.find((OneEndPoint)=>{
    return OneEndPoint == event.pathParameters.id
  })

  return {
    statusCode: 200,
    body: JSON.stringify(
      foundOne
      ,
      null,
      2
    ),
  };
};
const getOneEndPoint =() => {
  return [  1,2,3,4,'poop'
]}