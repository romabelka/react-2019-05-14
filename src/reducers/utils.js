import { Record, Map } from "immutable";

export const ResourceRecord = Record({
  loading: false,
  loaded: false,
  error: null,
  entities: Map({})
});

export const arrToMap = arr => {
  return Map(
    arr.reduce((map, item) => {
      map[item.id] = item;
      return map;
    }, {})
  );
};
