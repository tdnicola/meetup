async function getSuggestions(query) {
    return [
      {
        city: 'Denver',
        country: 'us',
        localized_country_name: 'USA',
        state: 'CO',
        name_string: 'Denver, Colorado, USA',
        zip: '80201',
        lat: 39.7,
        lon: -105.08
      },
      {
        city: 'Denver',
        country: 'us',
        localized_country_name: 'USA',
        state: 'NC',
        name_string: 'Denver, North Carolina, USA',
        zip: '28037',
        lat: 35.51,
        lon: -81.02
      },
      {
        city: 'Denver',
        country: 'us',
        localized_country_name: 'USA',
        state: 'PA',
        name_string: 'Denver, Pennsylvania, USA',
        zip: '17517',
        lat: 40.24,
        lon: -76.14
      }
    ]
}

export { getSuggestions }; 