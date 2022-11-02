// https://www.codewars.com/kata/56d49587df52101de70011e4/train/javascript

function leo(oscar){
  if (oscar > 88) return 'Leo got one already!'
  else if (oscar == 88) return 'Leo finally won the oscar! Leo is happy'
  else if (oscar == 86) return 'Not even for Wolf of wallstreet?!'
  else return 'When will you give Leo an Oscar?'
}

function leo(oscar){
  switch (oscar){
    case 88:
      return "Leo finally won the oscar! Leo is happy";
      break;
    case 86:
      return  "Not even for Wolf of wallstreet?!";
      break;
    default:
      if(oscar<88) return "When will you give Leo an Oscar?";
      else return  "Leo got one already!";
  }
}