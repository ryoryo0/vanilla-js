'use strict';




// let command=Number(prompt("123は継続、0で終わり"))


// while(command!==0){
//     console.log(`入力された番号は${command}です`);
//     command=Number(prompt("123は継続、0で終わり"));
//     if(command===0){
//         console.log("ここで終わりです");
//     }
// }


// let command;

// do {
//     command = Number(prompt("123は継続、0で終わり"));
//     if (command === 0) {
//         console.log('ここで完了です');
//     } else {
//         console.log(`入力された番号は${command}です`);
//     }
// } while (command !== 0);


// let money=100;
// const year_text ="年目";

// for(let year=1;year<=30;year++){

//     money*=1.05;
//     if(money<200){
//         continue;
//     }
//     if(money>300){
//         break;
//     }
//     console.log(`${year}${year_text}は${money}円です`);
// }



// let my_money=2500000;

// for(let year =1;year<=30;year++){
//     my_money+=10;



//     if(my_money>=4000000){
//         break;
//     }

//     console.log(`${year}年目は${my_money}です`);
// }

// 三項演算子
// const score=Number(prompt("score?"));
// const a="良い判定です";
// const b="悪い判定です";
// const result=score>80?a:b;

// console.log(result);

// 理論演算子
// const english=Number(prompt("english score?"));
// const math=Number(prompt("math score?"));

// if(english>80&&math>=80){
//     console.log("A!");
// }else{
//     console.log("B");
// }

// スコープ
// let x=10;

// {
//     let x=20;
//     console.log(x);
// }
// console.log(x);


// {
//     function double(num){//仮引数
//         return num*2;
//     }

//     const my_num=10;
//     console.log(double(my_num));//実引数
//     console.log(double(4)*3);//実引数
// }


// returnに関して
// 再度関数結果を使いたかったら関数内にreturnを記述する事
// {
//     // function sum(a,b){
//     //     return a+b;
//     // }

//     // console.log(sum(300,700));

//     function sum(a,b){
//         return console.log(a+b);
//     }

//     const english=Number(prompt("English?"));
//     const math=Number(prompt("math?"));

//     console.log(sum(english,math));

// }


// 引数のデフォルト値設定
// {
//     function taxpulsShopping(price, amount, tax=0.1) {
//         return price * amount + price * tax;
//     }
//     let price = 3000;
//     let amount = Number(prompt("何個注文しますか？?"));
//     if (amount > 10) {
//         alert("10個以内で注文下さい");
//     } else if(amount > 0) {
//         alert("ご注文いただきありがとうございます！！！！");
//     }else{
//         alert("必要個数を入力ください");
//     }
//     console.log(taxpulsShopping(price, amount));
// }


// リターンは処理中でも使用ができる
// 早期リターン
// {
//     function taxpulsShopping(price, amount, tax=1.1,postage=500) {
//         if(!(amount>5)){
//         return price * amount  * tax+postage;
//         }
//         return price * amount  * tax;

//     }
//     let price = 3000;
//     let amount = Number(prompt("何個注文しますか？?"));
//     if (amount > 10) {
//         alert("10個以内で注文下さい");
//     } else if(amount > 0) {
//         alert("ご注文いただきありがとうございます！！！！");
//     }else{
//         alert("必要個数を入力ください");
//     }
//     console.log(taxpulsShopping(price, amount));
// }

// 関数のスコープに関して
// 関数の引数は関数の中でのみ確認をする事が可能
// {
//     function double(num){
//         return num*2;
//     }

//     function triple(num){
//         return num*3;
//     }

//     let score=Number(prompt("Score?"));
//     console.log(`数値は${double(score)}です`);

//     let score02=Number(prompt("Score?"));
//     console.log(`数値は${triple(score02)}です`);
// }


// function showadd(){
//     console.log("---------");
//     console.log("SALE! 50% OFF!");
//     console.log("---------");
// }

// function news(){
//     console.log("BREAKING NEWS!");
// console.log("Two baby pandas born at our Zoo!");
// }


// showadd();
// news();
// showadd();


// 関数を定数として扱う方法
// 関数を定数に入れた際は定数のテキストになる為末尾にセミコロンを付けること
// {
//     // 関数宣言という
//     // どこに記述しても先頭に記述されている事になる、ゆえにエラーが発生しない
//     console.log(double(score));
//     const double=function(num){
//     return num*2;
// };


