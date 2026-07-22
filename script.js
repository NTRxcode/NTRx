function createLesson() {

    let text = document.querySelector(”textarea“).value;

    let result = document.querySelector(”.result“);

    if (text === ”“) {

        result.innerHTML = ”<h2>กรุณาพิมพ์เนื้อหาก่อน</h2>“;

    } else {

        result.innerHTML = `
        <h2>บทเรียน</h2>
        <p>
        ระบบได้รับข้อความแล้ว:<br><br>
        ${text}
        </p>
        `;

    }

}
