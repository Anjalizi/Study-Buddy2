from django.urls import path
from django.conf.urls import url

from . import views

app_name = 'activities'

urlpatterns = [
    path('math', views.math, name='math'),
    path('colors', views.colors, name='colors'),
    path('comprehension', views.comprehension, name='comprehension'),
]