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
    url(r'^history$', AnpiCheckSystemApp.views.history, name='history'),
    url(r'^history_detail$', AnpiCheckSystemApp.views.history_detail, name='history_detail'),
    url(r'^manage_main$', AnpiCheckSystemApp.views.manage_main, name='manage_main'),
    url(r'^manage_result$', AnpiCheckSystemApp.views.manage_result, name='manage_result'),
    url(r'^setting$', AnpiCheckSystemApp.views.setting, name='setting'),
    url(r'^login$', AnpiCheckSystemApp.views.login, name='login'),
    url(r'^user_add_delete$', AnpiCheckSystemApp.views.user_add_delete, name='user_add_delete'),
    url(r'^mail_send$', AnpiCheckSystemApp.views.mail_send, name='mail_send'),
]

