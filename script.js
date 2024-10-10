// 질문을 추가하는 함수
function addQuestion() {
    // HTML 입력 필드에서 값 가져오기
    const name = document.getElementById("visitor-name").value;
    const question = document.getElementById("visitor-question").value;

    // 이름이나 질문이 비어 있으면 경고창 띄우기
    if (name === "" || question === "") {
        alert("이름과 질문을 모두 입력해주세요!");
        return;
    }

    // 새로운 질문 항목 생성
    const newQuestion = document.createElement("li");
    newQuestion.innerHTML = `<strong>${name}</strong>: ${question}`;

    // 질문 목록에 새로운 질문 추가
    document.getElementById("questions").appendChild(newQuestion);

    // 입력 필드 초기화
    document.getElementById("visitor-name").value = "";
    document.getElementById("visitor-question").value = "";
}
