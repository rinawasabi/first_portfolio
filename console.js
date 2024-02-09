const quiz = [
    {
       question: "What is the capital city of Japan?",
       answers: [
        'Nara', 
        'Chiba', 
        'Tokyo', 
        'Paris' 
       ],
       correct: 'Tokyo'
    },{
        question: "What is the famous mountain in Japan?",
        answers: [
         'Mt. Neko', 
         'Mt. Fuji', 
         'Mt. Fiji', 
         'Mt. Inu' 
        ],
        correct: 'Mt. Fuji'

    },{
        question: "Which country is sushi from?",
        answers: [
         'Japan', 
         'U.S.A', 
         'Sweden', 
         'Brazil' 
        ],
        correct: 'Japan'
    },{
        question: "What language is spoken in Japan?",
        answers: [
        'Cantonese', 
        'Korean', 
        'English', 
        'Japanese'
        ],
        correct: 'Japanese'
    }
];

const quizLength = quiz.length;
let quizIndex = 0; //クイズを何回するか
let score = 0; //何点か

//htmlのオブジェクトを取ってくるとき、$マークを使う
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;
//ボタンの個数　(ボタンの個数はどの問題でも４個なのでconst)


//クイズの問題文、選択肢を定義
const setupQuiz = () => {
    document.getElementById('js-question').textContent= quiz[quizIndex].question;
    let buttonIndex = 0;
    while (buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
setupQuiz();

//textContextはこのHTMLタグが持ってるテキスト情報を取得するプロパティ, 
//document.getElementById('js-question').textContent= questionっていうのは上書きしてる

//e.targetだけでクリックされたものに対して何かできる
// clickHandler = クリックされたら動くという関数
const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('Correct!');
        score++;
    } else {
        window.alert('Not correct!');
    }

    quizIndex++;

    if(quizIndex < quizLength) {
        //問題数がまだあればこちらを実行
        setupQuiz();
    } else {
        //問題数がもうなければこちらを実行
        window.alert('Finish! You could answer ' + score + '/' + quizLength + '!');
    }
};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength){
    $button[handlerIndex].addEventListener('click',(e) => {
        clickHandler(e);
    });
    handlerIndex++;
}
