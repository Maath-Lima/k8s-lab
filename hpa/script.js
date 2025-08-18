import http, { TLS_1_0 } from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '1m', target: 2000 },
    { duration: '3m', target: 2000 },
    { duration: '1m', target: 0 },
  ]
};

export default function() {
  let res = http.get('http://localhost');
  sleep(1);
}
