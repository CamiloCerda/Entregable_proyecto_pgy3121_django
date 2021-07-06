from django.shortcuts import render
from appCore.models import Dirigente

# Create your views here.


def dirigencia(request):
    datosClub = {}
    dirigentes = Dirigente.objects.all().order_by('club')
    club_aux = ''
    for dirigente in dirigentes:
        if club_aux == '' or club_aux != dirigente.club:
            club_aux = dirigente.club
            datosClub[ club_aux] = []
            datosClub[club_aux].append(dirigente.nombre + ' ' + dirigente.apellido)
            datosClub[club_aux].append(dirigente.cargo)

        elif club_aux == dirigente.club:
            club_aux = dirigente.club
            datosClub[club_aux].append(dirigente.nombre + ' ' + dirigente.apellido)
            datosClub[club_aux].append(dirigente.cargo)
    

    listaClubesJSON = []
    for nombreClub, datosDirigentes in datosClub.items():
        if len(datosDirigentes) == 6:
            listaClubesJSON.append({
                'club':nombreClub, 
                'presidente':datosDirigentes[0],
                'secretario':datosDirigentes[2],
                'tesorero':datosDirigentes[4]
                })

    datos = {
        'info' : listaClubesJSON
    }
        

    return render(request, 'appDirigencia/dirigencia.html',datos)