// const score=Number(prompt("Score?"));
// }


// // 関数式というまたは無名関数とも呼ばれる
// console.log(double(score));
// const double=function(num){
//     return num*2;
// };


// const score=Number(prompt("Score?"));

// // アロー関数式
// const double=(num)=>{
//     return num*2;

// };

// // アロー関数式(省略版)
// const double=num=>num*2;

// const score=Number(prompt("Score?"));
// console.log(double(score));

// 関数を引数として取る方法
// const double=num=>num*2;

// const calc= (num,func)=>{
//     return func(num);
// };

// const score=Number(prompt("Score?"));



// console.log(calc(score,num=>{
//     return num*2;
// }));


// 配列は複数の値を取り扱う際は定数名を複数形にする事(例：score→scores)
// const scores=[60,70,80,90,100];

// console.log(scores.length);
// console.log(scores[2]);
// scores[1]="100";
// console.log(scores);

// 配列の末尾に値を追加する方法
// {
//     const scores = [60, 70, 80, 90, 100];

//     // 末に数字を追加(push)する
//     scores.push(100, 100);
//     // 末から数字を取り除く(pop)
//     scores.pop(100,100);
//     // 先頭に数字を付け足す
//     scores.unshift(100,100);
//     // 先頭から数字を取り除く
//     scores.shift(100,100);
//     console.log(scores);
// }


// {
//     const scores = [60, 70, 80, 90, 100];
//     scores.push(110,120);
//     for(let i=0;i<scores.length;i++){
//         console.log(scores[i]);
//     }
// }

// // foreach
// const scores = [60, 70, 80, 90, 100];
// scores.forEach(score=>console.log(score)
// );

// // foreach(引数×2)
// const scores = [60, 70, 80, 90, 100];
// let sum=0;
// scores.forEach((score,index)=>{
//     sum+=score;
// console.log(`${index}:${score}`);}
// );
// console.log(sum);
// console.log(sum/scores.length);



// オブジェクトの作成方法
// const scores={
//     'math':80,
//     'english':100
// };

// console.log(scores.english);
// console.log(scores);

// 

// const scores={
//     math:80,
//     english:100,
// };

// let sum=0;

// scores.science=85;
// const entries=Object.entries(scores);
// entries.forEach((prop)=>{
//     sum+=prop[1];
//     console.log(`${prop[0]}は${prop[1]}点です`);
// });

// console.log(sum);
// console.log(sum/entries.length);



// // spliceに関して

//     const scores=[70,90,80,85];
//     // 70,90,80,85
//     scores.splice(2,0,77,88);
//     // 70,90,77,88,80,85
//     // 取り除いた数字を代入することができる
//     const delited=scores.splice(3,1);
//     scores.splice(2,2,30);
//     // 70,90,30,85


// console.log(scores);
// console.log(delited);
// // scores
// console.log(88);
// // delited
// console.log(70,90,30,85);


// joinの使い方
// const names=['taro','jiro','sabro']
// console.log(names.join('|'));
// console.log(names.join());
// console.log(names.join(''));


// splitの使い方
// const names='taro|jiro|sabro';
// console.log(names.split('|'));



// // map関数の使いかた
// const prices =[100,150,200];


// // prices.forEach((price)=>{
// //     pricesWithTax.push(price*1.1);
// // });


// // 新しい配列を作成してくれる
// const pricesWithTax= prices.map((price)=>{
//     return price*1.1
// });


// console.log(pricesWithTax);


// filter関数に関して
// const prices =[100,150,200];

// // const priceOver150=[];
// // prices.forEach((price)=>{
// //     if(price>=150){
// //         priceOver150.push(price);
// //     }
// // });

// const priceOver150=prices.filter((price)=>{
//     return price>=150;
// });
// console.log(priceOver150);


// 分割代入に関して
// const scores=[70,80,90,100];
// // const first=scores[0];
// // const second=scores[1];
// // const third=scores[2];
// // const fourth=scores[3];
// // ※配列を作っているわけではない為、ちゅいが必要
// const[first,second,third,fourth]=scores;

// console.log(first);
// console.log(second);
// console.log(third);
// console.log(fourth);


// 分割代入に関して(2)


