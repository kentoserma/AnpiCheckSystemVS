//-------------------------------------------------------------------------------------
// 概要 : 回答状況によって表示される文字の色を変更する
//        　「回答済み」ー青　　「未回答」ー赤
//-------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------
// 概要 : 「登録」ボタンを押下した際の処理
//-------------------------------------------------------------------------------------
window.addEventListener("load", function(){

  var AnswerStatus = document.getElementsByClassName("AnswerStatus");

  for(var i=0; i <= AnswerStatus.length; i++){

    if(AnswerStatus[i].innerHTML == "回答済み"){
      AnswerStatus[i].style.color ="#6699FF";
    }

    else if(AnswerStatus[i].innerHTML == "未回答"){
      AnswerStatus[i].style.color ="#FF6600";
    }

}



});
