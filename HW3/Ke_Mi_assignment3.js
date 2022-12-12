/*
Question 1
Given the following array and implement the table dynamically
*/

const tableInfo = {
	tableHeader: ["Student Name", "Age", "Phone", "Address"],
	tableContent: [
		{
			"Student Name": "John",
			Age: 19,
			Phone: "455 - 983 - 0903",
			Address: "123 Ave, San Francisco, CA, 94011",
		},
		{
			"Student Name": "Alex",
			Age: 21,
			Phone: "455 - 983 - 0912",
			Address: "456 Rd, San Francisco, CA, 94012",
		},
		{
			"Student Name": "Josh",
			Age: 22,
			Phone: "455 - 345 - 0912",
			Address: "789 Dr, Newark, CA, 94016",
		},
		{
			"Student Name": "Matt",
			Age: 23,
			Phone: "321 - 345 - 0912",
			Address: "223 Dr, Sunnyvale, CA, 94016",
		},
	],
};

let q1 = document.querySelector("#q1");

const createTable = (tableInfo) => {
	let table = document.createElement("table");
	let thead = document.createElement("thead");
	let tbody = document.createElement("tbody");

	// handle thead
	let headerRow = document.createElement("tr");
	for (let header of tableInfo.tableHeader) {
		let th = document.createElement("th");
		th.innerText = header;
		headerRow.appendChild(th);
	}
	thead.appendChild(headerRow);
	table.appendChild(thead);

	// handle tbody
	for (let rowData of tableInfo.tableContent) {
		let tr = document.createElement("tr");
		for (let data in rowData) {
			let td = document.createElement("td");
			td.innerText = rowData[data];
			tr.appendChild(td);
		}
		tbody.appendChild(tr);
	}
	table.appendChild(tbody);

	q1.appendChild(table);
};

createTable(tableInfo);

/*------------------------------------------------------------------------------------*/

/*
  Question 2
  Given the array and generate order list and unordered list dynamically as following:
  */

const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];
let orderedList = document.querySelector("#orderedList");
let unorderedList = document.querySelector("#unorderedList");

const createList = (listData, isOrdered) => {
	let list = isOrdered
		? document.createElement("ol")
		: document.createElement("ul");
	for (let data of listData) {
		let li = document.createElement("li");
		li.innerText = data;
		list.appendChild(li);
	}
	isOrdered ? orderedList.appendChild(list) : unorderedList.appendChild(list);
};

createList(list, true);
createList(list, false);

/*------------------------------------------------------------------------------------*/

/*
  Question 3
  Given a array and implement a dropdown list with the following options dynamically 
  FYI: use 'value' in the object as the value attribute in the option tag when you create the dropdown list
  */

const dropDownList = [
	{ value: "newark", content: "Newark" },
	{ value: "santaClara", content: "Santa Clara" },
	{ value: "unionCity", content: "Union City" },
	{ value: "albany", content: "Albany" },
	{ value: "dalyCity", content: "Daly City" },
	{ value: "sanJose", content: "San Jose" },
];

let q3 = document.querySelector("#q3");

const createDropdownList = (dropdownListData) => {
	let select = document.createElement("select");
	select.setAttribute("name", "city");
	select.setAttribute("id", "city");

	for (let data of dropdownListData) {
		let option = document.createElement("option");
		option.innerText = data.content;
		option.setAttribute("value", data.value);
		select.appendChild(option);
	}

	q3.appendChild(select);
};

createDropdownList(dropDownList);
