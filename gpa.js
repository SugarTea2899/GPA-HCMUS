let table = document.getElementById("tbDiemThiGK");
let totalCredit = 0;
let totalMark = 0;

for (i = 1, row = null; row = table.rows[i]; i++) {
    if (row !== undefined){
        const subjectName = row.cells[1].innerText;
        if (subjectName.includes("Thể dục 1") || subjectName.includes("Thể dục 2")
            || subjectName.includes("Anh văn 1") || subjectName.includes("Anh văn 2") 
            || subjectName.includes("Anh văn 3") || subjectName.includes("Anh văn 4") || subjectName.includes("Giáo dục quốc phòng") 
			|| subjectName.includes("Tin học")){
                continue;
            }
				
        if (row.cells[5].innerText == "") continue;
		if (parseFloat(row.cells[5].innerText) < 5) continue;
		
        const credit = parseInt(row.cells[2].innerText);
        totalCredit += credit
        totalMark += parseFloat(row.cells[5].innerText) * credit;
    }
}

let ans = totalMark * 1.0 / totalCredit;
console.log(`-> Tong so tin chi: ${totalCredit}`);
console.log(`-> GPA: ${ans}`);