// let start="tokyo";
// let goal="osaka";


// // let yobi=null
// // yobi=start;
// // start=goal;
// // goal=yobi;

// [goal,start]=[start,goal];

// console.log(start);
// console.log(goal);


// レスト構文に関して
// const scores=[70,90,80,90];

// const [first,...others]=scores;
// console.log(`${first}と${others.join('|')}で分かれてます`)

// const topother= others.filter((other)=>{
//     return other>50;
// });

// console.log(topother);

// const amarimono= topother.splice(1,1,40);
// console.log(amarimono);



// スプレッド構文に関して
// const moreScores=[110,120];
// const scores=[70,90,80,90,...moreScores];

// console.log(scores);


// 記述方法が同じな為、見分けがつきづらい方↓
// レスト構文は左辺で使用されればレスト構文、右辺で使用されればスプレッド構文であると見分ける
// const moreScores={
//     goro:110,
//     rokuro:120,
// }
// const scores ={
//     taro:80,
//     ziro:90,
//     saburo:100,
//     ...moreScores
// }

// // const {taro,ziro,saburo}=scores;
// const {taro,...others}=scores;
// console.log(others);



// let num=10;

// const buckUp=num;
// num=99;
// console.log(num);
// console.log(buckUp);


// const nums=[10,20,30];

// const backUp=nums;
// nums[0]=99;
// console.log(nums);
// console.log(backUp);


// スプレッド構文でバックアップを取る方法
// const nums=[10,20,30];

// const backUp=[...nums];
// nums[0]=99;
// console.log(nums);
// console.log(backUp);


// htmlの指定方法(querySelector)※1つのみ取得できる
// 全て取得したい場合はquerySelectorAllを使用する
// document.querySelector('button').addEventListener('click',()=>{
//     document.querySelector('p').textContent=document.querySelector('button').textContent;
// });

// console.log('hello');

// document.querySelector('button').addEventListener('click',()=>{
//     document.querySelector('p').classList.add('pink-bg','red-border');
//     document.querySelector('p').classList.remove('green-color');
// });


// document.querySelector('button').addEventListener('click',()=>{
//     // if(document.querySelector('p').classList.contains('pink-bg')===false){
//     //     document.querySelector('p').classList.add('pink-bg');
//     // }else{
//     //     document.querySelector('p').classList.remove('pink-bg');
//     // }

//     document.querySelector('p').classList.toggle('pink-bg');
// });

// document.querySelector('button').addEventListener('click',()=>{
//     document.querySelectorAll('li').forEach((li=>{
//         li.classList.toggle('red');
//     }));
// });

// document.querySelector('button').addEventListener('click',()=>{
//     document.querySelectorAll('li')[0].textContent='changed!';
//     document.querySelectorAll('li')[1].textContent='changed!02';
//     document.querySelectorAll('li')[2].textContent='changed!03';
// });



// document.querySelector('button').addEventListener('click',()=>{
//     document.querySelectorAll('.target').forEach((li=>{
//         li.classList.toggle('red');
//     }));
// });


// document.querySelector('button').addEventListener('click',()=>{
//     const liElement= document.createElement('li');
//     liElement.textContent='こんにちは';
//     // document.querySelector('ul').appendChild(liElement);
//     // document.querySelector('ul').insertBefore(liElement,document.querySelector('li:nth-child(2)'));
    
//     if(confirm('sure')===true){ 
//     document.querySelector('#second').remove();
// }
// });


// セレクトボックスの値に接続
// document.querySelector('button').addEventListener('click',()=>{
//     // alert(document.querySelector('input').value);
//     // alert(document.querySelector('textarea').value);
//     alert(document.querySelector('select').textContent);
// });


// ラジオボタンに接続
// document.querySelector('button').addEventListener('click',()=>{
//     document.querySelectorAll('input').forEach((color)=>{
//         if(color.checked===true){
//             alert(color.value);
//         };
//     });
// });



// チェックボックスに接続
// document.querySelector('button').addEventListener('click',()=>{

//     const colors=[];
//     document.querySelectorAll('input').forEach((checkbox)=>{
//         if(checkbox.checked===true){
//             colors.push(checkbox.value);
//         };
        
//     });
//     alert(colors);
// });


