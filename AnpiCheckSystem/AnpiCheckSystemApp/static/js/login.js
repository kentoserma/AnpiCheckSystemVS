//--ログインボタンを押したときの入力チェック処理-- 
function OnButtonClickLogin() {
  var EmployeeID = document.getElementById("EmployeeIDContent").value;
  var Password = document.getElementById("PasswordContent").value;


  //--社員番号入力チェック処理 
  //未入力時の処理 
  if (EmployeeID == "") {
    alert("社員番号を入力してください。")
    return false;    //送信ボタン本来の動作をキャンセルする 

    }


  //数値以外での入力時の処理 
  else if (isNaN(EmployeeID) == true) {
    alert("社員番号は半角数字で入力してください。")
    return false;    //送信ボタン本来の動作をキャンセルする 

    }


  //6文字でないの入力時の処理 
  else if (EmployeeID.length != 6) {
    alert("社員番号は6文字で入力してください。")
    return false;   //送信ボタン本来の動作をキャンセルする 

    }


  //--パスワード入力チェック処理 
  else if (Password == "") {
    alert("パスワードを入力してください。")
    return false;   //送信ボタン本来の動作をキャンセルする 

    }


  else {
    return true;  //送信ボタン本来の動作をする 

    }

} 
