function createGet(isReadonly = false, isShallow = false) {
  return function get(target, key) {
    return target;
  };
}
const get = createGet();
const shallowGet = createGet(false, true);
const readonlyGet = createGet(true);
const shallowReadonlyGet = createGet(true, true);
export const mutabelHandler = {
  get,
};
export const shallowReactiveHandler = {
  get: shallowGet,
};
export const readonlyHandler = {
  get: readonlyGet,
};
export const shallowReadonlyHandler = {
  get: shallowReadonlyGet,
};
