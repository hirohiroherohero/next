type InferArray<T extends unknown[]> = T extends (infer U)[] ? U : never;

type RecursiveInferArray<T extends unknown[]> = T extends (infer U)[]
  ? { [key in keyof U]: U[key] extends unknown[] ? RecursiveInferArray<U[key]> : U[key] }
  : never;
