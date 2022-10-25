import { isObject } from "@vue/shared";
import {
  mutabelHandler,
  shallowReactiveHandler,
  readonlyHandler,
  shallowReadonlyHandler,
} from "./baseHandlers";

export function reactive(target) {
  return createReactiveOject(target, false, mutabelHandler);
}
export function shallowReactive(target) {
  return createReactiveOject(target, false, shallowReactiveHandler);
}
export function readonly(target) {
  return createReactiveOject(target, true, readonlyHandler);
}
export function shallowReadonly(target) {
  return createReactiveOject(target, true, shallowReadonlyHandler);
}

const reactiveMap = new WeakMap();
const readonlyMap = new WeakMap();
function createReactiveOject(
  target: unknown,
  isReadonly: boolean,
  baseHandler: ProxyHandler<any>
) {
  // 只拦截object
  if (!isObject(target)) {
    return target;
  }
  let proxyMap = isReadonly ? readonlyMap : reactiveMap;
  const existProxy = proxyMap.get(target);
  if (existProxy) return existProxy;

  let proxy = new Proxy(target, baseHandler);
  proxyMap.set(target, proxy);
  return proxy;
}
