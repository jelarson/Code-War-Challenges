// https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript

function formatDuration(seconds) {
  if (seconds === 0) {
    return "now";
  } else {
    let ans = [];
    let remaining = seconds;
    let years = Math.floor(remaining / (3600 * 24 * 365));
    remaining = remaining - years * 3600 * 24 * 365;
    let days = Math.floor(remaining / (3600 * 24));
    remaining = remaining - days * 3600 * 24;
    let hours = Math.floor(remaining / 3600);
    remaining = remaining - hours * 3600;
    let minutes = Math.floor(remaining / 60);
    remaining = remaining - minutes * 60;
    if (years > 0) {
      if (years > 1) {
        ans.push(`${years} years`);
      } else {
        ans.push(`${years} year`);
      }
    }
    if (days > 0) {
      if (days > 1) {
        ans.push(`${days} days`);
      } else {
        ans.push(`${days} day`);
      }
    }
    if (hours > 0) {
      if (hours > 1) {
        ans.push(`${hours} hours`);
      } else {
        ans.push(`${hours} hour`);
      }
    }
    if (minutes > 0) {
      if (minutes > 1) {
        ans.push(`${minutes} minutes`);
      } else {
        ans.push(`${minutes} minute`);
      }
    }
    if (remaining > 0) {
      if (remaining > 1) {
        ans.push(`${remaining} seconds`);
      } else {
        ans.push(`${remaining} second`);
      }
    }
    if (ans.length === 1) {
      return ans[0];
    }
    if (ans.length === 2) {
      return ans.join(" and ");
    }
    if (ans.length > 2) {
      return ans.splice(0, ans.length - 1).join(", ") + " and " + ans[0];
    }
    return ans;
  }
}

console.log(formatDuration(3667652));
console.log(formatDuration(62));
console.log(formatDuration(7));
console.log(formatDuration(0));

// best answer

function formatDuration(seconds) {
  var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
    res = [];

  if (seconds === 0) return "now";

  for (var key in time) {
    if (seconds >= time[key]) {
      var val = Math.floor(seconds / time[key]);
      res.push((val += val > 1 ? " " + key + "s" : " " + key));
      seconds = seconds % time[key];
    }
  }

  return res.length > 1
    ? res.join(", ").replace(/,([^,]*)$/, " and" + "$1")
    : res[0];
}
