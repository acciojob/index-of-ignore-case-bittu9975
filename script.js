function indexOfIgnoreCase(mainStr, searchStr) {
  // write your code here
	
	
	const mainStr = str.toLowerCase();
    const searchStr = subStr.toLowerCase();
    return mainStr.indexOf(searchStr);
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
