from django.shortcuts import render

def index(request):
	# for study buddy homepage
    return render(request, 'activities/index.html')

def math(request):
	return render(request, 'activities/math.html')

def colors(request):
	return render(request, 'activities/colors.html')

def comprehension(request):
	return render(request, 'activities/english.html')

def rhyme(request):
	return render(request, 'activities/rhymes.html')
