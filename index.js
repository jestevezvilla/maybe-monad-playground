import Maybe from 'maybe-monada';

const getCountry = Maybe(document.documentElement.attributes)
  .map((attr) => attr.env)
  .mapOr('es', (env) => env.value);

const getLang = Maybe(document.documentElement.attributes)
  .map((attr) => attr.lang)
  .mapOr('es', (lang) => lang.value);

const isCountryEqualToLangMaybe = Maybe.lift2((a, b) => a === b);

console.log(isCountryEqualToLangMaybe(getCountry, getLang).unwrap());