// input要素をそのままpタグに反映させる方法
// input⇨text,textarea,select
// change→radio,checkbox
// document.querySelector('input').addEventListener('input',()=>{
    
//    const inputText = document.querySelector('input').value.length;
//    document.querySelector('p').textContent = inputText;
// });


// フォーカスの使い方
// focusが当たるとテキストが変更される
// document.querySelector('input').addEventListener('focus',()=>{
//     document.querySelector('p').textContent='English only!';
// });
// // focusが外れるとテキストが変わる
// document.querySelector('input').addEventListener('blur',()=>{
//     document.querySelector('p').textContent='次の項目の入力に進んで下さい';
// });

// // focusが最初から当たっている
// document.querySelector('input').focus();

// キーボードを入力するとイベントが発生するkeydown
// document.addEventListener('keydown',(e)=>{
//     document.querySelector('p').textContent=e.key;
// });

// マウスを動かすとイベントが発生するmousemove
// document.addEventListener('mousemove',(e)=>{
//     document.querySelector('p').textContent=`X:${e.clientX}Y:${e.clientY}`;
// });

// サブミットアクションを作成する
// document.querySelector('form').addEventListener('submit',(e)=>{
//     e.preventDefault();
//     document.querySelector('p').textContent=document.querySelector('input').value;
// });

// document.querySelector('button').addEventListener('click',()=>{
//     document.querySelector('p').style.fontSize='24px';
// });

// {
//     // Math.ceil　...小数点を切り上げる(ceilは天井という意味)
//     // Math.floor...小数点を切り捨て(floorは床という意味)
//     // Math .round...四捨五入をしてくれる
// let minute = Number(prompt('Nnmber?'));
// let hour01=Math.floor(minute/60);
// let hour02=minute%60;
// console.log(`この映画は${hour01}時間${hour02}分です`);
// }



// toFixed(小数点を指定)toLocaleString()3桁毎にカンマをつけてくれる
// const n = Number(prompt('Yen?'));
// const amount=(n/138.91).toFixed(2);
// console.log(`USD:${Number(amount).toLocaleString()}`);



// {
//     const n= Number(prompt("Score?"));

//     for(let i=0;i<=n;i++){
//         if(i%3===0){
//             console.log(`---item${i}---`);
//         }else{
//             console.log(`===item${i}===`);
//         }
        
//     }
// }




// {
//     function getRandomInteger(max){
//         return Math.floor(Math.random()*(max+1));
//     }

// {
//     for(let i=0;i<=10;i++){
//         const n = getRandomInteger(6);
//         console.log(`${i}:${n}`);
//     }
// }


// }


// const score=[70,90,80,75];

// const maxScore=Math.max(...score);
// const minScore=Math.min(...score);
// console.log(maxScore);
// console.log(minScore);

// 文字列に対しては制限が多く、push,forEach,string[]の書き換えは不可(配列と同じ使い方はできない)
// {
//     const string=prompt('文字をご入力ください')
//     console.log(string);
//     console.log(string.length);
//     console.log(string[0]);
// }



// toLowerCase...受け取った文字列を全て小文字に変換
// toUpperCase...受け取った文字列を全て大文字に変換
// trim...空白(スペース)を取り除く
// const string=prompt('Name?');

// if(string.toLowerCase().trim()==='taro'){
//     console.log('Correct');
// }else{
//     console.log('Wrong');
// }



// 特定の文字列を含む検索命令...includes(返り値はtrue,false)
// 特定の文字列を最初に含むものの探し方...indexOf(返り値はindex番号か-1※-1の場合は存在しないと同じ意味を持つ)
// 特定の文字列を最初に含むものの探し方...startsWith(返り値はtrue,false)
// 
// const email=[
//     'taro@example.com',
//     'kintaro@example.com',
//     'taiki@example.com',
// ];


// // email.forEach((mail)=>{
// //     if(mail.indexOf('taro')===0){
// //     console.log(mail);
// // }

//     if(mail.startsWith('taro')===true){
//         console.log(mail);
//     }
// });




// slice()の使い方
// substringもstring同じ意味です
// 若干の違いはあるがsliceの方が高機能である為、多用される事が多い
// const emails=[
//     'taro@example.com',
//     'kintaro@example.com',
//     'taiki@example.com',
// ];

