import { useCallback, useRef } from "react";

/**
 *
 * @param {string} baseClass
 * @returns {function}
 * @example const c = useClassName('c-Button');
 * c('--primary', '--small', '--disabled');
 * // returns 'c-Button--primary c-Button--small c-Button--disabled'
 *
 * Using useCallback we can memoize the function and avoid unnecessary re-renders
 * also with the memoizedClassesRef we can store the memoized classes and avoid to run the map function every time
 */
export const useClassName = (baseClass) => {
  const memoizedClassesRef = useRef({});
  const classHelper = useCallback(
    (...classes) => {
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
