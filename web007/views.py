from django.shortcuts import render
from django.http import HttpResponse
from .models import *
from django.template import loader
# Create your views here.

def web(request):
    return render(request,'web001.html')

def web2(request):
    return render(request,'web003.html')

def web3(request):
    return render(request,'web004.html')

def login(request):
    if request.method == "GET":
        return render(request,'web004.html')
    else:
        name=request.POST.get('uname')
        password=request.POST['upwd']
        print("用户名:%s,密码:%s"%(name,password))
        userinfo = Userinfo()
        userinfo.username = name
        userinfo.password = password
        userinfo.save()

        return HttpResponse("注册成功!")
