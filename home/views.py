from django.shortcuts import render

# Create your views here.
def index(request):
    context = {}
    return render(request, 'index.html', context)

def login(request):
    context = {}
    return render(request, 'login.html', context)

def signup(request):
    context = {}
    return render(request, 'signup.html', context)

def Vidya_vox(request):
    context = {}
    return render(request, 'Vidya_vox.html', context)

def arijit(request):
    context = {}
    return render(request, 'arijit.html', context)