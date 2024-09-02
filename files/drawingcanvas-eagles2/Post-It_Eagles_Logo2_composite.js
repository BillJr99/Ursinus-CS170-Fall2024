var palette = [
	 [182, 173, 49],
	 [42, 127, 192],
	 [193, 225, 71],
	 [238, 238, 238],
	 [56, 122, 139],
	 [175, 175, 175]
]
var numRows = 12 ;
var numCols = 8 ;
var pages = 
[
	{
		         "col": "A",
		         "row": "1",
		"uncompressed": [1, 1, 1, 1, 1, 1, 5, 5, 5, 5, 1, 3, 3, 3, 3],
		  "compressed": [6, 1, 4, 5, 1, 1, 4, 3]
	},
	{
		         "col": "A",
		         "row": "2",
		"uncompressed": [1, 3, 3, 3, 3, 1, 3, 3, 3, 3, 1, 3, 3, 3, 3],
		  "compressed": [1, 1, 4, 3, 1, 1, 4, 3, 1, 1, 4, 3]
	},
	{
		         "col": "A",
		         "row": "3",
		"uncompressed": [1, 3, 4, 4, 4, 1, 3, 3, 3, 4, 1, 3, 4, 4, 4],
		  "compressed": [1, 1, 1, 3, 3, 4, 1, 1, 3, 3, 1, 4, 1, 1, 1, 3, 3, 4]
	},
	{
		         "col": "A",
		         "row": "4",
		"uncompressed": [1, 3, 4, 3, 3, 1, 3, 4, 4, 4, 1, 3, 3, 3, 3],
		  "compressed": [1, 1, 1, 3, 1, 4, 2, 3, 1, 1, 1, 3, 3, 4, 1, 1, 4, 3]
	},
	{
		         "col": "A",
		         "row": "5",
		"uncompressed": [1, 3, 4, 4, 4, 1, 3, 3, 3, 4, 1, 3, 4, 4, 4],
		  "compressed": [1, 1, 1, 3, 3, 4, 1, 1, 3, 3, 1, 4, 1, 1, 1, 3, 3, 4]
	},
	{
		         "col": "A",
		         "row": "6",
		"uncompressed": [1, 3, 4, 3, 3, 1, 3, 4, 4, 4, 1, 3, 3, 3, 3],
		  "compressed": [1, 1, 1, 3, 1, 4, 2, 3, 1, 1, 1, 3, 3, 4, 1, 1, 4, 3]
	},
	{
		         "col": "A",
		         "row": "7",
		"uncompressed": [1, 3, 3, 3, 3, 1, 3, 3, 3, 3, 1, 3, 3, 3, 3],
		  "compressed": [1, 1, 4, 3, 1, 1, 4, 3, 1, 1, 4, 3]
	},
	{
		         "col": "A",
		         "row": "8",
		"uncompressed": [1, 3, 3, 3, 5, 1, 3, 3, 5, 5, 1, 3, 5, 5, 5],
		  "compressed": [1, 1, 3, 3, 1, 5, 1, 1, 2, 3, 2, 5, 1, 1, 1, 3, 3, 5]
	},
	{
		         "col": "A",
		         "row": "9",
		"uncompressed": [1, 5, 5, 5, 5, 1, 5, 5, 5, 4, 1, 5, 5, 4, 0],
		  "compressed": [1, 1, 4, 5, 1, 1, 3, 5, 1, 4, 1, 1, 2, 5, 1, 4, 1, 0]
	},
	{
		         "col": "A",
		         "row": "10",
		"uncompressed": [1, 5, 4, 0, 0, 1, 5, 4, 0, 0, 1, 5, 4, 0, 0],
		  "compressed": [1, 1, 1, 5, 1, 4, 2, 0, 1, 1, 1, 5, 1, 4, 2, 0, 1, 1, 1, 5, 1, 4, 2, 0]
	},
	{
		         "col": "A",
		         "row": "11",
		"uncompressed": [1, 5, 5, 4, 4, 1, 5, 5, 5, 4, 1, 5, 5, 5, 5],
		  "compressed": [1, 1, 2, 5, 2, 4, 1, 1, 3, 5, 1, 4, 1, 1, 4, 5]
	},
	{
		         "col": "A",
		         "row": "12",
		"uncompressed": [1, 5, 5, 5, 5, 1, 5, 5, 5, 5, 1, 1, 1, 1, 1],
		  "compressed": [1, 1, 4, 5, 1, 1, 4, 5, 5, 1]
	},
	{
		         "col": "B",
		         "row": "1",
		"uncompressed": [1, 1, 1, 1, 1, 5, 5, 5, 5, 5, 3, 3, 3, 3, 3],
		  "compressed": [5, 1, 5, 5, 5, 3]
	},
	{
		         "col": "B",
		         "row": "2",
		"uncompressed": [3, 4, 4, 4, 3, 3, 4, 3, 4, 3, 3, 4, 3, 4, 3],
		  "compressed": [1, 3, 3, 4, 2, 3, 1, 4, 1, 3, 1, 4, 2, 3, 1, 4, 1, 3, 1, 4, 1, 3]
	},
	{
		         "col": "B",
		         "row": "3",
		"uncompressed": [3, 4, 3, 4, 3, 3, 4, 4, 4, 3, 3, 3, 3, 3, 3],
		  "compressed": [1, 3, 1, 4, 1, 3, 1, 4, 2, 3, 3, 4, 6, 3]
	},
	{
		         "col": "B",
		         "row": "4",
		"uncompressed": [3, 4, 4, 4, 3, 3, 3, 3, 4, 3, 3, 4, 4, 4, 3],
		  "compressed": [1, 3, 3, 4, 4, 3, 1, 4, 2, 3, 3, 4, 1, 3]
	},
	{
		         "col": "B",
		         "row": "5",
		"uncompressed": [3, 4, 3, 3, 3, 3, 4, 4, 4, 3, 3, 3, 3, 3, 3],
		  "compressed": [1, 3, 1, 4, 4, 3, 3, 4, 6, 3]
	},
	{
		         "col": "B",
		         "row": "6",
		"uncompressed": [3, 3, 3, 5, 5, 3, 3, 3, 5, 5, 3, 3, 5, 5, 5],
		  "compressed": [3, 3, 2, 5, 3, 3, 2, 5, 2, 3, 3, 5]
	},
	{
		         "col": "B",
		         "row": "7",
		"uncompressed": [3, 5, 5, 5, 5, 5, 5, 5, 5, 4, 5, 5, 5, 4, 4],
		  "compressed": [1, 3, 8, 5, 1, 4, 3, 5, 2, 4]
	},
	{
		         "col": "B",
		         "row": "8",
		"uncompressed": [5, 5, 4, 4, 3, 5, 4, 3, 3, 3, 5, 4, 4, 4, 4],
		  "compressed": [2, 5, 2, 4, 1, 3, 1, 5, 1, 4, 3, 3, 1, 5, 4, 4]
	},
	{
		         "col": "B",
		         "row": "9",
		"uncompressed": [4, 4, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0],
		  "compressed": [2, 4, 6, 0, 1, 4, 6, 0]
	},
	{
		         "col": "B",
		         "row": "10",
		"uncompressed": [0, 0, 0, 0, 4, 0, 0, 4, 4, 5, 0, 4, 4, 5, 5],
		  "compressed": [4, 0, 1, 4, 2, 0, 2, 4, 1, 5, 1, 0, 2, 4, 2, 5]
	},
	{
		         "col": "B",
		         "row": "11",
		"uncompressed": [0, 0, 4, 5, 5, 4, 4, 4, 5, 5, 5, 4, 5, 5, 5],
		  "compressed": [2, 0, 1, 4, 2, 5, 3, 4, 3, 5, 1, 4, 3, 5]
	},
	{
		         "col": "B",
		         "row": "12",
		"uncompressed": [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 1, 1, 1],
		  "compressed": [10, 5, 5, 1]
	},
	{
		         "col": "C",
		         "row": "1",
		"uncompressed": [1, 1, 1, 1, 1, 5, 5, 5, 5, 5, 3, 3, 3, 3, 3],
		  "compressed": [5, 1, 5, 5, 5, 3]
	},
	{
		         "col": "C",
		         "row": "2",
		"uncompressed": [3, 3, 3, 3, 5, 3, 3, 3, 5, 5, 3, 3, 3, 5, 5],
		  "compressed": [4, 3, 1, 5, 3, 3, 2, 5, 3, 3, 2, 5]
	},
	{
		         "col": "C",
		         "row": "3",
		"uncompressed": [3, 3, 5, 5, 5, 3, 5, 5, 5, 1, 3, 5, 5, 1, 1],
		  "compressed": [2, 3, 3, 5, 1, 3, 3, 5, 1, 1, 1, 3, 2, 5, 2, 1]
	},
	{
		         "col": "C",
		         "row": "4",
		"uncompressed": [5, 5, 5, 1, 2, 5, 5, 1, 1, 2, 5, 1, 1, 2, 2],
		  "compressed": [3, 5, 1, 1, 1, 2, 2, 5, 2, 1, 1, 2, 1, 5, 2, 1, 2, 2]
	},
	{
		         "col": "C",
		         "row": "5",
		"uncompressed": [5, 1, 1, 2, 2, 5, 1, 2, 2, 2, 5, 1, 2, 2, 4],
		  "compressed": [1, 5, 2, 1, 2, 2, 1, 5, 1, 1, 3, 2, 1, 5, 1, 1, 2, 2, 1, 4]
	},
	{
		         "col": "C",
		         "row": "6",
		"uncompressed": [5, 1, 2, 4, 4, 1, 1, 4, 4, 3, 1, 4, 4, 3, 3],
		  "compressed": [1, 5, 1, 1, 1, 2, 2, 4, 2, 1, 2, 4, 1, 3, 1, 1, 2, 4, 2, 3]
	},
	{
		         "col": "C",
		         "row": "7",
		"uncompressed": [4, 4, 3, 3, 3, 4, 3, 3, 3, 4, 3, 3, 5, 4, 4],
		  "compressed": [2, 4, 3, 3, 1, 4, 3, 3, 1, 4, 2, 3, 1, 5, 2, 4]
	},
	{
		         "col": "C",
		         "row": "8",
		"uncompressed": [3, 3, 4, 3, 4, 3, 4, 4, 4, 3, 4, 4, 3, 3, 3],
		  "compressed": [2, 3, 1, 4, 1, 3, 1, 4, 1, 3, 3, 4, 1, 3, 2, 4, 3, 3]
	},
	{
		         "col": "C",
		         "row": "9",
		"uncompressed": [4, 4, 3, 3, 3, 0, 0, 4, 3, 3, 0, 0, 0, 4, 4],
		  "compressed": [2, 4, 3, 3, 2, 0, 1, 4, 2, 3, 3, 0, 2, 4]
	},
	{
		         "col": "C",
		         "row": "10",
		"uncompressed": [4, 4, 0, 0, 0, 5, 4, 4, 0, 0, 5, 4, 4, 0, 0],
		  "compressed": [2, 4, 3, 0, 1, 5, 2, 4, 2, 0, 1, 5, 2, 4, 2, 0]
	},
	{
		         "col": "C",
		         "row": "11",
		"uncompressed": [5, 4, 0, 0, 4, 4, 0, 0, 4, 4, 5, 4, 4, 5, 5],
		  "compressed": [1, 5, 1, 4, 2, 0, 2, 4, 2, 0, 2, 4, 1, 5, 2, 4, 2, 5]
	},
	{
		         "col": "C",
		         "row": "12",
		"uncompressed": [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 1, 1, 1],
		  "compressed": [10, 5, 5, 1]
	},
	{
		         "col": "D",
		         "row": "1",
		"uncompressed": [1, 1, 1, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
		  "compressed": [5, 1, 10, 5]
	},
	{
		         "col": "D",
		         "row": "2",
		"uncompressed": [5, 5, 5, 5, 1, 5, 5, 1, 1, 1, 5, 1, 1, 2, 2],
		  "compressed": [4, 5, 1, 1, 2, 5, 3, 1, 1, 5, 2, 1, 2, 2]
	},
	{
		         "col": "D",
		         "row": "3",
		"uncompressed": [1, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2],
		  "compressed": [2, 1, 3, 2, 1, 1, 9, 2]
	},
	{
		         "col": "D",
		         "row": "4",
		"uncompressed": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
		  "compressed": [15, 2]
	},
	{
		         "col": "D",
		         "row": "5",
		"uncompressed": [2, 2, 2, 4, 2, 2, 2, 4, 4, 4, 4, 4, 3, 3, 3],
		  "compressed": [3, 2, 1, 4, 3, 2, 5, 4, 3, 3]
	},
	{
		         "col": "D",
		         "row": "6",
		"uncompressed": [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5, 3, 3, 3],
		  "compressed": [11, 3, 1, 5, 3, 3]
	},
	{
		         "col": "D",
		         "row": "7",
		"uncompressed": [4, 3, 3, 3, 3, 5, 3, 3, 3, 3, 5, 3, 3, 3, 3],
		  "compressed": [1, 4, 4, 3, 1, 5, 4, 3, 1, 5, 4, 3]
	},
	{
		         "col": "D",
		         "row": "8",
		"uncompressed": [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
		  "compressed": [15, 3]
	},
	{
		         "col": "D",
		         "row": "9",
		"uncompressed": [3, 3, 3, 3, 4, 4, 3, 3, 4, 5, 0, 4, 4, 4, 4],
		  "compressed": [4, 3, 2, 4, 2, 3, 1, 4, 1, 5, 1, 0, 4, 4]
	},
	{
		         "col": "D",
		         "row": "10",
		"uncompressed": [0, 4, 4, 2, 2, 4, 4, 2, 2, 2, 4, 1, 2, 2, 2],
		  "compressed": [1, 0, 2, 4, 2, 2, 2, 4, 3, 2, 1, 4, 1, 1, 3, 2]
	},
	{
		         "col": "D",
		         "row": "11",
		"uncompressed": [5, 1, 1, 2, 2, 5, 5, 1, 1, 1, 5, 5, 5, 5, 1],
		  "compressed": [1, 5, 2, 1, 2, 2, 2, 5, 3, 1, 4, 5, 1, 1]
	},
	{
		         "col": "D",
		         "row": "12",
		"uncompressed": [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 1, 1, 1],
		  "compressed": [10, 5, 5, 1]
	},
	{
		         "col": "E",
		         "row": "1",
		"uncompressed": [1, 1, 1, 1, 1, 5, 5, 5, 5, 1, 1, 1, 1, 1, 1],
		  "compressed": [5, 1, 4, 5, 6, 1]
	},
	{
		         "col": "E",
		         "row": "2",
		"uncompressed": [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
		  "compressed": [1, 1, 14, 2]
	},
	{
		         "col": "E",
		         "row": "3",
		"uncompressed": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
		  "compressed": [15, 2]
	},
	{
		         "col": "E",
		         "row": "4",
		"uncompressed": [2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 4, 4, 4],
		  "compressed": [8, 2, 1, 4, 3, 2, 3, 4]
	},
	{
		         "col": "E",
		         "row": "5",
		"uncompressed": [4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
		  "compressed": [2, 4, 13, 3]
	},
	{
		         "col": "E",
		         "row": "6",
		"uncompressed": [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
		  "compressed": [15, 3]
	},
	{
		         "col": "E",
		         "row": "7",
		"uncompressed": [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4],
		  "compressed": [12, 3, 3, 4]
	},
	{
		         "col": "E",
		         "row": "8",
		"uncompressed": [3, 3, 3, 3, 5, 3, 3, 3, 3, 3, 3, 5, 4, 4, 4],
		  "compressed": [4, 3, 1, 5, 6, 3, 1, 5, 3, 4]
	},
	{
		         "col": "E",
		         "row": "9",
		"uncompressed": [4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 4, 5, 5, 5, 5],
		  "compressed": [3, 4, 7, 5, 1, 4, 4, 5]
	},
	{
		         "col": "E",
		         "row": "10",
		"uncompressed": [4, 4, 5, 5, 5, 2, 4, 4, 5, 4, 2, 2, 4, 4, 2],
		  "compressed": [2, 4, 3, 5, 1, 2, 2, 4, 1, 5, 1, 4, 2, 2, 2, 4, 1, 2]
	},
	{
		         "col": "E",
		         "row": "11",
		"uncompressed": [2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2],
		  "compressed": [2, 2, 1, 4, 7, 2, 1, 1, 4, 2]
	},
	{
		         "col": "E",
		         "row": "12",
		"uncompressed": [1, 1, 1, 1, 1, 5, 5, 5, 5, 1, 1, 1, 1, 1, 1],
		  "compressed": [5, 1, 4, 5, 6, 1]
	},
	{
		         "col": "F",
		         "row": "1",
		"uncompressed": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1],
		  "compressed": [10, 1, 4, 2, 1, 1]
	},
	{
		         "col": "F",
		         "row": "2",
		"uncompressed": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
		  "compressed": [15, 2]
	},
	{
		         "col": "F",
		         "row": "3",
		"uncompressed": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2],
		  "compressed": [13, 2, 1, 4, 1, 2]
	},
	{
		         "col": "F",
		         "row": "4",
		"uncompressed": [2, 2, 4, 4, 4, 4, 4, 3, 3, 5, 3, 3, 3, 3, 3],
		  "compressed": [2, 2, 5, 4, 2, 3, 1, 5, 5, 3]
	},
	{
		         "col": "F",
		         "row": "5",
		"uncompressed": [3, 3, 3, 3, 3, 3, 3, 3, 3, 5, 3, 5, 5, 5, 4],
		  "compressed": [9, 3, 1, 5, 1, 3, 3, 5, 1, 4]
	},
	{
		         "col": "F",
		         "row": "6",
		"uncompressed": [4, 4, 4, 4, 5, 3, 5, 5, 5, 5, 3, 3, 3, 3, 3],
		  "compressed": [4, 4, 1, 5, 1, 3, 4, 5, 5, 3]
	},
	{
		         "col": "F",
		         "row": "7",
		"uncompressed": [3, 3, 5, 5, 5, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5],
		  "compressed": [2, 3, 3, 5, 6, 4, 4, 5]
	},
	{
		         "col": "F",
		         "row": "8",
		"uncompressed": [5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 4, 4, 5, 5, 5],
		  "compressed": [5, 5, 1, 3, 4, 5, 2, 4, 3, 5]
	},
	{
		         "col": "F",
		         "row": "9",
		"uncompressed": [5, 5, 4, 4, 5, 5, 5, 5, 5, 4, 5, 5, 5, 5, 4],
		  "compressed": [2, 5, 2, 4, 5, 5, 1, 4, 4, 5, 1, 4]
	},
	{
		         "col": "F",
		         "row": "10",
		"uncompressed": [5, 5, 5, 4, 4, 4, 4, 4, 2, 2, 2, 4, 2, 2, 2],
		  "compressed": [3, 5, 5, 4, 3, 2, 1, 4, 3, 2]
	},
	{
		         "col": "F",
		         "row": "11",
		"uncompressed": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
		  "compressed": [15, 2]
	},
	{
		         "col": "F",
		         "row": "12",
		"uncompressed": [2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		  "compressed": [4, 2, 11, 1]
	},
	{
		         "col": "G",
		         "row": "1",
		"uncompressed": [1, 1, 1, 1, 1, 5, 5, 5, 5, 5, 1, 1, 1, 1, 5],
		  "compressed": [5, 1, 5, 5, 4, 1, 1, 5]
	},
	{
		         "col": "G",
		         "row": "2",
		"uncompressed": [2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2],
		  "compressed": [3, 2, 2, 1, 4, 2, 1, 1, 5, 2]
	},
	{
		         "col": "G",
		         "row": "3",
		"uncompressed": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
		  "compressed": [15, 2]
	},
	{
		         "col": "G",
		         "row": "4",
		"uncompressed": [4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 3, 3, 3, 3, 5],
		  "compressed": [5, 4, 5, 5, 4, 3, 1, 5]
	},
	{
		         "col": "G",
		         "row": "5",
		"uncompressed": [3, 3, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4],
		  "compressed": [2, 3, 8, 5, 5, 4]
	},
	{
		         "col": "G",
		         "row": "6",
		"uncompressed": [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5],
		  "compressed": [10, 5, 1, 3, 4, 5]
	},
	{
		         "col": "G",
		         "row": "7",
		"uncompressed": [5, 5, 5, 5, 5, 4, 4, 4, 5, 5, 5, 5, 5, 4, 4],
		  "compressed": [5, 5, 3, 4, 5, 5, 2, 4]
	},
	{
		         "col": "G",
		         "row": "8",
		"uncompressed": [5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 5, 5, 5, 4, 2],
		  "compressed": [9, 5, 1, 4, 3, 5, 1, 4, 1, 2]
	},
	{
		         "col": "G",
		         "row": "9",
		"uncompressed": [5, 5, 4, 2, 2, 5, 4, 2, 2, 2, 4, 2, 2, 2, 2],
		  "compressed": [2, 5, 1, 4, 2, 2, 1, 5, 1, 4, 3, 2, 1, 4, 4, 2]
	},
	{
		         "col": "G",
		         "row": "10",
		"uncompressed": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
		  "compressed": [15, 2]
	},
	{
		         "col": "G",
		         "row": "11",
		"uncompressed": [2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 1],
		  "compressed": [9, 2, 1, 1, 3, 2, 2, 1]
	},
	{
		         "col": "G",
		         "row": "12",
		"uncompressed": [1, 1, 1, 1, 5, 5, 5, 5, 5, 5, 1, 1, 1, 1, 1],
		  "compressed": [4, 1, 6, 5, 5, 1]
	},
	{
		         "col": "H",
		         "row": "1",
		"uncompressed": [1, 1, 1, 1, 1, 5, 5, 5, 5, 1, 5, 5, 5, 5, 1],
		  "compressed": [5, 1, 4, 5, 1, 1, 4, 5, 1, 1]
	},
	{
		         "col": "H",
		         "row": "2",
		"uncompressed": [5, 5, 5, 5, 1, 1, 1, 5, 5, 1, 2, 1, 1, 5, 1],
		  "compressed": [4, 5, 3, 1, 2, 5, 1, 1, 1, 2, 2, 1, 1, 5, 1, 1]
	},
	{
		         "col": "H",
		         "row": "3",
		"uncompressed": [2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 4, 4, 2, 2, 1],
		  "compressed": [2, 2, 3, 1, 3, 2, 2, 1, 2, 4, 2, 2, 1, 1]
	},
	{
		         "col": "H",
		         "row": "4",
		"uncompressed": [5, 5, 4, 2, 1, 5, 5, 4, 2, 1, 5, 5, 4, 2, 1],
		  "compressed": [2, 5, 1, 4, 1, 2, 1, 1, 2, 5, 1, 4, 1, 2, 1, 1, 2, 5, 1, 4, 1, 2, 1, 1]
	},
	{
		         "col": "H",
		         "row": "5",
		"uncompressed": [5, 4, 2, 2, 1, 5, 4, 2, 2, 1, 4, 4, 4, 2, 1],
		  "compressed": [1, 5, 1, 4, 2, 2, 1, 1, 1, 5, 1, 4, 2, 2, 1, 1, 3, 4, 1, 2, 1, 1]
	},
	{
		         "col": "H",
		         "row": "6",
		"uncompressed": [5, 5, 4, 2, 1, 5, 5, 4, 2, 1, 5, 4, 2, 2, 1],
		  "compressed": [2, 5, 1, 4, 1, 2, 1, 1, 2, 5, 1, 4, 1, 2, 1, 1, 1, 5, 1, 4, 2, 2, 1, 1]
	},
	{
		         "col": "H",
		         "row": "7",
		"uncompressed": [5, 4, 2, 2, 1, 4, 2, 2, 2, 1, 2, 2, 2, 2, 1],
		  "compressed": [1, 5, 1, 4, 2, 2, 1, 1, 1, 4, 3, 2, 1, 1, 4, 2, 1, 1]
	},
	{
		         "col": "H",
		         "row": "8",
		"uncompressed": [4, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1],
		  "compressed": [1, 4, 3, 2, 1, 1, 4, 2, 1, 1, 4, 2, 1, 1]
	},
	{
		         "col": "H",
		         "row": "9",
		"uncompressed": [2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1],
		  "compressed": [4, 2, 1, 1, 4, 2, 1, 1, 4, 2, 1, 1]
	},
	{
		         "col": "H",
		         "row": "10",
		"uncompressed": [2, 2, 2, 2, 1, 2, 2, 2, 1, 1, 2, 2, 1, 1, 1],
		  "compressed": [4, 2, 1, 1, 3, 2, 2, 1, 2, 2, 3, 1]
	},
	{
		         "col": "H",
		         "row": "11",
		"uncompressed": [2, 1, 1, 5, 1, 1, 1, 5, 5, 1, 5, 5, 5, 5, 1],
		  "compressed": [1, 2, 2, 1, 1, 5, 3, 1, 2, 5, 1, 1, 4, 5, 1, 1]
	},
	{
		         "col": "H",
		         "row": "12",
		"uncompressed": [5, 5, 5, 5, 1, 5, 5, 5, 5, 1, 1, 1, 1, 1, 1],
		  "compressed": [4, 5, 1, 1, 4, 5, 6, 1]
	}
]
