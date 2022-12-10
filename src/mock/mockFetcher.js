const country = {
  country: '',
  countryInfo: [],

};

const fetcher = 'https://disease.sh/v3/covid-19/countries';

export default async function mockFetch(fetcher) {
  switch (fetcher) {
    case fetcher: {
      return {
        ok: true,
        status: 200,
        json: async () => country,
      };
    }
    default: {
      throw new Error(`Unhandled request: ${'https://disease.sh/v3/covid-19/countries'}`);
    }
  }
}

mockFetch(fetcher);