// // emails.forEach((email)=>{
// //     let index =email.indexOf('@');
// //     console.log(email.slice(0,index));
// // });

// emails.forEach((email)=>{
//     let index =email.indexOf('@');
//     console.log(email.substring(0,index));
// });




// replaceは文字列を置換する命令...replace(置換したい文字、置換後の文字)
// const emails=[
//     'taro@example.com',
//     'kintaro@example.com',
//     'taiki@example.com',
// ];

// // emails.forEach((email)=>{
// //     let index =email.indexOf('@');
// //     console.log(email.slice(0,index));
// // });

// // emails.forEach((email)=>{
// //     console.log(email.replace('@example.com',''));
// // });


// emails.forEach((email)=>{
//     const items=email.split('@');
//     console.log(items[0]);
// });



// 文字列をきれいに合わせる方法

// // 特定の数字分繰り返し実施する方法
// const counts=[6,12,8,15];


// counts.forEach((count)=>{
//     // let bar="";
//     // for(let i=0;i<=count;i++){
//     //     bar+='*';
//     // }

//     const bar='*'.repeat(count);
//     const label=String(count).padEnd(2,' ')
// ;    console.log(`${label}は${bar}です `);
// });


// 日付を表す
// const date= new Date();
// console.log(date.toLocaleString());

// 日付を個別に取得する
// getMonthとgetDayは0からスタートする
// 1月→0,,月曜日→0

// const date= new Date();
// console.log(date);

// console.log(date.toLocaleString());

// // 年
// console.log(date.getFullYear());

// // 月
// console.log(date.getMonth());

// // 日
// console.log(date.getDate());

// // 　時間
// console.log(date.getHours());

// // 分
// console.log(date.getMinutes());

// // 秒
// console.log(date.getSeconds());

// // ミリ秒
// console.log(date.getMilliseconds());

// // 曜日
// console.log(date.getDay());


// 日付を指定する方法
// const date= new Date(2000,3,11);
// console.log(date.toLocaleString());



// データの更新方法
// const date= new Date(2000,3,11);
// // new Dateはオブジェクトになる為、constから変更してもOK
// // date.setDate(23);

// date.setDate(date.getDate()+100);
// console.log(date.toLocaleString());


// 日付のバックアップを取得する方法
// const d = new Date(2000,3,11);

// const backup= new Date(d.getTime());

// d.setDate(23);

// console.log(d);
// console.log(backup);

// const d = new Date(2000,3,11);


// console.log(d);
// // UTC...全世界の時間の基準
// // 1970/01/01 00:00:00からの経過(ミリ秒)がgettimeで表示される
// // Unix Timestampという
// console.log(d.getTime());
// const d2 = new Date(d.getTime()+1000);
// console.log(d2);


// 過去の登校日から現在までの時差の求め方
// 時差や経過時間を求める際はgetdateを使用することが多い
// const diff =new Date().getTime() - new Date(2023,5,10).getTime();
// const day= Math.floor(diff/1000/60/60/24);
// console.log(day);



// const d = new Date(2001,0,1);

// const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// const month =months[d.getMonth()];
// const date=String(d.getDate()).padStart(2,'0');
// const day =days[d.getDay()];

// console.log(`${month}年${date}日${day}曜日です`);

// console.log(new Date());
// setInterval(()=>{
//     console.log(new Date());
// },3000);


// let count=3;
// const intetervalId = setInterval(()=>{

    
//     console.log(count);
//     count-=1;

//     if(count<0){
//         clearInterval(intetervalId);
// };
// },1000);

// console.log(`ID:${intetervalId}`);

// setTimeout(()=>{
//     // console.log('50% OFF!');

//     // window.location.href= 'https://kazesauna.jp/';
// },3000);

// console.log('Page loaded');




// setTimeout(()=>{
//     console.log(new Date());
//     setTimeout(()=>{
//         console.log(new Date());
//         setTimeout(()=>{
//             console.log(new Date());
//             setTimeout(()=>{
//                 console.log(new Date());
//             },1000);
//         },1000);
//     },1000);
// },1000);

// 再帰関数に関して
// function showClock(){
//     setTimeout(()=>{
//         console.log(new Date ());
//         showClock();
//     },1000)
// }

// showClock();

