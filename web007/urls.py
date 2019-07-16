from django.conf.urls import url
from . import views

urlpatterns=[
    url(r'^$',views.web),
    url(r'^web2$',views.web2),
    url(r'^web3$',views.web3),
    url(r'^login$',views.login)
]