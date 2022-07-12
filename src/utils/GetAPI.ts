import axios from 'axios';
import { ConvertionResponse } from 'types/ConvertionResponse';
import { API_KEY } from './envs';

interface DataResponse {
  data: ConvertionResponse[] | [];
}

export const GetNEPVal = async () => {
  const URL = `https://api.nomics.com/v1/currencies/ticker?key=${API_KEY}&ids=NEP&interval=30d&convert=BUSD&platform-currency=BNB&per-page=100&page=1`;
  const response: DataResponse = await axios.get(URL);
  return response.data;
};
