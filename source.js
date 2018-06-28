// digit to value map: first character is value of "0", etc.
m = "6255456376";

// "highscrore"
h = 0;

// regex to check validity of timestamp;
// the first digit is garbage that is stripped away later, so we only check the
// end of the string
r = /[012]\d[0-5]\d$/;

// instead of looping from 0 to 9999 and having to left-pad everything under 999
// we can just loop from 10000 to 19999 (actually 10001 to 20000 due to the i++
// optimization) and then ignore the first digit
for (i = 10000; i++ < 20000;) {
  // convert into string so we can do j[1];
  // strings can be accessed like arrays, but numbers cannot
  j = i + "";

  if (r.test(j)) {
    s = m[j[1]] + m[j[2]] + m[j[3]] + m[j[4]];

    // if the score of the current timestamp is higher than the current
    // highscore => remember timestamp + new highscore
    if (s > h) {
      h = s;
      o = j;
    }
  }
}

// remove first digit before REPL output
o.slice(1);
