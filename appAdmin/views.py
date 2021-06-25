from django.shortcuts import render, redirect

from django.contrib.auth.decorators import login_required
from django.contrib.auth import get_user

from appCore.models import Jugador, ImagenJugador, Slider
from appCore.forms import JugadorForm, ImagenJugadorForm, SliderForm

# Create your views here.

@login_required
def administrador(request):
    objJugador = Jugador.objects.all().order_by('apaterno')

    datos = {
        'jugadores':objJugador
    }

    return render(request, 'appAdmin/administrador.html', datos)

@login_required
def administradorModif(request, pk):
    jugador = Jugador.objects.get(idJugador = pk)
    #guardamos la fecha de nacimiento en caso que no la modifique
    fecha_nacimiento = jugador.fechaNacimiento

    datos = {
        'form':JugadorForm(instance = jugador), 
        'jugador':jugador,
        'mensaje':""
        }

    if request.method == 'POST':
        formulario_edit = JugadorForm(request.POST, request.FILES, instance=jugador)
        if request.POST['genero'] not in ('F','f','M','m'):
            datos['mensaje'] = "Completa los campos según corresponda"
        else:
            if formulario_edit.is_valid():
                formulario_edit.save()
                datos['mensaje'] = "Categoria editada correctamente"
                if request.POST['fechaNacimiento']=="":
                    jugador.fechaNacimiento = fecha_nacimiento
                    jugador.save(update_fields=['fechaNacimiento'])

                #return redirect(to='administrador')

    return render(request, 'appAdmin/administradorModif.html', datos)


@login_required
def administradorAgreg(request):

    jugador = JugadorForm()
    mensaje = ''

    datos = { 
        'form': jugador,
        'mensaje':mensaje
        }

    try:
        if request.method == 'POST':
            if request.FILES:
                formu = JugadorForm(request.POST, request.FILES)
                if formu.is_valid():
                    formu.save()
                    return redirect(to='administrador')
                else:
                    datos['mensaje'] = "Recuerda que debes completar los campos con *"

            else:
                datos['mensaje'] = "Recuerda que debes cargar la imagen de Portada del jugador"
    except:
        datos['mensaje'] = "Error al cargar nuevo jugador"

    return render(request, 'appAdmin/administradorAgreg.html', datos)

@login_required
def slidersAgreg(request):
    slider = Slider.objects.all()
    mensaje = ''
    datos = { 
        'mensaje':mensaje
        }

    if request.method == 'POST':
        print(request.POST)
        if request.FILES:
            formu = SliderForm(request.POST, request.FILES)
            if formu.is_valid():
                formu.save()
                datos['mensaje'] = "Categoria editada correctamente"
                #return redirect(to='administrador')
            else:
                datos['mensaje'] = "Recuerda que debes completar los campos con *"

        else:
            datos['mensaje'] = "Recuerda que debes cargar la imagen del slider"
    
    return render(request, 'appAdmin/slidersAgreg.html', datos)

@login_required
def slidersModif(request):

    sliders = Slider.objects.all().order_by('idImagen')

    datos = {
        'sliders':sliders,
        'mensaje':''
    }

    if request.method == 'POST':
        pk = request.POST['idImagen']
        mySlider = Slider.objects.get(idImagen = pk)
        
        formulario = SliderForm(request.POST, request.FILES, instance=mySlider)
        if formulario.is_valid():
            formulario.save()
            datos['mensaje'] = 'Slider modificado correctamente'
        else:
            datos['mensaje'] = 'No se ha modificado el slider, no dejes campos sin contenido'

    return render(request, 'appAdmin/slidersModif.html', datos)

@login_required
def sliderElim(request, pk):

    slider = Slider.objects.get(idImagen = pk)
    slider.delete()

    return redirect(to='slidersModif')

@login_required
def administradorBorrar(request, pk):
    jugador = Jugador.objects.get(idJugador = pk)
    jugador.delete()

    return redirect(to='administrador')


@login_required
def administradorAgregImg(request, pk):
    jugador = Jugador.objects.get(idJugador = pk)
    imgs = ImagenJugador.objects.filter(fkJugador = pk)

    form = ImagenJugadorForm()

    datos = {
        'jugador':jugador,
        'imagenes':imgs,
        'form':form
    }

    if request.method == 'POST':
        print(request.POST, request.FILES)
        formulario_registro = ImagenJugadorForm(request.POST, request.FILES)
        if formulario_registro.is_valid():
            formulario_registro.save()

    return render(request, 'appAdmin/agregarImg.html', datos)

@login_required
def modificarImg(request):
    jugadores = Jugador.objects.all()
    

    datos = {
        'jugadores':jugadores
    }
    return render(request, 'appAdmin/modificarImg.html', datos)

@login_required
def modificarImgPersonal(request, pk):
    imgs = ImagenJugador.objects.filter(fkJugador = pk)
    form = ImagenJugadorForm()

    datos = {
        'imagenes':imgs,
        'form':form,
        'pk':pk
    }

    if request.method == 'POST':
        idImg = request.POST['idImagenJug']
        imagen = ImagenJugador.objects.get(idImagenJug = idImg)
        if request.POST['alt'] != '' and request.POST['title'] != '':
            imagen.alt = request.POST['alt']
            imagen.title = request.POST['title']
            imagen.save(update_fields=['alt','title'])
        #formulario_registro = ImagenJugadorForm(request.POST, request.FILES)
        #if formulario_registro.is_valid():
        #    formulario_registro.save()

    return render(request, 'appAdmin/modificarImgPersonal.html', datos)


@login_required
def eliminarImgPersonal(request, pk):
    
    img = ImagenJugador.objects.get(idImagenJug = pk)
    img.delete()

    return redirect(to='modificarImg')












""" if request.FILES == '':
    print('entre')
    #se actualizan solo los demas inputs aparte de la imagen 
    jugador.pnombre = request.POST['pnombre']
    jugador.snombre = request.POST['snombre']
    jugador.apaterno = request.POST['apaterno']
    jugador.amaterno = request.POST['amaterno']
    jugador.nacimiento = request.POST['nacimiento']
    jugador.estilo = request.POST['estilo']
    jugador.preInf = request.POST['preInf']
    jugador.inf = request.POST['inf']
    jugador.juvenil = request.POST['juvenil']
    jugador.tc = request.POST['tc']
    jugador.categoria = request.POST['categoria']
    if request.POST['fechaNacimiento']=="":
        jugador.fechaNacimiento = fecha_nacimiento
    else:
        jugador.fechaNacimiento = request.POST['fechaNacimiento']
    
    jugador.save(update_fields=['pnombre','snombre','apaterno','amaterno','nacimiento','estilo',
                                'preInf','inf','juvenil','tc','categoria','fechaNacimiento'])
    datos['mensaje'] = "Categoria editada correctamente"

    #return redirect(to='administrador')

#except:
else: 
"""
