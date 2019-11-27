from django.shortcuts import render
from django.http import HttpResponse
from datetime import datetime

# Create your views here.
def login(request):

    return render(
        request,
        "AnpiCheckSystemApp/login.html",
        {
            "title" : "ログイン"
        }
    )


def history(request):

    return render(
        request,
        "AnpiCheckSystemApp/history.html",
        {
            'title' : "安否確認システム 連絡履歴"
        }
    )


def history_detail(request):

    return render(
        request,
        "AnpiCheckSystemApp/history_detail.html",
        {
            'title' : "安否確認システム 履歴明細"
        }
    )


def manage_main(request):

    return render(
        request,
        "AnpiCheckSystemApp/manage_main.html",
        {
            'title' : "安否確認システム 管理者画面"
        }
    )


def manage_result(request):

    return render(
        request,
        "AnpiCheckSystemApp/manage_result.html",
        {
            'title' : "安否確認システム 集計結果"
        }
    )


def setting(request):

    return render(
        request,
        "AnpiCheckSystemApp/setting.html",
        {
            'title' : "安否確認システム 設定画面"
        }
    )


def user_add_delete(request):

    return render(
        request,
        "AnpiCheckSystemApp/user_add_delete.html",
        {
            'title' : "安否確認システム 登録画面"
        }
    )


def mail_send(request):

    return render(
        request,
        "AnpiCheckSystemApp/mail_send.html",
        {
            'title' : "安否確認システム 確認メール送信"
        }
    )