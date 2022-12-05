/*
Question 1
Given the array, implement a function for generating a new array which doubles the quantity and price in each object.
Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only.
Given the array, implement a function to calculate the total value of the items.
*/
const itemsObject = [
	{ quantity: 1, price: 200 },
	{ quantity: 3, price: 350 },
	{ quantity: 5, price: 400 },
];
console.log("Given object:");
console.log(itemsObject, "\n");

//doubles the quantity and price in each object
const mapper = (arr) => {
	return arr.map((ele) => {
		return { quantity: ele.quantity * 2, price: ele.price * 2 };
	});
};
console.log("Double quantity and price:");
console.log(mapper(itemsObject), "\n");

//contains item quantity > 2 and price > 300 only
const filter = (arr) => {
	return arr.filter((ele) => {
		return ele.quantity > 2 && ele.price > 300;
	});
};
console.log("Quantity > 2 and price > 300:");
console.log(filter(itemsObject), "\n");

//calculate the total value
const total = (arr) => {
	return arr.reduce((acc, cur) => {
		return acc + cur.quantity * cur.price;
	}, 0);
};
console.log("Total value:");
console.log(total(itemsObject), "\n");

/*
Question 2
Given the string, implement a function to remove all the non-alphabet characters and extra space in the string and convert the string to all lowercase.
*/
const string =
	" Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ";
const expectedReturnString =
	"perhaps the easiest to understand case for reduce is to return the sum of all the elements in an array";
const cleanup = (str) => {
	return (words = str
		.replace(/[^A-Za-z]/g, " ")
		.toLowerCase()
		.split(" ")
		.filter((ele) => ele)
		.join(" "));
};
console.log("String after cleanup:");
console.log(cleanup(string));
console.log(cleanup(string) === expectedReturnString, "\n");

/*
Question 3
Implement a function to merge two arrays of objects on uuid, but first has uuid and name, second has uuid and role. With the not existing property, fill with null. Sort according to uuid after merge.
*/
const first = [
	{ uuid: 2, name: "test" },
	{ uuid: 5, name: "test5" },
	{ uuid: 3, name: "test3" },
];

const second = [
	{ uuid: 6, role: "pm" },
	{ uuid: 4, role: "engineer" },
	{ uuid: 1, role: "manager" },
	{ uuid: 2, role: "associate" },
];

let firstSorted = first.sort((a, b) => {
	return a.uuid - b.uuid;
});

let secondSorted = second.sort((a, b) => {
	return a.uuid - b.uuid;
});

let i = 0,
	j = 0;
let res = [];
while (i < firstSorted.length && j < secondSorted.length) {
	if (firstSorted[i].uuid === secondSorted[j].uuid) {
		res.push({ ...secondSorted[j], ...firstSorted[i] });
		i++;
		j++;
	} else if (firstSorted[i].uuid < secondSorted[j].uuid) {
		res.push({
			uuid: firstSorted[i].uuid,
			role: null,
			name: firstSorted[i].name,
		});
		i++;
	} else {
		res.push({
			uuid: secondSorted[j].uuid,
			role: secondSorted[j].role,
			name: null,
		});
		j++;
	}
}

while (i < firstSorted.length) {
	res.push({
		uuid: firstSorted[i].uuid,
		role: null,
		name: firstSorted[i].name,
	});
	i++;
}
while (j < secondSorted.length) {
	res.push({
		uuid: secondSorted[j].uuid,
		role: secondSorted[j].role,
		name: null,
	});
	j++;
}
console.log(res);
