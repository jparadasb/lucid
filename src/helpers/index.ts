import { useCallback, useRef } from "react";

type ClassName = string | undefined;
type useClassNameFunction = (
  baseClass: string
) => (...classes: ClassName[]) => string;

export const useClassName: useClassNameFunction = (baseClass: string) => {
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