// window.addEventListener('load',()=>{
//     let time=  document.querySelector('p');
//     let buttonElement= document.querySelector('button');
//     let timeoutId;
//     time.innerHTML='';

//     function showClick(){
//         timeoutId=setTimeout(()=>{
//             time.innerHTML=new Date();
//             showClick();
//         },1000)
//     }
//     buttonElement.addEventListener('click',()=>{
//         clearTimeout(timeoutId);
//     });
//     showClick();
// });

// データ型

// let isDevmode=true;
// const pElement=document.querySelector('p');
// const buttonElement=document.querySelector('button');
// buttonElement.addEventListener('click',  ()=>{
//     if(!confirm('本当にほんとに切り替えますか？')){///直接真偽真偽値を渡している
//         return;
//     }
//     if(isDevmode){
//         pElement.textContent='dev mode off';
        
//     }else{
//         pElement.textContent='dev mode on';
//     }
//     isDevmode=!isDevmode;
// });


// nameの名前で定義する事はは非推奨
// const name =prompt('名前を入力してください');
// if(name){
//     console.log(`私の名前は${name}です。`)
// }else{
//     console.log('名前は入力されておりません');
// }


// undefinedになるとき
// let x;
// console.log(x);

// let scores=[
//     70,
//     90,
//     100
// ];
// console.log(scores[100]);

// const score={math:80,english:90};
// console.log(score.history);


// if(score.history===undefined){
//     console.log('historyは定義されされていません');
// }




//nullに関して
// const score={math:80,english:90,history:null};
// console.log(score.history);


// if(score.history===null){
//     console.log('historyは値がありません');
// }


// // typeofに関して
// console.log(typeof 5);//number
// console.log(typeof 'hello');//string
// console.log(typeof [5,8]);//object
// console.log(typeof {math:80,english:90});//object
// console.log(typeof true);//boolean
// console.log(typeof undefined);//undefined
// console.log(typeof null);//object



// クラスの定義方法①
// class User{///データ型の定義は1文字目は大文字にする
//     constructor(nameFromNew,scoreFromName){
//         this.name=nameFromNew;
//         this.score=scoreFromName;

//     }
// }


// const user1 = new User('taro',70);
// const user2 = new User('ziro',50);


// console.log(user1.name);
// console.log(user1.score);

// console.log(user2.name);
// console.log(user2.score);


// クラスの定義方法②
// class Score{
//     constructor(kamoku,score){
//         this.kamoku=kamoku;
//         this.score=score;
//     }

//     getScoregrade(){
//         // let grade ;
//         // if(this>=80){
//         //     grade='A';
//         // }else{
//         //     grade='B';
//         // }
        
//         // return grade;
//         return this.score>=80?'A':'B';
//     }
    
//     getUserScore(){
//         return `${this.kamoku}${this.score}${this.getScoregrade()}`
        
//     }
// }

// class MathScore extends Score{
//     constructor(score){
//         super('Math',score);
//     }
//     getScoregrade(){
//         // let grade ;
//         // if(this>=80){
//         //     grade='A';
//         // }else{
//         //     grade='B';
//         // }
        
//         // return grade;
//         return this.score>=50?'A':'B';
//     }
// }

// class EnglishScore extends Score{
//     constructor(score){
//         super('Englosh',score);
//     }
// }

// class User{///データ型の定義は1文字目は大文字にする
//     nameFromNew;
//     #scoreFromNew;
//     // static count=0;//静的プロパティ
//     constructor(nameFromNew,scoreFromNew){
//         this.name=nameFromNew;
//         this.#score=scoreFromNew;

        
//         // User.count++;
//     }
//     // getUserString(){
//     //     // return `${this.name}${this.score.kamoku}${this.score.score}`;
//     //     return `${this.name}${this.score}`;
//     // }

//     // static getUserConstString(){
//     //     return`${User.count}instance(s)created.`;
//     // }
//     get score(){
//         return this.#score;
//     }

//     set score(newValue){
//         if(newValue<0||newValue>100){
//             console.log('無効な値です')
//             return;
//         }
//         this.#score=newValue;
//     }

// }



// const user = new User('taro',110);
// // const user2 = new User('ziro',70);
// // console.log(User.getUserConstString());
// user.#score=99999
// console.log(user.score);

// // console.log(user1.getUserString());
// // console.log(user2.getUserString());