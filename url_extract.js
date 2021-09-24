// https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript

function domainName(url){
  let ans = url.includes('www.') ? url.split('www.')[1] : (url.includes('//') ? url.split('//')[1] : url);
  return ans.split('.')[0]
}