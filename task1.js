const deepCopyObject = (obj) => {
  let cloneObj = {};

  if (Array.isArray(obj)) {
      cloneObj = [];
  }

  for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
          if (typeof obj[key] === 'object') {
              cloneObj[key] = deepCopyObject(obj[key]);
              continue;
          } else {
              cloneObj[key] = obj[key];
          }
      }
  }

  return cloneObj;
};
