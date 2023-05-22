import smartsolosAPI from "./smartsolosAPI";

export async function sendRequest(data){
  const reqBody = createPostRequest(data);
  console.log("CORPO DA REQUISIÇÃO");
  console.log(reqBody);
    await smartsolosAPI.post('classification', reqBody)
        .then((response) => {
          console.log('');
          console.log("RETORNO DA REQUISIÇÃO POST");
          console.log(response.config.data);
          console.log(response.data);
        })
        .catch((error) => {
            console.error(error);
        })
}

// "SIMB_HORIZ": "string",
// "LIMITE_SUP": 0,
// "LIMITE_INF": 0,

function createPostRequest(data){

  let soilProfileList = data.soilProfiles.map((value) => {
    return (
      {
        "SIMB_HORIZ": value.profileName,
        "LIMITE_SUP": value.upperLimit,
        "LIMITE_INF": value.lowerLimit
      }
    );
  });
  
  console.log(soilProfileList);

  return (
      {
          "items": [
            {
              "ID_PONTO": data.soilName,
              "DRENAGEM": data.soilDrainage,
              "HORIZONTES": soilProfileList
            }
          ]
      }
  );
}