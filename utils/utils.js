export default (arr, filters)=>{

if(filters === null || filters === undefined){
   return arr;
}
let filterKeys = Object.keys(filters);
return arr.filter(eachObj => {
  return filterKeys.every(eachKey => {
    if (filters[eachKey] !== undefined && filters[eachKey] !== null) {
      return filters[eachKey] === (eachObj[eachKey]);
    }else {
      return true;
    }
  });
});

}