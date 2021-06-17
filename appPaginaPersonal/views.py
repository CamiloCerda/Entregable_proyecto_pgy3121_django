from django.shortcuts import render

from appCore.models import Jugador, ImagenJugador

# Create your views here.


def paginaPersonal(request, pk):

    jugador = Jugador.objects.get(idJugador = pk)
    
    imagenes = ImagenJugador.objects.filter(fkJugador = pk)

    datos = {
        'jugador':jugador,
        'imgs':imagenes
    }

    return render(request, 'appPaginaPersonal/paginaPersonal.html', datos)