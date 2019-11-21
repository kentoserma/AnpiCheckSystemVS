"""
Definition of urls for AnpiCheckSystem.
"""

from django.conf.urls import include, url
import AnpiCheckSystemApp.views

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = [
    url(r'^$', AnpiCheckSystemApp.views.index, name='index'),
    url(r'^home$', AnpiCheckSystemApp.views.index, name='home'),
]

