type InferArray<T extends unknown[]> = T extends (infer U)[] ? U : never;
