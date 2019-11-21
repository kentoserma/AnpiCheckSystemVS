from django.shortcuts import render
from django.http import HttpResponse
from datetime import datetime

# Create your views here.
def index(request):
    now = datetime.now()

    return render(
        request,
        "AnpiCheckSystemApp/index.html",  # Relative path from the 'templates' folder to the template file
        {
            'title': "Hello Django",
            "message":"Hello Django!",
            "content":" on " + now.strftime("%A, %d %B, %Y at %X")
        }
    )