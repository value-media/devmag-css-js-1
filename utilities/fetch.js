
  async function getCurrentExchangeRate(currencyCode = 'USD') {
    const url = `http://api.nbp.pl/api/exchangerates/rates/A/${currencyCode}`;
    const resp = await (await fetch(url)).json();
    const { currency, code, rates: [{ effectiveDate: date, mid:rate, no }, ...rest] } = resp;
    const msg = `${currency.toUpperCase()} (${code}) exchange rate on ${date}: ${rate}`;
    console.log(msg);
  }

  getCurrentExchangeRate();