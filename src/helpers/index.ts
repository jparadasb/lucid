import { useCallback, useRef } from "react";

export type ClassName = string | undefined;
export type classBuilderType = (...classes: ClassName[]) => string;
export type useClassNameType = (
  baseClass: string
) => classBuilderType;

export const useClassName: useClassNameType = (baseClass: string) => {
  const memoizedClassesRef = useRef<{ [key: string]: string }>({});

  const classHelper = useCallback(
    (...classes: ClassName[]) => {
      const classKey = JSON.stringify(classes);
      if (memoizedClassesRef.current[classKey]) {
        return memoizedClassesRef.current[classKey];
      }

      memoizedClassesRef.current[classKey] = classes
        .map((className) => {
          if (className) {
            return `${baseClass}${className}`;
          }
          return "";
        })
        .join(" ")
        .trim();

      return memoizedClassesRef.current[classKey];
    },
    [baseClass]
  );

  return classHelper;
};
