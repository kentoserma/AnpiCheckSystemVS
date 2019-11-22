"""
Definition of urls for AnpiCheckSystem.
"""

from django.conf.urls import include, url
from AnpiCheckSystemApp import views
import AnpiCheckSystemApp.views

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = [
    url(r'^$', AnpiCheckSystemApp.views.login, name='login'),
    url(r'^home$', AnpiCheckSystemApp.views.login, name='home'),
    url(r'^about$', AnpiCheckSystemApp.views.about, name='about'),
]

