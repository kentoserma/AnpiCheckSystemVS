//--���O�C���{�^�����������Ƃ��̓��̓`�F�b�N����-- 
function OnButtonClickLogin() {
  var EmployeeID = document.getElementById("EmployeeIDContent").value;
  var Password = document.getElementById("PasswordContent").value;


  //--�Ј��ԍ����̓`�F�b�N���� 
  //�����͎��̏��� 
  if (EmployeeID == "") {
    alert("�Ј��ԍ�����͂��Ă��������B")
    return false;    //���M�{�^���{���̓�����L�����Z������ 

    }


  //���l�ȊO�ł̓��͎��̏��� 
  else if (isNaN(EmployeeID) == true) {
    alert("�Ј��ԍ��͔��p�����œ��͂��Ă��������B")
    return false;    //���M�{�^���{���̓�����L�����Z������ 

    }


  //6�����łȂ��̓��͎��̏��� 
  else if (EmployeeID.length != 6) {
    alert("�Ј��ԍ���6�����œ��͂��Ă��������B")
    return false;   //���M�{�^���{���̓�����L�����Z������ 

    }


  //--�p�X���[�h���̓`�F�b�N���� 
  else if (Password == "") {
    alert("�p�X���[�h����͂��Ă��������B")
    return false;   //���M�{�^���{���̓�����L�����Z������ 

    }


  else {
    return true;  //���M�{�^���{���̓�������� 

    }

} 
