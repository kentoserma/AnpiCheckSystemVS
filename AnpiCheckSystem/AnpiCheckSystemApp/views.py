from django.shortcuts import render
from django.http import HttpResponse
from datetime import datetime

# Create your views here.
def login(request):

    return render(
        request,
        "AnpiCheckSystemApp/login.html",  # Relative path from the 'templates' folder to the template file
        {
            "title" : "ログイン"
        }
    )


def history(request):

    return render(
        request,
        "AnpiCheckSystemApp/history.html",
        {
            'title' : "安否連絡履歴"
        }
    )


def history_detail(request):

    return render(
        request,
        "AnpiCheckSystemApp/history_detail.html",
        {
            'title' : "連絡履歴_明細"
        }
    )


def manage_main(request):

    return render(
        request,
        "AnpiCheckSystemApp/manage_main.html",
        {
            'title' : "管理者画面"
        }
    )


def manage_result(request):

    return render(
        request,
        "AnpiCheckSystemApp/manage_result.html",
        {
            'title' : "連絡履歴_集計結果"
        }
    )


def setting(request):

    return render(
        request,
        "AnpiCheckSystemApp/setting.html",
        {
            'title' : "設定画面"
        }
    )


def user_add_delete(request):

    return render(
        request,
        "AnpiCheckSystemApp/user_add_delete.html",
        {
            'title' : "登録画面"
        }
    )


def mail_send(request):

    return render(
        request,
        "AnpiCheckSystemApp/mail_send.html",
        {
            'title' : "確認メール送信画面"
        }
    )