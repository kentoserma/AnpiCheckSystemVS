//-------------------------------------------------------------------------------------
// 概要 : html読み込み時に画面最下部にあるボタンの色を変更する処理
//        　※フッターのボタンの色を変更する
//-------------------------------------------------------------------------------------
window.addEventListener("load", function(){
    var PageTitle = document.getElementById("title");
    var SettingBottun = document.getElementsByClassName("submit");

    // 設定画面を開いているときの処理
    if(PageTitle.innerHTML == "安否確認システム 設定画面"){
      SettingBottun[2].style.backgroundColor = "#6699FF";
      SettingBottun[2].style.borderColor ="#6699FF";
    }

    // 管理者画面を開いているときの処理
    if(PageTitle.innerHTML == "安否確認システム 管理者画面"){
      SettingBottun[1].style.backgroundColor = "#6699FF";
      SettingBottun[1].style.borderColor ="#6699FF";
    }

    else if(PageTitle.innerHTML == "安否確認システム 確認メール送信"){
      SettingBottun[1].style.backgroundColor = "#6699FF";
      SettingBottun[1].style.borderColor ="#6699FF";
    }

    else if(PageTitle.innerHTML == "安否確認システム 登録画面"){
      SettingBottun[1].style.backgroundColor = "#6699FF";
      SettingBottun[1].style.borderColor ="#6699FF";
    }

    else if(PageTitle.innerHTML == "安否確認システム 集計結果"){
      SettingBottun[1].style.backgroundColor = "#6699FF";
      SettingBottun[1].style.borderColor ="#6699FF";
    }

    // 連絡履歴画面を開いているときの処理
    if(PageTitle.innerHTML == "安否確認システム 連絡履歴"){
      SettingBottun[0].style.backgroundColor = "#6699FF";
      SettingBottun[0].style.borderColor ="#6699FF";
    }

    else if(PageTitle.innerHTML == "安否確認システム 履歴明細"){
      SettingBottun[0].style.backgroundColor = "#6699FF";
      SettingBottun[0].style.borderColor ="#6699FF";
    }

});
