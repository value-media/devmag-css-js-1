import axios from 'axios';

class HTTPRequest {
    // GET request method
    static async get(url, headers = {}) {
      return await axios.get(url, {headers});
    }
  
    // POST request method
    static async post(url, data = {}, headers = {}) {
      return await axios.post(url, data, {headers});
    }
  
    // PUT request method
    static async put(url, data = {}, headers = {}) {
      return await axios.put(url, data, {headers});
    }
  
    // DELETE request method
    static async delete(url, headers = {}) {
      return await axios.delete(url, {headers});
    }
  }

async function getCurrentExchangeRate(currencyCode = 'USD') {
    const url = `http://api.nbp.pl/api/exchangerates/rates/A/${currencyCode}`;
    const resp = await HTTPRequest.get(url);
    const { status, data } = resp;
    const { currency, code, rates: [{ effectiveDate: date, mid:rate, no }, ...rest] } = data;
    const msg = `${currency.toUpperCase()} (${code}) exchange rate on ${date}: ${rate}`;
    console.log(msg);
}

getCurrentExchangeRate('EUR');

