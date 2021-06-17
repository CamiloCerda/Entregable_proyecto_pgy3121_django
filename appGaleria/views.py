from django.shortcuts import render

# Create your views here.

def centroEntrenamiento(request):
    return render(request, 'appGaleria/centroEntrenamiento.html')