from django.shortcuts import render
from appCore.models import Jugador

# Create your views here.

def nuestrosJugadores(request):
    datos = {}
    if request.method == 'POST':

        category = request.POST['selectCategoria']
        genre = request.POST['radioGenero']

        datos['filtroCat'] = category
        if genre == 'F':
            datos['filtroGen'] = 'Mujer'
        elif genre == 'M':
            datos['filtroGen'] = 'Hombre'
        else:
            datos['filtroGen'] = 'Todos'
        
        if category == 'todos':
            if genre == 'todos':
                jugadores = Jugador.objects.all().order_by('apaterno')
            else:
                jugadores = Jugador.objects.filter(genero = genre)
            datos['jugadores'] = jugadores
            #print(datos['jugadores'])
        else:
            if genre == 'todos':
                jugadores = Jugador.objects.filter(categoria = category).order_by('apaterno')
            else:
                jugadores = Jugador.objects.filter(categoria = category, genero = genre).order_by('apaterno')
            datos['jugadores'] = jugadores
            #print(datos['jugadores'])
        if not datos['jugadores']:
            datos['vacio'] = 'No hay jugadores con los filtros especificados'

    return render(request, 'appJugadores/nuestrosJugadores.html', datos)