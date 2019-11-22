from django.shortcuts import render
from django.http import HttpResponse
from datetime import datetime

# Create your views here.
def login(request):
    now = datetime.now()

    return render(
        request,
        "AnpiCheckSystemApp/login.html",  # Relative path from the 'templates' folder to the template file
        {
            "title" : "ログイン"
        }
    )

def about(request):
    return render(
        request,
        "AnpiCheckSystemApp/about.html",
        {
            'title' : "About HelloDjangoApp",
            'content' : "Example app page for Django."
        }
    )